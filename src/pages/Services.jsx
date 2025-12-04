import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className="container section-padding">
            <h1 className="heading-lg text-center">Our Services</h1>
            <p className="text-center" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '60px', maxWidth: '600px', margin: '0 auto 60px' }}>
                We offer a wide range of medical services specialized in respiratory health and child care.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
                {/* Pulmonology Section */}
                <div className="glass-panel" style={{ overflow: 'hidden', transition: 'transform 0.3s ease' }}>
                    <div style={{ background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.1), rgba(13, 148, 136, 0.05))', padding: '30px', textAlign: 'center' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🫁</div>
                        <h2 style={{ color: 'var(--primary-color)' }}>Pulmonology</h2>
                    </div>
                    <div style={{ padding: '30px' }}>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ padding: '10px 0', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }}>
                                <span style={{ color: 'var(--success-color)', marginRight: '10px' }}>✓</span> Asthma Management
                            </li>
                            <li style={{ padding: '10px 0', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }}>
                                <span style={{ color: 'var(--success-color)', marginRight: '10px' }}>✓</span> COPD Treatment
                            </li>
                            <li style={{ padding: '10px 0', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }}>
                                <span style={{ color: 'var(--success-color)', marginRight: '10px' }}>✓</span> Respiratory Infections
                            </li>
                            <li style={{ padding: '10px 0', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }}>
                                <span style={{ color: 'var(--success-color)', marginRight: '10px' }}>✓</span> Allergy Testing
                            </li>
                            <li style={{ padding: '10px 0', display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }}>
                                <span style={{ color: 'var(--success-color)', marginRight: '10px' }}>✓</span> Lung Function Tests
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Pediatrics Section */}
                <div className="glass-panel" style={{ overflow: 'hidden', transition: 'transform 0.3s ease' }}>
                    <div style={{ background: 'linear-gradient(135deg, rgba(245, 124, 0, 0.1), rgba(245, 124, 0, 0.05))', padding: '30px', textAlign: 'center' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '10px' }}>👶</div>
                        <h2 style={{ color: 'var(--secondary-color)' }}>Pediatrics</h2>
                    </div>
                    <div style={{ padding: '30px' }}>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ padding: '10px 0', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }}>
                                <span style={{ color: 'var(--success-color)', marginRight: '10px' }}>✓</span> Newborn Care
                            </li>
                            <li style={{ padding: '10px 0', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }}>
                                <span style={{ color: 'var(--success-color)', marginRight: '10px' }}>✓</span> Vaccinations & Immunizations
                            </li>
                            <li style={{ padding: '10px 0', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }}>
                                <span style={{ color: 'var(--success-color)', marginRight: '10px' }}>✓</span> Growth & Development Monitoring
                            </li>
                            <li style={{ padding: '10px 0', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }}>
                                <span style={{ color: 'var(--success-color)', marginRight: '10px' }}>✓</span> Common Childhood Illnesses
                            </li>
                            <li style={{ padding: '10px 0', display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }}>
                                <span style={{ color: 'var(--success-color)', marginRight: '10px' }}>✓</span> Nutritional Guidance
                            </li>
                        </ul>
                    </div>
                </div>

                {/* General Medicine Section */}
                <div className="glass-panel" style={{ overflow: 'hidden', transition: 'transform 0.3s ease' }}>
                    <div style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05))', padding: '30px', textAlign: 'center' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🩺</div>
                        <h2 style={{ color: '#3b82f6' }}>General Medicine</h2>
                    </div>
                    <div style={{ padding: '30px' }}>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ padding: '10px 0', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }}>
                                <span style={{ color: 'var(--success-color)', marginRight: '10px' }}>✓</span> Fever & Flu Treatment
                            </li>
                            <li style={{ padding: '10px 0', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }}>
                                <span style={{ color: 'var(--success-color)', marginRight: '10px' }}>✓</span> Diabetes Management
                            </li>
                            <li style={{ padding: '10px 0', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }}>
                                <span style={{ color: 'var(--success-color)', marginRight: '10px' }}>✓</span> Hypertension Control
                            </li>
                            <li style={{ padding: '10px 0', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }}>
                                <span style={{ color: 'var(--success-color)', marginRight: '10px' }}>✓</span> Preventive Health Checkups
                            </li>
                            <li style={{ padding: '10px 0', display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }}>
                                <span style={{ color: 'var(--success-color)', marginRight: '10px' }}>✓</span> Lifestyle Counseling
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Orthopedics Section */}
                <div className="glass-panel" style={{ overflow: 'hidden', transition: 'transform 0.3s ease' }}>
                    <div style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05))', padding: '30px', textAlign: 'center' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🦴</div>
                        <h2 style={{ color: '#8b5cf6' }}>Orthopedics</h2>
                    </div>
                    <div style={{ padding: '30px' }}>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ padding: '10px 0', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }}>
                                <span style={{ color: 'var(--success-color)', marginRight: '10px' }}>✓</span> Joint Pain Management
                            </li>
                            <li style={{ padding: '10px 0', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }}>
                                <span style={{ color: 'var(--success-color)', marginRight: '10px' }}>✓</span> Fracture Care
                            </li>
                            <li style={{ padding: '10px 0', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }}>
                                <span style={{ color: 'var(--success-color)', marginRight: '10px' }}>✓</span> Arthritis Treatment
                            </li>
                            <li style={{ padding: '10px 0', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }}>
                                <span style={{ color: 'var(--success-color)', marginRight: '10px' }}>✓</span> Sports Injuries
                            </li>
                            <li style={{ padding: '10px 0', display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }}>
                                <span style={{ color: 'var(--success-color)', marginRight: '10px' }}>✓</span> Physiotherapy Support
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '60px' }}>
                <Link to="/contact" className="btn btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>
                    Book a Consultation
                </Link>
            </div>
        </div>
    );
};

export default Services;
