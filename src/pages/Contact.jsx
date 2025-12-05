import React, { useState } from 'react';
import AppointmentScheduler from '../components/AppointmentScheduler';

const Contact = () => {
    const socialLinks = [
        { name: 'WhatsApp', icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z', color: '#25D366', href: 'https://wa.me/919876543210' },
        { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', color: '#E1306C', href: 'https://instagram.com/drkalicharanp' },
        { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', color: '#1877F2', href: 'https://facebook.com/drkalicharanp' },
        { name: 'X', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z', color: '#14171A', href: 'https://x.com/drkalicharanp' }
    ];

    const [isBookingOpen, setIsBookingOpen] = useState(false);

    const handleModalClick = (e) => {
        if (e.target.id === 'booking-modal-overlay') {
            setIsBookingOpen(false);
        }
    };

    return (
        <>
            <div style={{
                height: 'calc(100vh - 80px)',
                padding: '40px 60px',
                display: 'flex',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #fef7ed 0%, #fef3e2 30%, #e0f2fe 70%, #dbeafe 100%)',
                overflow: 'hidden',
                position: 'relative'
            }}>
                {/* Left Content */}
                <div style={{ flex: 1, zIndex: 2, maxWidth: '500px' }}>
                    {/* Rating Badge */}
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '10px 18px',
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        borderRadius: '50px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                        marginBottom: '24px'
                    }}>
                        <div style={{ display: 'flex', gap: '2px' }}>
                            {[1, 2, 3, 4, 5].map(i => (
                                <span key={i} style={{ color: '#f59e0b', fontSize: '1rem' }}>★</span>
                            ))}
                        </div>
                        <span style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: '500' }}>Trusted by 500+ patients</span>
                    </div>

                    {/* Main Headline */}
                    <h1 style={{
                        fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
                        fontWeight: '800',
                        lineHeight: '1.15',
                        color: '#1e293b',
                        marginBottom: '28px'
                    }}>
                        The New<br />
                        Level of <span style={{ color: '#0d9488' }}>Care</span><br />
                        for Your <span style={{ color: '#0891b2' }}>Health</span>
                    </h1>

                    {/* Stylish Contact Cards */}
                    <div style={{
                        display: 'flex',
                        gap: '12px',
                        marginBottom: '28px',
                        flexWrap: 'wrap'
                    }}>
                        {/* Phone Card - Premium Style */}
                        <a href="tel:+919876543210" style={{
                            padding: '14px 20px',
                            background: 'linear-gradient(145deg, #ffffff, #f1f5f9)',
                            borderRadius: '60px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.06), 0 0 0 1px rgba(16, 185, 129, 0.1)',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            transition: 'all 0.3s ease'
                        }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                                e.currentTarget.style.boxShadow = '0 12px 35px rgba(16, 185, 129, 0.25), 0 0 0 2px rgba(16, 185, 129, 0.3)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06), 0 0 0 1px rgba(16, 185, 129, 0.1)';
                            }}
                        >
                            <div style={{
                                width: '44px',
                                height: '44px',
                                background: 'linear-gradient(135deg, #10b981, #059669)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 4px 15px rgba(16, 185, 129, 0.4)'
                            }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                                </svg>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: '700', letterSpacing: '1px', marginBottom: '2px' }}>CALL US</div>
                                <div style={{ fontWeight: '700', color: '#1e293b', fontSize: '0.95rem', whiteSpace: 'nowrap' }}>+91 98765 43210</div>
                            </div>
                        </a>

                        {/* Email Card - Premium Style */}
                        <a href="mailto:contact@happyclinic.com" style={{
                            padding: '14px 20px',
                            background: 'linear-gradient(145deg, #ffffff, #f1f5f9)',
                            borderRadius: '60px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.06), 0 0 0 1px rgba(59, 130, 246, 0.1)',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            transition: 'all 0.3s ease'
                        }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                                e.currentTarget.style.boxShadow = '0 12px 35px rgba(59, 130, 246, 0.25), 0 0 0 2px rgba(59, 130, 246, 0.3)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06), 0 0 0 1px rgba(59, 130, 246, 0.1)';
                            }}
                        >
                            <div style={{
                                width: '44px',
                                height: '44px',
                                background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)'
                            }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.7rem', color: '#3b82f6', fontWeight: '700', letterSpacing: '1px', marginBottom: '2px' }}>EMAIL US</div>
                                <div style={{ fontWeight: '700', color: '#1e293b', fontSize: '0.95rem', whiteSpace: 'nowrap' }}>contact@happyclinic.com</div>
                            </div>
                        </a>
                    </div>

                    {/* CTA Button & Social Row */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                        <button
                            onClick={() => setIsBookingOpen(true)}
                            style={{
                                padding: '18px 40px',
                                fontSize: '1.05rem',
                                fontWeight: '700',
                                borderRadius: '50px',
                                border: 'none',
                                background: 'linear-gradient(135deg, #0d9488, #0891b2)',
                                color: 'white',
                                cursor: 'pointer',
                                boxShadow: '0 10px 35px rgba(13, 148, 136, 0.35)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-3px)';
                                e.currentTarget.style.boxShadow = '0 15px 45px rgba(13, 148, 136, 0.45)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 35px rgba(13, 148, 136, 0.35)';
                            }}
                        >
                            Book Appointment →
                        </button>

                        {/* Social Links */}
                        <div style={{ display: 'flex', gap: '10px' }}>
                            {socialLinks.map((social, idx) => (
                                <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer"
                                    style={{
                                        width: '46px',
                                        height: '46px',
                                        borderRadius: '14px',
                                        backgroundColor: 'rgba(255,255,255,0.95)',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: social.color,
                                        transition: 'all 0.2s ease',
                                        border: '1px solid rgba(0,0,0,0.05)'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d={social.icon} /></svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Center - Hero Image */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-30%, -50%)',
                    width: '420px',
                    height: '420px',
                    zIndex: 1
                }}>
                    <img
                        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80"
                        alt="Wellness"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '30px',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.15)'
                        }}
                    />
                </div>

                {/* Right Side Cards */}
                <div style={{
                    position: 'absolute',
                    right: '60px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    zIndex: 2
                }}>
                    {/* Stats Card */}
                    <div style={{
                        padding: '28px',
                        background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
                        borderRadius: '24px',
                        boxShadow: '0 15px 50px rgba(0,0,0,0.1)',
                        textAlign: 'center',
                        width: '200px',
                        border: '1px solid rgba(255,255,255,0.8)'
                    }}>
                        <div style={{
                            fontSize: '0.8rem',
                            color: '#94a3b8',
                            marginBottom: '8px',
                            fontWeight: '600',
                            letterSpacing: '0.5px'
                        }}>HAPPY PATIENTS</div>
                        <div style={{
                            fontSize: '3rem',
                            fontWeight: '800',
                            background: 'linear-gradient(135deg, #0d9488, #0891b2)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>500+</div>
                        <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '4px' }}>
                            Just Trust Us —<br />We'll Take Care of You
                        </div>
                    </div>

                    {/* Clinic Hours Card */}
                    <div style={{
                        padding: '22px',
                        background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
                        borderRadius: '20px',
                        boxShadow: '0 15px 50px rgba(0,0,0,0.1)',
                        width: '200px',
                        border: '1px solid rgba(255,255,255,0.8)'
                    }}>
                        <div style={{
                            fontSize: '0.8rem',
                            fontWeight: '700',
                            color: '#1e293b',
                            marginBottom: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            <span style={{
                                width: '28px',
                                height: '28px',
                                background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '0.9rem'
                            }}>🏥</span>
                            Clinic Hours
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <div style={{
                                padding: '10px 12px',
                                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                                borderRadius: '10px'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: '#10b981', fontWeight: '700', fontSize: '0.85rem' }}>Salem</span>
                                    <span style={{ color: '#64748b', fontSize: '0.75rem' }}>Mon-Wed</span>
                                </div>
                                <div style={{ color: '#1e293b', fontSize: '0.8rem', fontWeight: '600', marginTop: '4px' }}>10:00 AM - 8:00 PM</div>
                            </div>
                            <div style={{
                                padding: '10px 12px',
                                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                                borderRadius: '10px'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '0.85rem' }}>Attur</span>
                                    <span style={{ color: '#64748b', fontSize: '0.75rem' }}>Thu-Sat</span>
                                </div>
                                <div style={{ color: '#1e293b', fontSize: '0.8rem', fontWeight: '600', marginTop: '4px' }}>10:00 AM - 8:00 PM</div>
                            </div>
                        </div>
                        <div style={{
                            marginTop: '10px',
                            padding: '6px 10px',
                            backgroundColor: 'rgba(239, 68, 68, 0.08)',
                            borderRadius: '20px',
                            textAlign: 'center',
                            fontSize: '0.75rem',
                            color: '#ef4444',
                            fontWeight: '600'
                        }}>
                            ⛔ Closed Sundays
                        </div>
                    </div>

                    {/* Feature Badges - Moved here */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div style={{
                            padding: '12px 18px',
                            backgroundColor: 'rgba(255,255,255,0.95)',
                            borderRadius: '50px',
                            boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '0.85rem',
                            color: '#1e293b',
                            fontWeight: '500'
                        }}>
                            <span>🩺</span>
                            <span>Expert Care Always</span>
                        </div>
                        <div style={{
                            padding: '12px 18px',
                            backgroundColor: 'rgba(255,255,255,0.95)',
                            borderRadius: '50px',
                            boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '0.85rem',
                            color: '#1e293b',
                            fontWeight: '500'
                        }}>
                            <span>💊</span>
                            <span>Personalized Treatment</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Booking Modal */}
            {isBookingOpen && (
                <div
                    id="booking-modal-overlay"
                    onClick={handleModalClick}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 9999,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '20px',
                        backdropFilter: 'blur(8px)'
                    }}
                >
                    <div
                        className="animate-slide-up"
                        style={{
                            width: '100%',
                            maxWidth: '600px',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                            position: 'relative',
                            borderRadius: '24px',
                            background: 'linear-gradient(145deg, #fefefe, #f8fafc)',
                            boxShadow: '0 25px 80px rgba(0,0,0,0.2)'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setIsBookingOpen(false)}
                            style={{
                                position: 'absolute',
                                top: '16px',
                                right: '16px',
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                border: 'none',
                                backgroundColor: 'rgba(0,0,0,0.08)',
                                color: '#1e293b',
                                fontSize: '1.3rem',
                                cursor: 'pointer',
                                zIndex: 10,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >✕</button>
                        <AppointmentScheduler />
                    </div>
                </div>
            )}
        </>
    );
};

export default Contact;
