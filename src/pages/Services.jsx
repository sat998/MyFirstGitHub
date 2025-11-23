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
                <div style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                    <div style={{ backgroundColor: '#e0f7fa', padding: '30px', textAlign: 'center' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🫁</div>
                        <h2 style={{ color: 'var(--primary-color)' }}>Pulmonology</h2>
                    </div>
                    <div style={{ padding: '30px' }}>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ padding: '10px 0', borderBottom: '1px solid #f1f3f5', display: 'flex', alignItems: 'center' }}>
                                <span style={{ color: 'var(--success-color)', marginRight: '10px' }}>✓</span> Asthma Management
                            </li>
                            <li style={{ padding: '10px 0', borderBottom: '1px solid #f1f3f5', display: 'flex', alignItems: 'center' }}>
                                <span style={{ color: 'var(--success-color)', marginRight: '10px' }}>✓</span> COPD Treatment
                            </li>
                            <li style={{ padding: '10px 0', borderBottom: '1px solid #f1f3f5', display: 'flex', alignItems: 'center' }}>
                                <span style={{ color: 'var(--success-color)', marginRight: '10px' }}>✓</span> Respiratory Infections
                            </li>
                            <li style={{ padding: '10px 0', borderBottom: '1px solid #f1f3f5', display: 'flex', alignItems: 'center' }}>
                                <span style={{ color: 'var(--success-color)', marginRight: '10px' }}>✓</span> Allergy Testing
                            </li>
                            <li style={{ padding: '10px 0', display: 'flex', alignItems: 'center' }}>
                                <span style={{ color: 'var(--success-color)', marginRight: '10px' }}>✓</span> Lung Function Tests
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Pediatrics Section */}
                <div style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                    <div style={{ backgroundColor: '#fff3e0', padding: '30px', textAlign: 'center' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '10px' }}>👶</div>
                        <h2 style={{ color: '#f57c00' }}>Pediatrics</h2>
                    </div>
                    <div style={{ padding: '30px' }}>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ padding: '10px 0', borderBottom: '1px solid #f1f3f5', display: 'flex', alignItems: 'center' }}>
                                <span style={{ color: 'var(--success-color)', marginRight: '10px' }}>✓</span> Newborn Care
                            </li>
                            <li style={{ padding: '10px 0', borderBottom: '1px solid #f1f3f5', display: 'flex', alignItems: 'center' }}>
                                <span style={{ color: 'var(--success-color)', marginRight: '10px' }}>✓</span> Vaccinations & Immunizations
                            </li>
                            <li style={{ padding: '10px 0', borderBottom: '1px solid #f1f3f5', display: 'flex', alignItems: 'center' }}>
                                <span style={{ color: 'var(--success-color)', marginRight: '10px' }}>✓</span> Growth & Development Monitoring
                            </li>
                            <li style={{ padding: '10px 0', borderBottom: '1px solid #f1f3f5', display: 'flex', alignItems: 'center' }}>
                                <span style={{ color: 'var(--success-color)', marginRight: '10px' }}>✓</span> Common Childhood Illnesses
                            </li>
                            <li style={{ padding: '10px 0', display: 'flex', alignItems: 'center' }}>
                                <span style={{ color: 'var(--success-color)', marginRight: '10px' }}>✓</span> Nutritional Guidance
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
