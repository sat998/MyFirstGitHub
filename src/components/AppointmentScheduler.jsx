import React, { useState } from 'react';
import { isClinicOpen } from '../utils/holidays';

const AppointmentScheduler = () => {
    const [date, setDate] = useState('');
    const [status, setStatus] = useState(null); // { isOpen: boolean, reason: string }
    const [formData, setFormData] = useState({ name: '', phone: '', reason: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);

        if (selectedDate) {
            // Append time to ensure it's treated as local date, avoiding timezone shifts
            const dateObj = new Date(selectedDate + 'T00:00:00');
            const clinicStatus = isClinicOpen(dateObj);
            setStatus(clinicStatus);
        } else {
            setStatus(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock submission
        console.log('Appointment booked:', { date, ...formData });
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div id="success-message" className="glass-panel animate-fade-in" style={{ textAlign: 'center', padding: '60px 40px', color: 'var(--success-color)' }}>
                <div style={{ fontSize: '4rem', marginBottom: '20px' }}>✅</div>
                <h3 className="heading-md" style={{ color: 'var(--success-color)' }}>Request Sent!</h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '30px' }}>
                    We will contact you shortly to confirm your visit on <br /><strong>{date}</strong>.
                </p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Book Another</button>
            </div>
        );
    }

    return (
        <div className="glass-panel animate-slide-up" style={{ padding: '40px' }}>
            <h2 className="heading-md" style={{ color: 'var(--primary-color)', fontSize: '2rem' }}>Book Appointment</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>Select a date and fill in your details.</p>

            <form onSubmit={handleSubmit}>
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
                    {status && status.isOpen && (
                        <div id="clinic-status-open" className="animate-fade-in" style={{
                            color: 'var(--success-color)',
                            marginTop: '12px',
                            fontSize: '0.9rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            backgroundColor: '#f0fdf4',
                            padding: '10px',
                            borderRadius: '8px'
                        }}>
                            <span>✅</span> Available
                        </div>
                    )}
                </div>

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
                    disabled={!date || (status && !status.isOpen)}
                >
                    Confirm Appointment
                </button>
            </form>
        </div>
    );
};

export default AppointmentScheduler;
