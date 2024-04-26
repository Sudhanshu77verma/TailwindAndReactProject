import React, { useState } from 'react'

function Card() {

    const [flashcards, setFlashcards] = useState([{ question: '', answer: '' }]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFront, setIsFront] = useState(true);

  const handleToggle = () => {
    setIsFront(!isFront);
  };

  const handleQuestionChange = (event, index) => {
    const updatedFlashcards = [...flashcards];
    updatedFlashcards[index].question = event.target.value;
    setFlashcards(updatedFlashcards);
  };

  const handleAnswerChange = (event, index) => {
    const updatedFlashcards = [...flashcards];
    updatedFlashcards[index].answer = event.target.value;
    setFlashcards(updatedFlashcards);
  };

  const addFlashcard = () => {
    setFlashcards([...flashcards, { question: '', answer: '' }]);
    setCurrentCardIndex(flashcards.length);
  };

  const goToPreviousCard = () => {
    setCurrentCardIndex(prevIndex => prevIndex - 1);
    setIsFront(true);
  };

  const goToNextCard = () => {
    setCurrentCardIndex(prevIndex => prevIndex + 1);
    setIsFront(true);
  };

  const resetFlashcards = () => {
    setFlashcards([{ question: '', answer: '' }]);
    setCurrentCardIndex(0);
    setIsFront(true);
  };

  return (
    <div>
        <div className="sm:max-w-md sm:mx-auto mt-8">
      <div className="flashcard">
        <div >
          {isFront ? (
            <textarea
              className="text-black border border-gray-300 p-2 w-full h-32 resize-none"
              placeholder="Enter question..."
              value={flashcards[currentCardIndex].question}
              onChange={event => handleQuestionChange(event, currentCardIndex)}
            />
          ) : (
            <textarea
              className="text-black border border-gray-300 p-2 w-full h-32 resize-none"
              placeholder="Enter answer"
              value={flashcards[currentCardIndex].answer}
              onChange={event => handleAnswerChange(event, currentCardIndex)}
            />
          )}
        </div>
        <button className="toggle-btn" onClick={handleToggle}>
          {isFront ? 'Show Answer' : 'Show Question'}
        </button>
      </div>
      <div className="flex justify-between mt-4">
        <button className="btn" onClick={goToPreviousCard} disabled={currentCardIndex === 0}>
          Previous
        </button>
        <button className="btn" onClick={goToNextCard} disabled={currentCardIndex === flashcards.length - 1}>
          Next
        </button>
      </div>
      <div className="flex justify-between mt-4">
        <button className="btn" onClick={addFlashcard}>
          Add Flashcard
        </button>
        <button className="btn" onClick={resetFlashcards}>
          Reset
        </button>
      </div>
    </div>
    </div>
  )
}

export default Card