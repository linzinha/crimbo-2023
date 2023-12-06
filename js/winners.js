// use the endpoint https://kol.linzinha.is/players to fetch the latest data from the API and update the JSON file
fetch('https://kol.linzinha.is/data/players.json')
.then(response => response.json())
.then(data => {
  // Extracting keys and values from each object in the array
  const keyValuePairs = data.map(item => {
    const key = Object.keys(item)[0];
    const value = item[key];
    return `${key} (#${value})`;
  });

  // Access the DOM element where you want to display the keys
  const keysListContainer = document.getElementById('winners');

  // Create an ordered list and append each key-value pair as a list item
  const keysListElement = document.createElement('ol');
  keyValuePairs.forEach(pair => {
    const listItem = document.createElement('li');
    listItem.textContent = pair;
    keysListElement.appendChild(listItem);
  });

  // Append the ordered list to the container in the HTML
  keysListContainer.appendChild(keysListElement);
})
.catch(error => console.error('Error fetching JSON:', error));