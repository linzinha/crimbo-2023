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
    const winnerBox = [
        "Alium",
        "Sheber",
        "chocofungi",
        "Avandor",
        "Norimvo",
        "Vulcan9009",
        "Jimmyking",
        "The Patron Saint of Depravity",
        "StuBorn",
        "Kemistry",
        "KoL Miners Daughter",
        "lala_lola",
        "Chenny",
        "CZARWHUZHERE666",
        "DarkDeath",
        "Jimmy Neutral",17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,1,2]
    const prizeBox = [
        "Polka Pop",
        "resolution: be more adventurous",
        "resolution: be sexier",
        "druidic s'more",
        "cold hi mein",
        "Snow Machine",
        "piece of after eight",
        "The Fun-Guy Cold Weather Bartender's Guide",
        "Recipe of Before Yore: Boris's bread",
        "elven medi-pack",
        "waffle",
        "length of shadow sinew",
        "time arrow",
        "Cloning Kit",
        "Jarlsberg's key lime",
        "mojo filter",17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,1,2]
    count = -4

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
        var winner = ""
        if (typeof winnerBox[count] === "number") {
            winner = "TBA"
            console.log("NUMBER")
        } else {
            winner = `${winnerBox[count]}`
            console.log("STRING")
        }

        var prize = ""
        if (typeof prizeBox[count] === "number") {
            prize = "TBA"
            console.log("NUMBER")
        } else {
            prize = `${prizeBox[count]}`
            console.log("STRING")
        }
        
        if (count < 0) {
            expanderContent.textContent = ``;
        } else {
            if (currentDate > today) {
                expanderContent.textContent = `No Peeking!`;
            } else {
                expanderContent.textContent = `Drawn: "${prize}"\n Winner: ${winner}`;
                expanderContent.style.whiteSpace = 'pre-line';
            }
        }

        count += 1
        
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
