import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section style={{
                padding: 'clamp(80px, 15vw, 180px) 0 clamp(60px, 10vw, 120px)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Background Decorative Elements */}
                <div style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-5%',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(13, 148, 136, 0.1) 0%, rgba(255,255,255,0) 70%)',
                    borderRadius: '50%',
                    zIndex: -1
                }} className="animate-float" />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <span className="animate-fade-in" style={{
                            display: 'inline-block',
                            padding: '8px 20px',
                            backgroundColor: 'var(--primary-light)',
                            color: 'var(--primary-dark)',
                            borderRadius: 'var(--radius-full)',
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            marginBottom: '24px',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase'
                        }}>
                            Trusted Healthcare for Your Family
                        </span>

                        <h1 className="heading-lg animate-slide-up delay-100">
                            Expert Care for <br />
                            <span style={{ color: 'var(--primary-color)' }}>Lungs & Little Ones</span>
                        </h1>

                        <p className="animate-slide-up delay-200" style={{
                            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                            color: 'var(--text-secondary)',
                            marginBottom: '40px',
                            lineHeight: '1.8'
                        }}>
                            Specialized Pulmonology and Pediatric care delivered with compassion.
                            Dr. Kalicharan P brings years of experience to ensure the best health for you and your children.
                        </p>

                        <div className="animate-slide-up delay-300" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn btn-primary" style={{ padding: 'clamp(12px, 2vw, 16px) clamp(24px, 4vw, 40px)', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>
                                Book Appointment
                            </Link>
                            <Link to="/services" className="btn btn-secondary" style={{ padding: 'clamp(12px, 2vw, 16px) clamp(24px, 4vw, 40px)', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>
                                View Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(20px, 4vw, 40px)' }}>

                        <div className="glass-panel animate-slide-up delay-100" style={{ padding: '40px', transition: 'transform 0.3s ease' }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                backgroundColor: 'var(--primary-light)',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2rem',
                                marginBottom: '24px',
                                color: 'var(--primary-color)'
                            }}>
                                🫁
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--text-primary)', fontWeight: '700' }}>Pulmonology</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                                Comprehensive care for respiratory conditions including Asthma, COPD, and infections. Advanced diagnostics and treatment plans.
                            </p>
                        </div>

                        <div className="glass-panel animate-slide-up delay-200" style={{ padding: '40px', transition: 'transform 0.3s ease' }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                backgroundColor: 'var(--secondary-light)',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2rem',
                                marginBottom: '24px',
                                color: 'var(--secondary-color)'
                            }}>
                                👶
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--text-primary)', fontWeight: '700' }}>Pediatrics</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                                Dedicated care for infants, children, and adolescents. From vaccinations to growth monitoring, we ensure your child thrives.
                            </p>
                        </div>

                        <div className="glass-panel animate-slide-up delay-300" style={{ padding: '40px', transition: 'transform 0.3s ease' }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                backgroundColor: '#e0f2fe',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2rem',
                                marginBottom: '24px',
                                color: '#0284c7'
                            }}>
                                📅
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--text-primary)', fontWeight: '700' }}>Easy Scheduling</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                                Book appointments online instantly. Our smart system respects your time and ensures a smooth clinic experience.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
