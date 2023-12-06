fetch('https://kol.linzinha.is/data/prizes.json')
    .then(response => response.json())
    .then(data => {
        // Check if the 'prizes' array exists in the data
        const prizes = data.prizes;

        if (prizes && Array.isArray(prizes)) {
            // Extracting keys and values from each object in the array
            const keyValuePairs = prizes.map(prize => {
                return `${prize}`;
            });

            // Access the DOM element where you want to display the prizes
            const prizesListContainer = document.getElementById('prizes');

            // Create an ordered list and append each prize as a list item
            const prizesListElement = document.createElement('ol');
            keyValuePairs.forEach(prize => {
                const listItem = document.createElement('li');
                listItem.textContent = prize;
                prizesListElement.appendChild(listItem);
            });

            // Append the ordered list to the container in the HTML
            prizesListContainer.appendChild(prizesListElement);
        } else {
            console.error("Data format error: 'prizes' array not found or not an array.");
        }
    })
    .catch(error => console.error('Error fetching JSON:', error));
