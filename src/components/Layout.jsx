import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Layout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { currentUser, logout } = useAuth();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        // Check if it's nighttime (6 PM to 6 AM)
        const hour = new Date().getHours();
        const isNightTime = hour >= 18 || hour < 6;

        // Check localStorage for manual override
        const saved = localStorage.getItem('darkMode');
        if (saved !== null) return saved === 'true';

        // Default to time-based
        return isNightTime;
    });

    useEffect(() => {
        // Apply theme to document
        if (darkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
        // Save preference
        localStorage.setItem('darkMode', darkMode);

        // Set up interval to check time every minute
        const interval = setInterval(() => {
            const hour = new Date().getHours();
            const isNightTime = hour >= 18 || hour < 6;

            // Only auto-switch if user hasn't manually toggled recently
            const lastManualToggle = localStorage.getItem('lastManualToggle');
            const now = Date.now();

            // If no manual toggle in last 2 hours, auto-switch based on time
            if (!lastManualToggle || (now - parseInt(lastManualToggle)) > 2 * 60 * 60 * 1000) {
                if (isNightTime !== darkMode) {
                    setDarkMode(isNightTime);
                }
            }
        }, 60000); // Check every minute

        return () => clearInterval(interval);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        // Mark that user manually toggled (prevents auto-switch for 2 hours)
        localStorage.setItem('lastManualToggle', Date.now().toString());
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
            closeMobileMenu();
        } catch (error) {
            console.error("Failed to log out", error);
        }
    };

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

                    {/* Desktop Navigation */}
                    <nav className="nav desktop-nav">
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

                            {/* Auth Buttons */}
                            {currentUser ? (
                                <>
                                    <li>
                                        <Link to="/dashboard" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
                                            Dashboard
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <li>
                                    <Link to="/login" className="btn" style={{ padding: '8px 20px', fontSize: '0.9rem', border: '1px solid var(--primary-color)', color: 'var(--primary-color)', background: 'transparent' }}>
                                        Login
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </nav>

                    {/* Mobile Hamburger Button */}
                    <button
                        className="mobile-menu-btn"
                        onClick={toggleMobileMenu}
                        style={{
                            display: 'none',
                            background: 'none',
                            border: 'none',
                            fontSize: '1.8rem',
                            cursor: 'pointer',
                            color: 'var(--primary-color)',
                            padding: '8px'
                        }}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </header>

            {/* Mobile Sidebar Menu */}
            <div
                className="mobile-sidebar"
                style={{
                    position: 'fixed',
                    top: 0,
                    right: mobileMenuOpen ? 0 : '-100%',
                    width: '280px',
                    height: '100vh',
                    background: 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))',
                    zIndex: 1000,
                    transition: 'right 0.3s ease-in-out',
                    padding: '80px 30px 30px',
                    boxShadow: mobileMenuOpen ? '-4px 0 20px rgba(0,0,0,0.2)' : 'none'
                }}
            >
                <button
                    onClick={closeMobileMenu}
                    style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        background: 'rgba(255,255,255,0.2)',
                        border: 'none',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        color: 'white',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    ✕
                </button>
                <nav>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {['Home', 'About', 'Services', 'Contact'].map((item) => {
                            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                            const isActive = location.pathname === path;
                            return (
                                <li key={item} style={{ marginBottom: '20px' }}>
                                    <Link
                                        to={path}
                                        onClick={closeMobileMenu}
                                        style={{
                                            display: 'block',
                                            padding: '15px 20px',
                                            color: 'white',
                                            fontWeight: '600',
                                            fontSize: '1.1rem',
                                            backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : 'transparent',
                                            borderRadius: '12px',
                                            transition: 'all 0.2s ease'
                                        }}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            );
                        })}

                        {/* Mobile Auth Links */}
                        {currentUser ? (
                            <>
                                <li style={{ marginBottom: '20px' }}>
                                    <Link
                                        to="/dashboard"
                                        onClick={closeMobileMenu}
                                        style={{
                                            display: 'block',
                                            padding: '15px 20px',
                                            color: 'var(--primary-color)',
                                            fontWeight: '600',
                                            fontSize: '1.1rem',
                                            backgroundColor: 'white',
                                            borderRadius: '12px',
                                            textAlign: 'center'
                                        }}
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                                <li style={{ marginBottom: '20px' }}>
                                    <button
                                        onClick={handleLogout}
                                        style={{
                                            display: 'block',
                                            width: '100%',
                                            padding: '15px 20px',
                                            color: 'white',
                                            fontWeight: '600',
                                            fontSize: '1.1rem',
                                            backgroundColor: 'rgba(255,0,0,0.2)',
                                            border: '1px solid rgba(255,255,255,0.3)',
                                            borderRadius: '12px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Log Out
                                    </button>
                                </li>
                            </>
                        ) : (
                            <li style={{ marginBottom: '20px' }}>
                                <Link
                                    to="/login"
                                    onClick={closeMobileMenu}
                                    style={{
                                        display: 'block',
                                        padding: '15px 20px',
                                        color: 'var(--primary-color)',
                                        fontWeight: '600',
                                        fontSize: '1.1rem',
                                        backgroundColor: 'white',
                                        borderRadius: '12px',
                                        textAlign: 'center'
                                    }}
                                >
                                    Login
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>

            {/* Overlay */}
            {mobileMenuOpen && (
                <div
                    onClick={closeMobileMenu}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        zIndex: 999,
                        transition: 'opacity 0.3s ease'
                    }}
                />
            )}

            {/* Floating Dark Mode Toggle */}
            <button
                onClick={toggleDarkMode}
                className="dark-mode-toggle-floating"
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    background: 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '50%',
                    width: '56px',
                    height: '56px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                    zIndex: 1000
                }}
                onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                    e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                }}
                aria-label="Toggle dark mode"
                title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
                {darkMode ? '☀️' : '🌙'}
            </button>

            <main>
                <Outlet />
            </main>

            <footer style={{
                backgroundColor: '#1f2937',
                color: 'white',
                padding: '60px 0 30px',
                marginTop: '100px'
            }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--primary-light)' }}>Dr. Kalicharan P</h3>
                            <p style={{ color: '#9ca3af', lineHeight: '1.8' }}>
                                Providing expert Pulmonology and Pediatric care in Salem, Tamil Nadu.
                            </p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '20px', color: 'white' }}>Quick Links</h4>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {['Home', 'About', 'Services', 'Contact'].map(item => (
                                    <li key={item} style={{ marginBottom: '10px' }}>
                                        <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} style={{ color: '#9ca3af' }}>
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '20px', color: 'white' }}>Contact</h4>
                            <p style={{ color: '#9ca3af', lineHeight: '1.8' }}>
                                📍 Salem, Tamil Nadu<br />
                                📧 drkalicharan@clinic.com<br />
                                📞 +91 98765 43210
                            </p>
                        </div>
                    </div>
                    <div style={{ borderTop: '1px solid #374151', paddingTop: '30px', textAlign: 'center', color: '#9ca3af' }}>
                        <p>© 2025 Dr. Kalicharan P. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
