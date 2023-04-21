
// Selectors
const createFlashcardButton = document.getElementById('create-flashcard');
const flashcardModal = document.getElementById('flashcard-modal');
const closeFlashcardModal = document.getElementById('close-flashcard-modal');
const flashcardForm = document.getElementById('flashcard-form');
const flashcardsContainer = document.querySelector('.cards-container');

// Data
const currentSet = JSON.parse(localStorage.getItem('currentSet'));
const flashcardSets = JSON.parse(localStorage.getItem('flashcardSets')) || [];
const setIndex = flashcardSets.findIndex((set) => set.id === currentSet.id);

// Functions
function flipFlashcard(flashcardElement) {
    flashcardElement.classList.toggle('flipped');
  }
  
function openFlashcardModal() {
  flashcardModal.style.display = 'block';
}

function closeFlashcardModalHandler() {
  flashcardModal.style.display = 'none';
}

function saveFlashcardHandler(e) {
  e.preventDefault();

  const frontContent = flashcardForm['front-content'].value.trim();
  const backContent = flashcardForm['back-content'].value.trim();

  if (!frontContent || !backContent) return;

  const newFlashcard = {
    id: Date.now(),
    front: frontContent,
    back: backContent,
  };

  flashcardSets[setIndex].flashcards.push(newFlashcard);
  localStorage.setItem('flashcardSets', JSON.stringify(flashcardSets));

  flashcardForm.reset();
  flashcardModal.style.display = 'none';
  displayFlashcards();
}

function deleteFlashcard(flashcardId) {
  const index = flashcardSets[setIndex].flashcards.findIndex((flashcard) => flashcard.id === flashcardId);
  if (index > -1) {
    flashcardSets[setIndex].flashcards.splice(index, 1);
    localStorage.setItem('flashcardSets', JSON.stringify(flashcardSets));
    displayFlashcards();
  }
}

function displayFlashcards() {

  flashcardsContainer.innerHTML = '';

  flashcardSets[setIndex].flashcards.forEach((flashcard) => {
    const flashcardElement = document.createElement('div');
    flashcardElement.className = 'flashcard';
    flashcardElement.innerHTML = `
      <div class="front">
        <p>${flashcard.front}</p>
      </div>
      <div class="back">
        <p>${flashcard.back}</p>
      </div>
    `;
    flashcardElement.addEventListener('click', () => flipFlashcard(flashcardElement));
    flashcardsContainer.appendChild(flashcardElement);
    
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-card';
    deleteButton.innerHTML = 'Delete card';
    deleteButton.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteFlashcard(flashcard.id);
    });
    flashcardElement.appendChild(deleteButton);
  });
  
  flashcardsContainer.appendChild(createFlashcardElement);
}

// Event listeners
createFlashcardButton.addEventListener('click', openFlashcardModal);
closeFlashcardModal.addEventListener('click', closeFlashcardModalHandler);
flashcardForm.addEventListener('submit', saveFlashcardHandler);

// Initial display
displayFlashcards();

