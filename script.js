//your code here!

//your code here!

// Get a reference to the <ul> element
const myList = document.getElementById('infi-list');

// Function to add 10 list items by default
function addDefaultItems() {
    for (let i = 1; i <= 10; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `Item ${i}`;
        myList.appendChild(listItem);
    }
}

// Function to add 2 more list items when the user reaches the end
function addMoreItems() {
    for (let i = 1; i <= 2; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `Item ${myList.childElementCount + 1}`;
        myList.appendChild(listItem);
    }
}

// Event listener to detect when the user scrolls to the end of the list
myList.addEventListener('scroll', function() {
    const scrollTop = myList.scrollTop;
    const scrollHeight = myList.scrollHeight;
    const clientHeight = myList.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
        // User has reached the end of the list, so add more items
        addMoreItems();
    }
});

// Add the initial 10 list items
addDefaultItems();

