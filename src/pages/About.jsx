import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div style={{
            minHeight: 'calc(100vh - 140px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '20px 0'
        }}>
            <div className="container">
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h1 style={{
                        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                        fontWeight: '800',
                        marginBottom: '12px',
                        color: 'var(--text-primary)'
                    }}>About Happy Clinic</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
                        Dedicated to providing exceptional healthcare with compassion and expertise since 2010.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
                    gap: '30px',
                    alignItems: 'center',
                    marginBottom: '40px'
                }}>
                    {/* Left: Mission & Vision */}
                    <div className="glass-panel" style={{ padding: '30px' }}>
                        <div style={{ marginBottom: '24px' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px', fontSize: '1.2rem' }}>🎯 Our Mission</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                To deliver accessible, high-quality medical care to our community. We believe in treating patients like family, ensuring comfort, trust, and the best possible health outcomes.
                            </p>
                        </div>
                        <div>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px', fontSize: '1.2rem' }}>👁️ Our Vision</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                To be the most trusted healthcare provider in Salem and Attur, known for our expertise in Pulmonology, Pediatrics, and Orthopedics.
                            </p>
                        </div>
                    </div>

                    {/* Right: Why Choose Us */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div className="glass-panel" style={{ padding: '20px', textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>👨‍⚕️</div>
                            <h4 style={{ color: 'var(--text-primary)', marginBottom: '5px' }}>Expert Doctors</h4>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Highly qualified specialists</p>
                        </div>
                        <div className="glass-panel" style={{ padding: '20px', textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🏥</div>
                            <h4 style={{ color: 'var(--text-primary)', marginBottom: '5px' }}>Modern Facilities</h4>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Advanced medical equipment</p>
                        </div>
                        <div className="glass-panel" style={{ padding: '20px', textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>💖</div>
                            <h4 style={{ color: 'var(--text-primary)', marginBottom: '5px' }}>Patient First</h4>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Compassionate care always</p>
                        </div>
                        <div className="glass-panel" style={{ padding: '20px', textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📍</div>
                            <h4 style={{ color: 'var(--text-primary)', marginBottom: '5px' }}>2 Locations</h4>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Convenient access</p>
                        </div>
                    </div>
                </div>

                {/* Bottom: Stats & CTA */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '20px',
                    padding: '20px',
                    backgroundColor: 'var(--primary-light)',
                    borderRadius: '16px'
                }}>
                    <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary-dark)' }}>15+</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--primary-dark)', opacity: 0.8 }}>Years Experience</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary-dark)' }}>10k+</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--primary-dark)', opacity: 0.8 }}>Happy Patients</div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '12px' }}>
                        <Link to="/specialists" className="btn" style={{
                            backgroundColor: 'white',
                            color: 'var(--primary-color)',
                            fontWeight: '600',
                            padding: '10px 20px',
                            borderRadius: 'var(--radius-full)'
                        }}>
                            Meet Our Team
                        </Link>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '10px 20px' }}>
                            Book Visit
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
