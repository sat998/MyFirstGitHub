import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Specialists = () => {
    const [selectedDoctor, setSelectedDoctor] = useState(0);

    const doctors = [
        {
            id: 'dr_kalicharan',
            name: 'Dr. Kalicharan P',
            qualifications: ['MBBS', 'MD Pulmonologist', 'Dip. in Pediatrics'],
            specializations: ['Pulmonology', 'Pediatrics'],
            experience: '15+ Years',
            emoji: '👨‍⚕️',
            consultationFee: '₹500',
            languages: ['English', 'Tamil', 'Hindi'],
            availability: {
                location: 'Salem Clinic',
                days: 'Mon - Wed',
                time: '10:00 AM - 8:00 PM'
            },
            bio: `Dr. Kalicharan P is a distinguished medical professional with over 15 years of experience 
                in treating respiratory disorders and pediatric conditions. His dual specialization allows 
                him to provide comprehensive care for patients of all ages.`,
            achievements: [
                'Successfully treated over 10,000+ patients',
                'Former Senior Consultant at Government Hospital, Salem',
                'Published research on Pediatric Respiratory Disorders',
                'Member of Indian Medical Association (IMA)',
                'Recognized for excellence in patient care'
            ],
            expertise: [
                { name: 'Asthma & COPD', level: 98 },
                { name: 'Pediatric Care', level: 96 },
                { name: 'Allergy Treatment', level: 97 },
                { name: 'Respiratory Infections', level: 98 },
                { name: 'Vaccinations', level: 96 }
            ]
        },
        {
            id: 'dr_karthik',
            name: 'Dr. Karthik',
            qualifications: ['MBBS', 'MS Orthopedics', 'Fellowship in Sports Medicine'],
            specializations: ['General Medicine', 'Orthopedics'],
            experience: '12+ Years',
            emoji: '🦴',
            consultationFee: '₹400',
            languages: ['English', 'Tamil'],
            availability: {
                location: 'Attur Clinic',
                days: 'Thu - Sat',
                time: '10:00 AM - 8:00 PM'
            },
            bio: `Dr. Karthik is an expert orthopedic surgeon and general physician with 12+ years of 
                experience. He specializes in treating musculoskeletal conditions, sports injuries, 
                and provides comprehensive primary healthcare services.`,
            achievements: [
                'Over 5,000+ successful orthopedic treatments',
                'Fellowship trained in Sports Medicine',
                'Former Orthopedic Consultant at Apollo Hospitals',
                'Member of Indian Orthopedic Association',
                'Expert in minimally invasive procedures'
            ],
            expertise: [
                { name: 'Joint Care', level: 98 },
                { name: 'Fracture Treatment', level: 97 },
                { name: 'Sports Medicine', level: 96 },
                { name: 'Arthritis', level: 97 },
                { name: 'General Medicine', level: 96 }
            ]
        }
    ];

    const doctor = doctors[selectedDoctor];
    // Use consistent primary color for both doctors
    const accentColor = 'var(--primary-color)';

    return (
        <div style={{
            minHeight: 'calc(100vh - 140px)',
            display: 'flex',
            flexDirection: 'column',
            padding: '20px 0'
        }}>
            <div className="container">
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <h1 style={{
                        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                        fontWeight: '800',
                        marginBottom: '8px',
                        color: 'var(--text-primary)'
                    }}>Our Specialists</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                        Expert medical professionals dedicated to your health
                    </p>
                </div>

                {/* Doctor Selector Tabs */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '12px',
                    marginBottom: '30px',
                    flexWrap: 'wrap'
                }}>
                    {doctors.map((doc, index) => (
                        <button
                            key={doc.id}
                            onClick={() => setSelectedDoctor(index)}
                            style={{
                                padding: '12px 24px',
                                borderRadius: 'var(--radius-full)',
                                border: selectedDoctor === index ? 'none' : '2px solid var(--glass-border)',
                                background: selectedDoctor === index
                                    ? 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))'
                                    : 'var(--glass-bg)',
                                color: selectedDoctor === index ? 'white' : 'var(--text-primary)',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}
                        >
                            <span style={{ fontSize: '1.2rem' }}>{doc.emoji}</span>
                            {doc.name}
                        </button>
                    ))}
                </div>

                {/* Doctor Profile Card */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
                    gap: '24px',
                    alignItems: 'start'
                }}>
                    {/* Left: Profile Info */}
                    <div className="glass-panel" style={{ padding: '24px' }}>
                        {/* Profile Header */}
                        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                margin: '0 auto 12px',
                                backgroundColor: 'var(--primary-light)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2.5rem'
                            }}>
                                {doctor.emoji}
                            </div>
                            <h2 style={{ color: accentColor, fontSize: '1.4rem', marginBottom: '8px' }}>{doctor.name}</h2>
                            <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '12px' }}>
                                {doctor.qualifications.map((qual, idx) => (
                                    <span key={idx} style={{
                                        padding: '3px 10px',
                                        backgroundColor: 'var(--primary-light)',
                                        color: 'var(--primary-dark)',
                                        borderRadius: '12px',
                                        fontSize: '0.7rem',
                                        fontWeight: '600'
                                    }}>{qual}</span>
                                ))}
                            </div>
                        </div>

                        {/* Quick Info */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '12px',
                            marginBottom: '20px'
                        }}>
                            <div style={{ textAlign: 'center', padding: '12px', backgroundColor: 'var(--primary-light)', borderRadius: '12px' }}>
                                <div style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--primary-dark)' }}>{doctor.experience}</div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--primary-dark)', textTransform: 'uppercase', opacity: 0.8 }}>Experience</div>
                            </div>
                            <div style={{ textAlign: 'center', padding: '12px', backgroundColor: 'var(--primary-light)', borderRadius: '12px' }}>
                                <div style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--primary-dark)' }}>{doctor.consultationFee}</div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--primary-dark)', textTransform: 'uppercase', opacity: 0.8 }}>Consultation</div>
                            </div>
                        </div>

                        {/* Availability */}
                        <div style={{
                            padding: '16px',
                            backgroundColor: 'var(--primary-light)',
                            borderRadius: '12px',
                            marginBottom: '16px'
                        }}>
                            <h4 style={{ color: 'var(--primary-dark)', marginBottom: '10px', fontSize: '0.9rem' }}>📍 Availability</h4>
                            <p style={{ fontSize: '0.85rem', color: 'var(--primary-dark)', marginBottom: '4px', fontWeight: '600' }}>
                                {doctor.availability.location}
                            </p>
                            <p style={{ fontSize: '0.85rem', color: 'var(--primary-dark)', opacity: 0.8 }}>
                                {doctor.availability.days} • {doctor.availability.time}
                            </p>
                        </div>

                        {/* Languages */}
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>🗣️ Languages:</span>
                            {doctor.languages.map((lang, idx) => (
                                <span key={idx} style={{
                                    fontSize: '0.8rem',
                                    padding: '4px 10px',
                                    backgroundColor: 'var(--glass-bg)',
                                    borderRadius: '8px',
                                    color: 'var(--text-primary)',
                                    border: '1px solid var(--glass-border)'
                                }}>{lang}</span>
                            ))}
                        </div>

                        {/* Book Button */}
                        <Link to="/contact" className="btn btn-primary" style={{
                            width: '100%',
                            padding: '12px',
                            textAlign: 'center',
                            display: 'block'
                        }}>
                            Book Appointment
                        </Link>
                    </div>

                    {/* Right: Details */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {/* Bio */}
                        <div className="glass-panel" style={{ padding: '20px' }}>
                            <h3 style={{ color: accentColor, marginBottom: '10px', fontSize: '1rem' }}>About</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                                {doctor.bio}
                            </p>
                        </div>

                        {/* Expertise Bars */}
                        <div className="glass-panel" style={{ padding: '20px' }}>
                            <h3 style={{ color: accentColor, marginBottom: '12px', fontSize: '1rem' }}>Expertise</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {doctor.expertise.map((skill, idx) => (
                                    <div key={idx}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                            <span style={{ fontSize: '0.8rem', color: 'var(--text-primary)' }}>{skill.name}</span>
                                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{skill.level}%</span>
                                        </div>
                                        <div style={{
                                            height: '6px',
                                            backgroundColor: 'var(--primary-light)',
                                            borderRadius: '3px',
                                            overflow: 'hidden'
                                        }}>
                                            <div style={{
                                                width: `${skill.level}%`,
                                                height: '100%',
                                                background: 'linear-gradient(90deg, var(--primary-color), var(--primary-dark))',
                                                borderRadius: '3px',
                                                transition: 'width 0.5s ease'
                                            }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Achievements */}
                        <div className="glass-panel" style={{ padding: '20px' }}>
                            <h3 style={{ color: accentColor, marginBottom: '10px', fontSize: '1rem' }}>🏆 Achievements</h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {doctor.achievements.slice(0, 4).map((achievement, idx) => (
                                    <li key={idx} style={{
                                        padding: '6px 0',
                                        fontSize: '0.85rem',
                                        color: 'var(--text-primary)',
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '8px'
                                    }}>
                                        <span style={{ color: 'var(--success-color)' }}>✓</span>
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Specialists;
