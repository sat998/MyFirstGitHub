import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();

    return (
        <div className="layout">
            <header style={{
                position: 'sticky',
                top: '20px',
                zIndex: 100,
                padding: '0 24px'
            }}>
                <div className="glass-panel container" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '80px',
                    padding: '0 40px',
                    marginTop: '20px',
                    borderRadius: 'var(--radius-full)'
                }}>
                    <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '2rem' }}>🩺</span>
                        <div>
                            Dr. Kalicharan P
                            <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '500', letterSpacing: '0.05em' }}>
                                PULMONOLOGIST & PEDIATRICIAN
                            </span>
                        </div>
                    </div>
                    <nav className="nav">
                        <ul style={{ display: 'flex', gap: '40px', listStyle: 'none', alignItems: 'center' }}>
                            {['Home', 'About', 'Services', 'Contact'].map((item) => {
                                const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                                const isActive = location.pathname === path;
                                return (
                                    <li key={item}>
                                        <Link
                                            to={path}
                                            style={{
                                                fontWeight: '600',
                                                color: isActive ? 'var(--primary-color)' : 'var(--text-secondary)',
                                                position: 'relative'
                                            }}
                                        >
                                            {item}
                                            {isActive && (
                                                <span style={{
                                                    position: 'absolute',
                                                    bottom: '-5px',
                                                    left: '0',
                                                    width: '100%',
                                                    height: '2px',
                                                    backgroundColor: 'var(--primary-color)',
                                                    borderRadius: '2px'
                                                }} />
                                            )}
                                        </Link>
                                    </li>
                                );
                            })}
                            <li>
                                <Link to="/contact" className="btn btn-primary" style={{ padding: '10px 24px' }}>
                                    Book Now
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main style={{ minHeight: '80vh' }}>
                <Outlet />
            </main>

            <footer style={{
                backgroundColor: '#111827',
                color: 'white',
                padding: '80px 0 40px',
                marginTop: '120px',
                borderTopLeftRadius: '60px',
                borderTopRightRadius: '60px'
            }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '60px', marginBottom: '60px' }}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--primary-light)' }}>Dr. Kalicharan P</h3>
                            <p style={{ color: '#9ca3af', lineHeight: '1.8' }}>
                                Providing world-class respiratory and pediatric care with a compassionate touch. Your health is our priority.
                            </p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '20px', fontWeight: '600' }}>Quick Links</h4>
                            <ul style={{ listStyle: 'none', color: '#d1d5db', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/contact">Book Appointment</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '20px', fontWeight: '600' }}>Contact Info</h4>
                            <p style={{ color: '#d1d5db', marginBottom: '10px' }}>123 Health Avenue, Salem, Tamil Nadu</p>
                            <p style={{ color: '#d1d5db', marginBottom: '10px' }}>+91 98765 43210</p>
                            <p style={{ color: '#d1d5db' }}>contact@drkalicharanpclinic.com</p>
                        </div>
                    </div>
                    <div style={{ borderTop: '1px solid #374151', paddingTop: '40px', textAlign: 'center', color: '#6b7280' }}>
                        <p>&copy; {new Date().getFullYear()} Dr. Kalicharan P Clinic. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
