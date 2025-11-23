import React from 'react';

const About = () => {
    return (
        <div className="container section-padding">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 className="heading-lg text-center">Meet Dr. Kalicharan P</h1>
                <p className="text-center" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '60px' }}>
                    Dedicated to providing the highest standard of medical care.
                </p>

                <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: 'var(--shadow-md)', display: 'flex', gap: '40px', alignItems: 'center', flexDirection: 'column' }}>
                    {/* Placeholder for Doctor Image */}
                    <div style={{ width: '150px', height: '150px', backgroundColor: '#e9ecef', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
                        👨‍⚕️
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <h2 style={{ marginBottom: '10px', color: 'var(--primary-color)' }}>Dr. Kalicharan P</h2>
                        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
                            <span style={{ padding: '5px 15px', backgroundColor: '#e3f2fd', color: '#0d47a1', borderRadius: '20px', fontWeight: '600', fontSize: '0.9rem' }}>MBBS</span>
                            <span style={{ padding: '5px 15px', backgroundColor: '#e3f2fd', color: '#0d47a1', borderRadius: '20px', fontWeight: '600', fontSize: '0.9rem' }}>MD Pulmonologist</span>
                            <span style={{ padding: '5px 15px', backgroundColor: '#e3f2fd', color: '#0d47a1', borderRadius: '20px', fontWeight: '600', fontSize: '0.9rem' }}>Dip. in Pediatrics</span>
                        </div>

                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '20px' }}>
                            Dr. Kalicharan P is a highly qualified medical professional with dual specialization in Pulmonology and Pediatrics.
                            With extensive training and years of experience, he offers a unique blend of expertise for treating respiratory issues in both adults and children,
                            along with comprehensive pediatric care.
                        </p>

                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            His approach combines evidence-based medicine with a compassionate, patient-centered focus.
                            Whether it's managing chronic asthma or routine child vaccinations, Dr. Kalicharan P ensures every patient receives personalized attention.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
