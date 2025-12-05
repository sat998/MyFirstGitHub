import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        { icon: '🫁', name: 'Pulmonology', color: 'var(--primary-color)', items: ['Asthma', 'COPD', 'Allergies', 'Lung Tests'] },
        { icon: '👶', name: 'Pediatrics', color: 'var(--secondary-color)', items: ['Vaccinations', 'Growth Check', 'Child Care', 'Nutrition'] },
        { icon: '🩺', name: 'General Medicine', color: '#3b82f6', items: ['Fever/Flu', 'Diabetes', 'BP Control', 'Checkups'] },
        { icon: '🦴', name: 'Orthopedics', color: '#8b5cf6', items: ['Joint Pain', 'Fractures', 'Arthritis', 'Sports Injury'] }
    ];

    return (
        <div style={{
            minHeight: 'calc(100vh - 140px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '10px 0' // Reduced padding
        }}>
            <div className="container">
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <h1 style={{
                        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                        fontWeight: '800',
                        marginBottom: '4px',
                        background: 'linear-gradient(135deg, var(--text-primary), var(--primary-color))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>Our Services</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '500px', margin: '0 auto' }}>
                        Comprehensive healthcare specializing in respiratory health, pediatrics, and orthopedics
                    </p>
                </div>

                {/* Services Horizontal List */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'row', // Force horizontal
                    justifyContent: 'center',
                    gap: '16px',
                    marginBottom: '24px',
                    flexWrap: 'nowrap', // Prevent wrapping on desktop
                    overflowX: 'auto', // Allow scroll on mobile if needed
                    paddingBottom: '10px' // Space for scrollbar if it appears
                }}>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="glass-panel"
                            style={{
                                padding: '20px',
                                transition: 'transform 0.3s ease',
                                cursor: 'default',
                                flex: '1', // Equal width
                                minWidth: '220px', // Minimum width for readability
                                maxWidth: '280px'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            {/* Icon & Title */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                marginBottom: '12px'
                            }}>
                                <div style={{
                                    width: '44px',
                                    height: '44px',
                                    backgroundColor: `${service.color}15`,
                                    borderRadius: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.6rem'
                                }}>
                                    {service.icon}
                                </div>
                                <h3 style={{ color: service.color, fontSize: '1rem', fontWeight: '700' }}>
                                    {service.name}
                                </h3>
                            </div>

                            {/* Service Items */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                {service.items.map((item, idx) => (
                                    <span
                                        key={idx}
                                        style={{
                                            padding: '3px 8px',
                                            backgroundColor: `${service.color}10`,
                                            color: service.color,
                                            borderRadius: '6px',
                                            fontSize: '0.7rem',
                                            fontWeight: '500'
                                        }}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom: CTA and Info - Horizontal Row */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px',
                    alignItems: 'center',
                    flexWrap: 'wrap'
                }}>
                    {/* Clinic Info */}
                    <div className="glass-panel" style={{ padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ fontSize: '1.5rem' }}>🏥</div>
                        <div>
                            <h4 style={{ color: 'var(--text-primary)', marginBottom: '2px', fontSize: '0.9rem' }}>Two Locations</h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
                                Salem (Mon-Wed) • Attur (Thu-Sat)
                            </p>
                        </div>
                    </div>

                    {/* Timing Info */}
                    <div className="glass-panel" style={{ padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ fontSize: '1.5rem' }}>⏰</div>
                        <div>
                            <h4 style={{ color: 'var(--text-primary)', marginBottom: '2px', fontSize: '0.9rem' }}>Clinic Hours</h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
                                10:00 AM - 8:00 PM (Closed Sundays)
                            </p>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                        to="/contact"
                        className="btn btn-primary"
                        style={{
                            padding: '12px 24px',
                            textAlign: 'center',
                            fontSize: '0.95rem'
                        }}
                    >
                        Book Consultation →
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Services;
