// Fetch the external JSON file
fetch('https://kol.linzinha.is/data/players.json')
  .then(response => response.json())
  .then(data => {
    // Create an array to store list items for each player
    var playerListItemArray = [];
    data.sort((a, b) => {
      var nameA = Object.keys(a)[0].toLowerCase();
      var nameB = Object.keys(b)[0].toLowerCase();
      return nameA.localeCompare(nameB);
    });

    // Loop through each item in the array
    data.forEach(item => {
      // Extract the required information for each player
      var playerName = Object.keys(item)[0];
      var playerScore = item[playerName];

      // Create list item for the current player
      var playerListItem = document.createElement('li');
      playerListItem.textContent = playerName + ' (#' + playerScore + ')';
      
      // Add the list item to the array
      playerListItemArray.push(playerListItem);
    });

    // Create an ordered list element
    var orderedList = document.createElement('ol');
    
    // Append each list item to the ordered list
    playerListItemArray.forEach(item => {
      orderedList.appendChild(item);
    });

    // Display the ordered list
    // Assuming you have an element with the id 'output' where you want to display the result
    document.getElementById('players').appendChild(orderedList);
  })
  .catch(error => console.error('Error fetching JSON:', error));
