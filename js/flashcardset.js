// index.js

// Selectors
const createSetButton = document.getElementById('create-set');
const setModal = document.getElementById('set-modal');
const closeSetModal = document.getElementById('close-set-modal');
const setForm = document.getElementById('set-form');
// index.js (continued)

const flashcardSetsContainer = document.querySelector('.sets-container');

// Data
const flashcardSets = JSON.parse(localStorage.getItem('flashcardSets')) || [];

// Functions
function openSetModal() {
  setModal.style.display = 'block';
}

function closeSetModalHandler() {
  setModal.style.display = 'none';
}

function saveSetHandler(e) {
  e.preventDefault();

  const setTitle = setForm['set-title'].value.trim();
  const setDescription = setForm['set-description'].value.trim();

  if (!setTitle || !setDescription) return;

  const newSet = {
    id: Date.now(),
    title: setTitle,
    description: setDescription,
    flashcards: [],
  };

  flashcardSets.push(newSet);
  localStorage.setItem('flashcardSets', JSON.stringify(flashcardSets));

  setForm.reset();
  setModal.style.display = 'none';
  displayFlashcardSets();
}

function deleteFlashcardSet(setId) {
  const index = flashcardSets.findIndex((set) => set.id === setId);
  if (index > -1) {
    flashcardSets.splice(index, 1);
    localStorage.setItem('flashcardSets', JSON.stringify(flashcardSets));
    displayFlashcardSets();
  }
}

function displayFlashcardSets() {
  
  flashcardSetsContainer.innerHTML = '';

  flashcardSets.forEach((set) => {
    const setElement = document.createElement('div');
    setElement.className = 'flashcard-set';
    setElement.innerHTML = `
      <h3>${set.title}</h3>
      <p>${set.description}</p>
    `;
    setElement.addEventListener('click', () => {
      localStorage.setItem('currentSet', JSON.stringify(set));
      window.location.href = 'flashcard.html';
    });
    const deleteSetButton = document.createElement('button');
    deleteSetButton.className = 'delete-set';
    deleteSetButton.textContent = 'Delete Set';
    deleteSetButton.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent the click event from propagating to the setElement
      deleteFlashcardSet(set.id);
    });
    setElement.appendChild(deleteSetButton);
    flashcardSetsContainer.appendChild(setElement);
    
  });
  

}

// Event listeners
createSetButton.addEventListener('click', openSetModal);
closeSetModal.addEventListener('click', closeSetModalHandler);
setForm.addEventListener('submit', saveSetHandler);

// Initial display
displayFlashcardSets();
