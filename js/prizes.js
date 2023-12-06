document.addEventListener("DOMContentLoaded", function() {
    // Fetch external data
    fetch("data/prizes.json")
        .then(response => response.json())
        .then(data => {
            // Access the list of items
            const items = data.items;

            // Get the ordered list element
            const orderedList = document.getElementById("prizes");

            // Populate the ordered list with items
            items.forEach(item => {
                const listItem = document.createElement("li");
                listItem.textContent = item;
                orderedList.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});
