import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    const doctors = [
        {
            id: 'dr_kalicharan',
            name: 'Dr. Kalicharan P',
            qualifications: ['MBBS', 'MD Pulmonologist', 'Dip. in Pediatrics'],
            specializations: ['Pulmonology', 'Pediatrics'],
            experience: '15+ Years',
            emoji: '👨‍⚕️',
            color: 'var(--primary-color)',
            gradient: 'linear-gradient(135deg, rgba(13, 148, 136, 0.1), rgba(13, 148, 136, 0.05))',
            bio: `Dr. Kalicharan P is a distinguished medical professional with over 15 years of experience 
                in treating respiratory disorders and pediatric conditions. His dual specialization allows 
                him to provide comprehensive care for patients of all ages.`,
            achievements: [
                'Successfully treated over 10,000+ patients',
                'Former Senior Consultant at Government Hospital, Salem',
                'Published research on Pediatric Respiratory Disorders',
                'Member of Indian Medical Association (IMA)',
                'Recognized for excellence in patient care by Tamil Nadu Medical Council'
            ],
            expertise: [
                'Chronic Asthma & COPD Management',
                'Pediatric Pulmonology',
                'Allergy & Immunology',
                'Newborn & Child Healthcare',
                'Vaccination Programs'
            ]
        },
        {
            id: 'dr_karthik',
            name: 'Dr. Karthik',
            qualifications: ['MBBS', 'MS Orthopedics', 'Fellowship in Sports Medicine'],
            specializations: ['General Medicine', 'Orthopedics'],
            experience: '12+ Years',
            emoji: '🦴',
            color: '#8b5cf6',
            gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05))',
            bio: `Dr. Karthik is an expert orthopedic surgeon and general physician with 12+ years of 
                experience. He specializes in treating musculoskeletal conditions, sports injuries, 
                and provides comprehensive primary healthcare services.`,
            achievements: [
                'Over 5,000+ successful orthopedic treatments',
                'Fellowship trained in Sports Medicine',
                'Former Orthopedic Consultant at Apollo Hospitals',
                'Member of Indian Orthopedic Association',
                'Expert in minimally invasive joint procedures'
            ],
            expertise: [
                'Joint Replacement Consultation',
                'Fracture & Trauma Care',
                'Sports Injury Management',
                'Arthritis Treatment',
                'General Health Checkups'
            ]
        }
    ];

    return (
        <div className="container section-padding">
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h1 className="heading-lg">Meet Our Specialists</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                    Happy Clinic is home to highly qualified medical professionals dedicated to providing
                    exceptional healthcare in Pulmonology, Pediatrics, General Medicine, and Orthopedics.
                </p>
            </div>

            {/* Doctors Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
                {doctors.map((doctor) => (
                    <div
                        key={doctor.id}
                        className="glass-panel"
                        style={{
                            overflow: 'hidden',
                            padding: 0
                        }}
                    >
                        {/* Doctor Header */}
                        <div style={{
                            background: doctor.gradient,
                            padding: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '30px',
                            flexWrap: 'wrap',
                            justifyContent: 'center'
                        }}>
                            <div style={{
                                width: '120px',
                                height: '120px',
                                backgroundColor: 'white',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '3.5rem',
                                boxShadow: 'var(--shadow-md)'
                            }}>
                                {doctor.emoji}
                            </div>
                            <div style={{ textAlign: 'center', flex: 1, minWidth: '250px' }}>
                                <h2 style={{ color: doctor.color, marginBottom: '10px', fontSize: '1.8rem' }}>
                                    {doctor.name}
                                </h2>
                                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '10px' }}>
                                    {doctor.qualifications.map((qual, idx) => (
                                        <span
                                            key={idx}
                                            style={{
                                                padding: '5px 12px',
                                                backgroundColor: 'white',
                                                color: doctor.color,
                                                borderRadius: '20px',
                                                fontWeight: '600',
                                                fontSize: '0.8rem',
                                                boxShadow: 'var(--shadow-sm)'
                                            }}
                                        >
                                            {qual}
                                        </span>
                                    ))}
                                </div>
                                <p style={{
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    color: 'var(--text-primary)',
                                    marginTop: '10px'
                                }}>
                                    🏅 {doctor.experience} of Excellence
                                </p>
                            </div>
                        </div>

                        {/* Doctor Details */}
                        <div style={{ padding: '40px' }}>
                            {/* Bio */}
                            <p style={{
                                color: 'var(--text-secondary)',
                                lineHeight: '1.8',
                                fontSize: '1.05rem',
                                marginBottom: '30px',
                                textAlign: 'center',
                                maxWidth: '800px',
                                margin: '0 auto 30px'
                            }}>
                                {doctor.bio}
                            </p>

                            {/* Achievements & Expertise */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                gap: '30px'
                            }}>
                                {/* Achievements */}
                                <div>
                                    <h3 style={{
                                        color: doctor.color,
                                        marginBottom: '15px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px'
                                    }}>
                                        🏆 Achievements & Recognition
                                    </h3>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {doctor.achievements.map((achievement, idx) => (
                                            <li
                                                key={idx}
                                                style={{
                                                    padding: '10px 0',
                                                    borderBottom: idx < doctor.achievements.length - 1 ? '1px solid var(--glass-border)' : 'none',
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '10px',
                                                    color: 'var(--text-primary)'
                                                }}
                                            >
                                                <span style={{ color: 'var(--success-color)' }}>✓</span>
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Areas of Expertise */}
                                <div>
                                    <h3 style={{
                                        color: doctor.color,
                                        marginBottom: '15px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px'
                                    }}>
                                        💊 Areas of Expertise
                                    </h3>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {doctor.expertise.map((exp, idx) => (
                                            <li
                                                key={idx}
                                                style={{
                                                    padding: '10px 0',
                                                    borderBottom: idx < doctor.expertise.length - 1 ? '1px solid var(--glass-border)' : 'none',
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '10px',
                                                    color: 'var(--text-primary)'
                                                }}
                                            >
                                                <span style={{ color: doctor.color }}>•</span>
                                                {exp}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Section */}
            <div style={{
                textAlign: 'center',
                marginTop: '60px',
                padding: '40px',
                background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.1), rgba(139, 92, 246, 0.1))',
                borderRadius: '16px'
            }}>
                <h3 style={{ marginBottom: '15px', color: 'var(--text-primary)' }}>
                    Ready to Experience Quality Healthcare?
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                    Book an appointment with our specialists today.
                </p>
                <Link to="/contact" className="btn btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>
                    Book a Consultation
                </Link>
            </div>
        </div>
    );
};

export default About;
