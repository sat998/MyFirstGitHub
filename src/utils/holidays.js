
export const indianHolidays = [
    { date: '01-01', name: 'New Year\'s Day' },
    { date: '01-26', name: 'Republic Day' },
    { date: '08-15', name: 'Independence Day' },
    { date: '10-02', name: 'Gandhi Jayanti' },
    { date: '12-25', name: 'Christmas' },
    // Add variable holidays manually for now or use a library if needed. 
    // For 2025 (Example dates)
    { date: '03-14', name: 'Holi' },
    { date: '10-20', name: 'Diwali' },
];

// Clinic locations and their schedules
export const CLINIC_LOCATIONS = {
    SALEM: {
        name: 'Salem',
        address: '123 Health Avenue, Medical District, Salem, Tamil Nadu',
        days: [1, 2, 3], // Monday, Tuesday, Wednesday
        displayDays: 'Monday - Wednesday'
    },
    ATTUR: {
        name: 'Attur',
        address: '456 Care Street, Attur, Tamil Nadu',
        days: [4, 5, 6], // Thursday, Friday, Saturday
        displayDays: 'Thursday - Saturday'
    }
};

export const isClinicOpen = (date, location = null) => {
    const day = date.getDay();

    // Sunday is always closed
    if (day === 0) return { isOpen: false, reason: 'Sunday - Clinic Closed' };

    // Check if it's a holiday
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${month}-${d}`;

    const holiday = indianHolidays.find(h => h.date === formattedDate);
    if (holiday) {
        return { isOpen: false, reason: holiday.name };
    }

    // If location is specified, check if clinic operates on this day
    if (location) {
        const clinicInfo = CLINIC_LOCATIONS[location];
        if (clinicInfo && !clinicInfo.days.includes(day)) {
            return {
                isOpen: false,
                reason: `${clinicInfo.name} clinic operates only on ${clinicInfo.displayDays}`
            };
        }
    }

    return { isOpen: true };
};
