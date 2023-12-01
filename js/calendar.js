document.addEventListener('DOMContentLoaded', function () {
    const calendar = document.getElementById('calendar');
    const startDate = new Date('2023-11-27');
    const endDate = new Date('2024-01-02');
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();

    // Display days of the week
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    daysOfWeek.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        dayElement.textContent = day;
        calendar.appendChild(dayElement);
    });

    //December array
    const dec = []

    console.log(today)


    // Display dates in the calendar
    for (let currentDate = startDate; currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        dayElement.textContent = currentDate.getDate();
        dayElement.addEventListener('click', () => toggleExpander(dayElement));
        
        // Check if the day is in the future
        if (currentDate > today) {
            console.log(currentDate + "Future Date")
        }
        
        // Create expander content
        const expander = document.createElement('div');
        expander.className = 'expander';
        const expanderContent = document.createElement('div');
        expanderContent.className = 'expander-content';

        // Customize the content for each date
        if (currentDate > today) {
            expanderContent.textContent = `No Peeking!`;
        } else {
            expanderContent.textContent = `Content for ${currentDate.toDateString()}`;
        }
        
        expander.appendChild(expanderContent);
        dayElement.appendChild(expander);
        
        calendar.appendChild(dayElement);
    }

    function toggleExpander(dayElement) {
        // Toggle the active class to show/hide the expander content
        dayElement.classList.toggle('active');
        
        // Close other expanders
        const allDays = document.querySelectorAll('.day');
        allDays.forEach(day => {
            if (day !== dayElement) {
                day.classList.remove('active');
            }
        });
    }
});
