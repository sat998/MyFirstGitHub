import React from 'react';
import AppointmentScheduler from '../components/AppointmentScheduler';

const Contact = () => {
    return (
        <div className="container section-padding">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
                <div>
                    <h1 className="heading-lg">Get in Touch</h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '40px' }}>
                        We are here to help you. Visit our clinic or book an appointment online.
                    </p>

                    <div className="contact-info" style={{ marginBottom: '40px' }}>
                        <h3 style={{ marginBottom: '15px', color: 'var(--primary-color)' }}>Clinic Address</h3>
                        <p style={{ marginBottom: '5px' }}><strong>Dr. Kalicharan P's Clinic</strong></p>
                        <p style={{ color: 'var(--text-secondary)' }}>123 Health Avenue, Medical District</p>
                        <p style={{ color: 'var(--text-secondary)' }}>Salem, Tamil Nadu</p>
                    </div>

                    <div className="contact-info" style={{ marginBottom: '40px' }}>
                        <h3 style={{ marginBottom: '15px', color: 'var(--primary-color)' }}>Contact Details</h3>
                        <p style={{ marginBottom: '10px' }}>📞 +91 98765 43210</p>
                        <p>✉️ contact@drkalicharanpclinic.com</p>
                    </div>

                    <div className="contact-info">
                        <h3 style={{ marginBottom: '15px', color: 'var(--primary-color)' }}>Clinic Hours</h3>
                        <p style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '300px', marginBottom: '5px' }}>
                            <span>Mon - Sat:</span> <span>10:00 AM - 08:00 PM</span>
                        </p>
                        <p style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '300px', color: 'var(--error-color)' }}>
                            <span>Sunday:</span> <span>Closed</span>
                        </p>
                    </div>
                </div>

                <div>
                    <AppointmentScheduler />
                </div>
            </div>
        </div>
    );
};

export default Contact;
