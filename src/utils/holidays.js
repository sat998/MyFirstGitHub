
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

export const isClinicOpen = (date) => {
    const day = date.getDay();
    // 0 is Sunday
    if (day === 0) return { isOpen: false, reason: 'Sunday' };

    const month = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${month}-${d}`;

    const holiday = indianHolidays.find(h => h.date === formattedDate);
    if (holiday) {
        return { isOpen: false, reason: holiday.name };
    }

    return { isOpen: true };
};
