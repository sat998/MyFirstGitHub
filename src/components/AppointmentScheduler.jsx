import React, { useState, useEffect } from 'react';
import { db } from '../utils/firebase';
import { collection, addDoc, query, where, onSnapshot } from 'firebase/firestore';
import emailjs from '@emailjs/browser';
import { CLINIC_LOCATIONS, isClinicOpen, TIME_SLOTS } from '../utils/holidays';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAuth } from '../context/AuthContext';

const AppointmentScheduler = () => {
    const { currentUser } = useAuth();
    const [location, setLocation] = useState('');
    const [date, setDate] = useState(null);
    const [status, setStatus] = useState(null);
    const [formData, setFormData] = useState({ name: '', phone: '', reason: '' });
    const [submitted, setSubmitted] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [bookedSlots, setBookedSlots] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (currentUser) {
            setFormData(prev => ({
                ...prev,
                name: currentUser.displayName || '',
                // We could also store phone in user profile if we wanted
            }));
        }
    }, [currentUser]);

    useEffect(() => {
        if (date && location) {
            // Format date to YYYY-MM-DD for Firestore query
            const formattedDate = date.toISOString().split('T')[0];

            // Real-time listener for booked slots (filtered by date AND location)
            const q = query(
                collection(db, "appointments"),
                where("date", "==", formattedDate),
                where("location", "==", location)
            );
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const slots = [];
                querySnapshot.forEach((doc) => {
                    slots.push(doc.data().slot);
                });
                setBookedSlots(slots);
            }, (error) => {
                console.error("Error fetching slots:", error);
                // Fallback for demo if Firebase isn't configured
                setBookedSlots([]);
            });
            return () => unsubscribe();
        }
    }, [date, location]);

    const isDateAvailable = (date) => {
        const day = date.getDay(); // 0 = Sunday, 1 = Monday, ...

        // Always block Sundays (0)
        if (day === 0) return false;

        if (location === 'SALEM') {
            // Salem: Mon(1), Tue(2), Wed(3) are OPEN. 
            // Block Thu(4), Fri(5), Sat(6).
            return day === 1 || day === 2 || day === 3;
        }

        if (location === 'ATTUR') {
            // Attur: Thu(4), Fri(5), Sat(6) are OPEN.
            // Block Mon(1), Tue(2), Wed(3).
            return day === 4 || day === 5 || day === 6;
        }

        return false; // Block everything if no location selected (though input is disabled)
    };

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
        setSelectedSlot(null);

        if (selectedDate && location) {
            const clinicStatus = isClinicOpen(selectedDate, location);
            setStatus(clinicStatus);
        } else {
            setStatus(null);
        }
    };

    const handleLocationChange = (e) => {
        const selectedLocation = e.target.value;
        setLocation(selectedLocation);
        setDate(null); // Reset date on location change
        setSelectedSlot(null);
        setStatus(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formattedDate = date.toISOString().split('T')[0];

            // 1. Save to Firebase
            await addDoc(collection(db, "appointments"), {
                date: formattedDate,
                location,
                slot: selectedSlot,
                ...formData,
                userId: currentUser ? currentUser.uid : null, // Save userId if logged in
                createdAt: new Date()
            });

            // 2. Send Email to Doctor
            const locationName = CLINIC_LOCATIONS[location]?.name || location;
            await emailjs.send(
                'service_2ptkq4x',
                'template_yk6ftoh',
                {
                    to_name: 'Dr. Kalicharan P',
                    from_name: formData.name,
                    message: `New appointment request\n\nLocation: ${locationName}\nDate: ${formattedDate}\nTime: ${selectedSlot}\nPhone: ${formData.phone}\nReason: ${formData.reason}`,
                    reply_to: 'sat998@gmail.com'
                },
                '4MX1QNdStuiJl3xZ7'
            );

            // 3. Send Confirmation Email to Patient
            await emailjs.send(
                'service_2ptkq4x',
                'template_yk6ftoh',
                {
                    to_name: formData.name,
                    from_name: 'Dr. Kalicharan P Clinic',
                    message: `Your appointment is confirmed!\n\nLocation: ${locationName} Clinic\nDate: ${formattedDate}\nTime: ${selectedSlot}\n\nWe look forward to seeing you!\n\nFor any changes, please call: +91 98765 43210`,
                    reply_to: formData.phone || 'noreply@clinic.com'
                },
                '4MX1QNdStuiJl3xZ7'
            );

            console.log('Appointment booked:', { date: formattedDate, slot: selectedSlot, ...formData });
            setSubmitted(true);
        } catch (error) {
            console.error("Error booking appointment:", error);
            alert("There was an error booking your appointment. Please check your connection or try again.");
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div id="success-message" className="glass-panel animate-fade-in" style={{ textAlign: 'center', padding: '60px 40px', color: 'var(--success-color)' }}>
                <div style={{ fontSize: '4rem', marginBottom: '20px' }}>✅</div>
                <h3 className="heading-md" style={{ color: 'var(--success-color)' }}>Request Sent!</h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '30px' }}>
                    We will contact you shortly to confirm your visit at<br /><strong>{CLINIC_LOCATIONS[location]?.name} clinic</strong><br />on <strong>{date?.toLocaleDateString()} at {selectedSlot}</strong>.
                </p>
                <button className="btn btn-primary" onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', reason: '' });
                    setLocation('');
                    setDate(null);
                    setSelectedSlot(null);
                }}>Book Another</button>
            </div>
        );
    }

    return (
        <div className="glass-panel animate-slide-up" style={{ padding: '40px' }}>
            <h2 className="heading-md" style={{ color: 'var(--primary-color)', fontSize: '2rem' }}>Book Appointment</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>Select a date and time slot.</p>

            <form onSubmit={handleSubmit}>
                <div className="form-group" style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Select Clinic Location
                    </label>
                    <select
                        id="clinic-location"
                        value={location}
                        onChange={handleLocationChange}
                        style={{
                            width: '100%',
                            padding: '16px',
                            borderRadius: 'var(--radius-md)',
                            border: '2px solid transparent',
                            backgroundColor: 'rgba(255,255,255,0.8)',
                            fontSize: '1rem',
                            transition: 'all 0.3s ease',
                            outline: 'none',
                            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)',
                            cursor: 'pointer'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                        onBlur={(e) => e.target.style.borderColor = 'transparent'}
                        required
                    >
                        <option value="">-- Choose Location --</option>
                        <option value="SALEM">Salem (Mon-Wed)</option>
                        <option value="ATTUR">Attur (Thu-Sat)</option>
                    </select>
                </div>

                <div className="form-group" style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Select Date
                    </label>
                    <div className="custom-datepicker-wrapper">
                        <DatePicker
                            selected={date}
                            onChange={handleDateChange}
                            minDate={new Date()}
                            filterDate={isDateAvailable}
                            disabled={!location}
                            placeholderText={location ? "Select an available date" : "Please select a location first"}
                            dateFormat="MMMM d, yyyy"
                            className="glass-input"
                            wrapperClassName="w-full"
                            required
                        />
                    </div>
                    {status && !status.isOpen && (
                        <div id="clinic-status-closed" className="animate-fade-in" style={{
                            color: 'var(--error-color)',
                            marginTop: '12px',
                            fontSize: '0.9rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            backgroundColor: '#fef2f2',
                            padding: '10px',
                            borderRadius: '8px'
                        }}>
                            <span>⛔</span> Clinic is closed: {status.reason}
                        </div>
                    )}
                </div>

                {status && status.isOpen && (
                    <div className="form-group animate-fade-in" style={{ marginBottom: '24px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Available Slots
                        </label>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '10px' }}>
                            {TIME_SLOTS.map((slot) => {
                                const isBooked = bookedSlots.includes(slot);
                                const isSelected = selectedSlot === slot;
                                return (
                                    <button
                                        key={slot}
                                        type="button"
                                        disabled={isBooked}
                                        onClick={() => setSelectedSlot(slot)}
                                        style={{
                                            padding: '10px',
                                            borderRadius: '8px',
                                            border: isSelected ? '2px solid var(--primary-color)' : '1px solid #e5e7eb',
                                            backgroundColor: isSelected ? 'var(--primary-light)' : (isBooked ? '#f3f4f6' : 'white'),
                                            color: isSelected ? 'var(--primary-dark)' : (isBooked ? '#9ca3af' : 'var(--text-primary)'),
                                            cursor: isBooked ? 'not-allowed' : 'pointer',
                                            opacity: isBooked ? 0.6 : 1,
                                            fontWeight: isSelected ? '600' : 'normal',
                                            transition: 'all 0.2s ease'
                                        }}
                                    >
                                        {slot}
                                    </button>
                                );
                            })}
                        </div>
                        {selectedSlot && <p style={{ marginTop: '10px', fontSize: '0.9rem', color: 'var(--primary-color)' }}>Selected: <strong>{selectedSlot}</strong></p>}
                    </div>
                )}

                <div className="form-group" style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Patient Name
                    </label>
                    <input
                        id="patient-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        style={{
                            width: '100%',
                            padding: '16px',
                            borderRadius: 'var(--radius-md)',
                            border: '2px solid transparent',
                            backgroundColor: 'rgba(255,255,255,0.8)',
                            fontSize: '1rem',
                            transition: 'all 0.3s ease',
                            outline: 'none',
                            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                        onBlur={(e) => e.target.style.borderColor = 'transparent'}
                        required
                    />
                </div>

                <div className="form-group" style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Phone Number
                    </label>
                    <input
                        id="patient-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        style={{
                            width: '100%',
                            padding: '16px',
                            borderRadius: 'var(--radius-md)',
                            border: '2px solid transparent',
                            backgroundColor: 'rgba(255,255,255,0.8)',
                            fontSize: '1rem',
                            transition: 'all 0.3s ease',
                            outline: 'none',
                            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                        onBlur={(e) => e.target.style.borderColor = 'transparent'}
                        required
                    />
                </div>

                <div className="form-group" style={{ marginBottom: '32px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Reason for Visit
                    </label>
                    <textarea
                        id="patient-reason"
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                        placeholder="Briefly describe your symptoms..."
                        style={{
                            width: '100%',
                            padding: '16px',
                            borderRadius: 'var(--radius-md)',
                            border: '2px solid transparent',
                            backgroundColor: 'rgba(255,255,255,0.8)',
                            fontSize: '1rem',
                            transition: 'all 0.3s ease',
                            outline: 'none',
                            minHeight: '120px',
                            fontFamily: 'inherit',
                            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                        onBlur={(e) => e.target.style.borderColor = 'transparent'}
                    />
                </div>

                <button
                    id="submit-btn"
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%', fontSize: '1.1rem' }}
                    disabled={!date || (status && !status.isOpen) || !selectedSlot || loading}
                >
                    {loading ? 'Processing...' : 'Confirm Appointment'}
                </button>
            </form>
        </div>
    );
};

export default AppointmentScheduler;
