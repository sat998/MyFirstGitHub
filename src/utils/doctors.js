export const DOCTORS = [
    {
        id: 'dr_kalicharan',
        name: 'Dr. Kalicharan P',
        specialization: 'Pulmonology & Pediatrics',
        email: 'sat998@gmail.com',
        image: 'https://cdn-icons-png.flaticon.com/512/3774/3774299.png', // Placeholder
        description: 'Specialized Pulmonology and Pediatric care delivered with compassion.'
    },
    {
        id: 'dr_karthik',
        name: 'Dr. Karthik',
        specialization: 'General & Orthopedics',
        email: 'karthik@clinic.com',
        image: 'https://cdn-icons-png.flaticon.com/512/3774/3774299.png', // Placeholder
        description: 'Expert care in General Medicine and Orthopedics for all ages.'
    }
];

export const getDoctorById = (id) => DOCTORS.find(doc => doc.id === id);
export const getDoctorByEmail = (email) => DOCTORS.find(doc => doc.email === email);
