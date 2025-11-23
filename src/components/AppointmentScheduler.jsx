import React, { useState, useEffect } from 'react';
import { isClinicOpen, CLINIC_LOCATIONS } from '../utils/holidays';
import { db } from '../utils/firebase';
import { collection, addDoc, query, where, onSnapshot } from 'firebase/firestore';
import emailjs from '@emailjs/browser';

const TIME_SLOTS = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '04:00 PM', '04:30 PM',
    '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM'
];

const AppointmentScheduler = () => {
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [status, setStatus] = useState(null);
    const [formData, setFormData] = useState({ name: '', phone: '', reason: '' });
    const [submitted, setSubmitted] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [bookedSlots, setBookedSlots] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (date && location) {
            // Real-time listener for booked slots (filtered by date AND location)
            const q = query(
                collection(db, "appointments"),
                where("date", "==", date),
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

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        setSelectedSlot(null);

        if (selectedDate && location) {
            const dateObj = new Date(selectedDate + 'T00:00:00');
            const clinicStatus = isClinicOpen(dateObj, location);
            setStatus(clinicStatus);
        } else {
            setStatus(null);
        }
    };

    const handleLocationChange = (e) => {
        const selectedLocation = e.target.value;
        setLocation(selectedLocation);
        setDate('');
        setSelectedSlot(null);
        setStatus(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // 1. Save to Firebase
            await addDoc(collection(db, "appointments"), {
                date,
                location,
                slot: selectedSlot,
                ...formData,
                createdAt: new Date()
            });

            // 2. Send Email via EmailJS
            const locationName = CLINIC_LOCATIONS[location]?.name || location;
            await emailjs.send(
                'service_2ptkq4x',
                'template_yk6ftoh',
                {
                    to_name: 'Dr. Kalicharan P',
                    from_name: formData.name,
                    message: `New appointment request\n\nLocation: ${locationName}\nDate: ${date}\nTime: ${selectedSlot}\nPhone: ${formData.phone}\nReason: ${formData.reason}`,
                    reply_to: 'sat998@gmail.com'
                },
                '4MX1QNdStuiJl3xZ7'
            );

            console.log('Appointment booked:', { date, slot: selectedSlot, ...formData });
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
                    We will contact you shortly to confirm your visit at<br /><strong>{CLINIC_LOCATIONS[location]?.name} clinic</strong><br />on <strong>{date} at {selectedSlot}</strong>.
                </p>
                <button className="btn btn-primary" onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', reason: '' });
                    setLocation('');
                    setDate('');
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
                    <input
                        id="appointment-date"
                        type="date"
                        value={date}
                        onChange={handleDateChange}
                        min={new Date().toISOString().split('T')[0]}
                        disabled={!location}
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
