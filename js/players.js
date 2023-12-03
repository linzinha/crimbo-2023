fetch('https://kol.linzinha.is/players')
  .then(response => response.json())
  .then(data => {
    const keys = Object.keys(data);

    // Access the DOM element where you want to display the keys
    const keysListContainer = document.getElementById('keysList');

    // Create a list element and append each key as a list item
    const keysListElement = document.createElement('ol');
    keys.forEach(key => {
      const listItem = document.createElement('li');
      listItem.textContent = key;
      keysListElement.appendChild(listItem);
    });

    // Append the list to the container in the HTML
    keysListContainer.appendChild(keysListElement);
  })
  .catch(error => console.error('Error fetching JSON:', error));
