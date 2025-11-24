import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { db } from '../utils/firebase';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import { CLINIC_LOCATIONS } from '../utils/holidays';

const Dashboard = () => {
    const { currentUser, logout } = useAuth();
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAppointments = async () => {
            if (!currentUser) return;

            try {
                const isDoctor = currentUser.email === 'sat998@gmail.com';
                let q;

                if (isDoctor) {
                    // Doctor sees ALL appointments
                    q = query(collection(db, "appointments"));
                } else {
                    // Patients see only their own appointments
                    q = query(
                        collection(db, "appointments"),
                        where("userId", "==", currentUser.uid)
                    );
                }

                const querySnapshot = await getDocs(q);
                const fetchedAppointments = [];
                querySnapshot.forEach((doc) => {
                    fetchedAppointments.push({ id: doc.id, ...doc.data() });
                });

                // Sort by date (descending)
                fetchedAppointments.sort((a, b) => new Date(b.date) - new Date(a.date));

                setAppointments(fetchedAppointments);
            } catch (error) {
                console.error("Error fetching appointments:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAppointments();
    }, [currentUser]);

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error("Failed to log out", error);
        }
    };

    const upcomingAppointments = appointments.filter(app => new Date(app.date) >= new Date().setHours(0, 0, 0, 0));
    const pastAppointments = appointments.filter(app => new Date(app.date) < new Date().setHours(0, 0, 0, 0));
    const isDoctor = currentUser?.email === 'sat998@gmail.com';

    return (
        <div className="container section-padding" style={{ minHeight: '80vh' }}>
            <div className="glass-panel animate-slide-up" style={{ padding: '40px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
                    <div>
                        <h2 className="heading-md" style={{ color: 'var(--primary-color)' }}>
                            {isDoctor ? 'Admin Dashboard' : 'My Dashboard'}
                        </h2>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            Welcome back, <strong>{currentUser?.displayName || currentUser?.email}</strong>
                        </p>
                    </div>
                    <button onClick={handleLogout} className="btn" style={{ border: '1px solid var(--error-color)', color: 'var(--error-color)', background: 'transparent' }}>
                        Log Out
                    </button>
                </div>

                {isDoctor ? (
                    // Doctor View - Table with all appointments
                    <div>
                        <h3 className="heading-sm" style={{ marginBottom: '20px', borderBottom: '2px solid var(--primary-light)', paddingBottom: '10px' }}>
                            All Appointments ({appointments.length})
                        </h3>
                        {loading ? (
                            <p>Loading appointments...</p>
                        ) : appointments.length > 0 ? (
                            <div style={{ overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                                    <thead>
                                        <tr style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary-dark)' }}>
                                            <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Date</th>
                                            <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Time</th>
                                            <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Location</th>
                                            <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Patient</th>
                                            <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Phone</th>
                                            <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Reason</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {appointments.map((app, index) => (
                                            <tr key={app.id} style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', backgroundColor: index % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.02)' }}>
                                                <td style={{ padding: '12px' }}>{app.date}</td>
                                                <td style={{ padding: '12px' }}>
                                                    <span style={{ background: 'var(--primary-light)', color: 'var(--primary-dark)', padding: '4px 8px', borderRadius: '12px', fontSize: '0.85rem' }}>
                                                        {app.slot}
                                                    </span>
                                                </td>
                                                <td style={{ padding: '12px' }}>{CLINIC_LOCATIONS[app.location]?.name || app.location}</td>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>{app.name}</td>
                                                <td style={{ padding: '12px' }}>{app.phone}</td>
                                                <td style={{ padding: '12px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{app.reason}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '40px', background: 'rgba(0,0,0,0.02)', borderRadius: '16px' }}>
                                <p style={{ color: 'var(--text-secondary)' }}>No appointments yet.</p>
                            </div>
                        )}
                    </div>
                ) : (
                    // Patient View - Card view with their own appointments
                    <>
                        <div style={{ marginBottom: '40px' }}>
                            <h3 className="heading-sm" style={{ marginBottom: '20px', borderBottom: '2px solid var(--primary-light)', paddingBottom: '10px' }}>Upcoming Appointments</h3>
                            {loading ? (
                                <p>Loading appointments...</p>
                            ) : upcomingAppointments.length > 0 ? (
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                                    {upcomingAppointments.map(app => (
                                        <div key={app.id} className="glass-panel" style={{ padding: '20px', borderLeft: '4px solid var(--primary-color)' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                                <span style={{ fontWeight: '700', color: 'var(--primary-color)' }}>{app.date}</span>
                                                <span style={{ background: 'var(--primary-light)', color: 'var(--primary-dark)', padding: '2px 8px', borderRadius: '12px', fontSize: '0.8rem' }}>{app.slot}</span>
                                            </div>
                                            <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>{CLINIC_LOCATIONS[app.location]?.name || app.location} Clinic</h4>
                                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Reason: {app.reason}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div style={{ textAlign: 'center', padding: '40px', background: 'rgba(0,0,0,0.02)', borderRadius: '16px' }}>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>No upcoming appointments.</p>
                                    <Link to="/contact" className="btn btn-primary">Book Now</Link>
                                </div>
                            )}
                        </div>

                        <div>
                            <h3 className="heading-sm" style={{ marginBottom: '20px', borderBottom: '2px solid #eee', paddingBottom: '10px', color: 'var(--text-secondary)' }}>Past History</h3>
                            {pastAppointments.length > 0 ? (
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                                    {pastAppointments.map(app => (
                                        <div key={app.id} style={{ padding: '20px', background: 'rgba(0,0,0,0.02)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                                <span style={{ fontWeight: '600', color: 'var(--text-secondary)' }}>{app.date}</span>
                                                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{app.slot}</span>
                                            </div>
                                            <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>{CLINIC_LOCATIONS[app.location]?.name || app.location} Clinic</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p style={{ color: 'var(--text-secondary)' }}>No past appointment history.</p>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
