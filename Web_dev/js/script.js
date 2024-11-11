let petList = []; // Array to hold pet objects
let editIndex = -1; // To track the index of the pet being edited

// Function to create a new pet entry
function createPet() {
    const name = document.getElementById('petName').value.trim();
    const type = document.getElementById('petType').value.trim();
    const age = document.getElementById('petAge').value.trim();

    if (name && type && age) {
        const pet = { name, type, age };
        petList.push(pet);
        renderPets();
        document.getElementById('pet-form').reset();
    } else {
        alert("Please fill out all fields.");
    }
}

// Function to render pet entries in the list
function renderPets() {
    const petListElement = document.getElementById('petList');
    petListElement.innerHTML = ''; // Clear the existing list

    petList.forEach((pet, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${pet.name} - ${pet.type} - ${pet.age} years`;

        // Edit button for each pet
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.onclick = () => editPet(index);

        // Delete button for each pet
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deletePet(index);

        // Append buttons to list item and list item to list
        listItem.appendChild(editBtn);
        listItem.appendChild(deleteBtn);
        petListElement.appendChild(listItem);
    });
}

// Function to delete a pet entry
function deletePet(index) {
    petList.splice(index, 1); // Remove pet from array
    renderPets(); // Refresh the list display
}

// Function to edit a pet entry
function editPet(index) {
    const pet = petList[index];
    document.getElementById('petName').value = pet.name;
    document.getElementById('petType').value = pet.type;
    document.getElementById('petAge').value = pet.age;

    // Set the global edit index to current pet index
    editIndex = index;
    document.getElementById('updateBtn').style.display = 'inline'; // Show update button
    document.querySelector('#pet-form button[type="button"]').style.display = 'none'; // Hide add button
}

// Function to update the edited pet entry
function updatePet() {
    const name = document.getElementById('petName').value.trim();
    const type = document.getElementById('petType').value.trim();
    const age = document.getElementById('petAge').value.trim();

    if (name && type && age && editIndex > -1) {
        petList[editIndex] = { name, type, age }; // Update pet details
        renderPets();
        document.getElementById('pet-form').reset();

        // Reset form state
        editIndex = -1;
        document.getElementById('updateBtn').style.display = 'none';
        document.querySelector('#pet-form button[type="button"]').style.display = 'inline';
    } else {
        alert("Please fill out all fields.");
    }
}
