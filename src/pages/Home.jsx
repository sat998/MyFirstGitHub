import React from 'react';
import { Link } from 'react-router-dom';
import { DOCTORS } from '../utils/doctors';

const Home = () => {
    return (
        <div className="home-page" style={{
            minHeight: 'calc(100vh - 140px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '20px 0'
        }}>
            {/* Compact Hero Section */}
            <section style={{ position: 'relative' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
                        gap: '40px',
                        alignItems: 'center'
                    }}>
                        {/* Left: Hero Content */}
                        <div style={{ textAlign: 'left' }}>
                            <span className="animate-fade-in" style={{
                                display: 'inline-block',
                                padding: '6px 16px',
                                backgroundColor: 'var(--primary-light)',
                                color: 'var(--primary-dark)',
                                borderRadius: 'var(--radius-full)',
                                fontWeight: '600',
                                fontSize: '0.8rem',
                                marginBottom: '16px',
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase'
                            }}>
                                Welcome to Happy Clinic
                            </span>

                            <h1 className="animate-slide-up delay-100" style={{
                                fontSize: 'clamp(2rem, 5vw, 3rem)',
                                fontWeight: '800',
                                lineHeight: '1.2',
                                marginBottom: '16px',
                                background: 'linear-gradient(135deg, var(--text-primary), var(--primary-color))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>
                                Expert Care from <br />Our Specialists
                            </h1>

                            <p className="animate-slide-up delay-200" style={{
                                fontSize: '1rem',
                                color: 'var(--text-secondary)',
                                marginBottom: '24px',
                                lineHeight: '1.7',
                                maxWidth: '500px'
                            }}>
                                Specializing in Pulmonology, Pediatrics, General Medicine, and Orthopedics.
                                Dedicated to your health and well-being.
                            </p>

                            <div className="animate-slide-up delay-300" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                <Link to="/contact" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '0.95rem' }}>
                                    Book Appointment
                                </Link>
                                <Link to="/services" className="btn btn-secondary" style={{ padding: '12px 28px', fontSize: '0.95rem' }}>
                                    Our Services
                                </Link>
                            </div>
                        </div>

                        {/* Right: Quick Stats & Doctors Preview */}
                        <div className="animate-slide-up delay-200">
                            {/* Stats Row */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, 1fr)',
                                gap: '16px',
                                marginBottom: '24px'
                            }}>
                                <div className="glass-panel" style={{ padding: '16px', textAlign: 'center' }}>
                                    <div style={{ fontSize: '1.8rem', fontWeight: '700', color: 'var(--primary-color)' }}>15+</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Years Exp</div>
                                </div>
                                <div className="glass-panel" style={{ padding: '16px', textAlign: 'center' }}>
                                    <div style={{ fontSize: '1.8rem', fontWeight: '700', color: 'var(--primary-color)' }}>2</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Locations</div>
                                </div>
                                <div className="glass-panel" style={{ padding: '16px', textAlign: 'center' }}>
                                    <div style={{ fontSize: '1.8rem', fontWeight: '700', color: 'var(--primary-color)' }}>4+</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Specialties</div>
                                </div>
                            </div>

                            {/* Compact Doctor Cards */}
                            <div id="doctors" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {DOCTORS.map(doctor => (
                                    <div key={doctor.id} className="glass-panel" style={{
                                        padding: '16px 20px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '16px',
                                        transition: 'transform 0.2s ease'
                                    }}>
                                        <div style={{
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '50%',
                                            overflow: 'hidden',
                                            backgroundColor: 'var(--primary-light)',
                                            flexShrink: 0
                                        }}>
                                            <img src={doctor.image} alt={doctor.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '2px' }}>{doctor.name}</h3>
                                            <p style={{ color: 'var(--primary-color)', fontWeight: '500', fontSize: '0.85rem' }}>{doctor.specialization}</p>
                                        </div>
                                        <Link to="/about" style={{
                                            padding: '6px 12px',
                                            fontSize: '0.75rem',
                                            fontWeight: '600',
                                            color: 'var(--primary-color)',
                                            border: '1px solid var(--primary-color)',
                                            borderRadius: 'var(--radius-full)',
                                            textDecoration: 'none',
                                            whiteSpace: 'nowrap'
                                        }}>
                                            View
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom: Compact Feature Pills */}
                    <div className="animate-slide-up delay-400" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '12px',
                        flexWrap: 'wrap',
                        marginTop: '40px'
                    }}>
                        {[
                            { icon: '🫁', label: 'Pulmonology' },
                            { icon: '👶', label: 'Pediatrics' },
                            { icon: '🦴', label: 'Orthopedics' },
                            { icon: '📅', label: 'Easy Booking' },
                            { icon: '🏥', label: '2 Locations' }
                        ].map((item, i) => (
                            <div key={i} className="glass-panel" style={{
                                padding: '8px 16px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                borderRadius: 'var(--radius-full)',
                                fontSize: '0.85rem',
                                fontWeight: '500',
                                color: 'var(--text-secondary)'
                            }}>
                                <span>{item.icon}</span>
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
