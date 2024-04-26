import React, { useState } from 'react'

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [questions] = useState([
    {
      question: 'What is the domain of the function f(x) = 2x + 3?',
      options: ['All real numbers', 'Only even numbers', 'Only odd numbers'],
      correctAnswer: 'All real numbers'
    },
    {
      question: 'Which of the following is not a type of function?',
      options: ['Linear function', 'Quadratic function', 'Circular function'],
      correctAnswer: 'Circular function'
    },
    
  ]);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // Quiz finished
      alert(`Quiz finished! Your score is ${score}/${questions.length}`);
    }
}
  return (
    <div className='max-w-md mx-auto mt-6'>
    <h2 className='text-2xl font-semibold text-center'>Quiz Section</h2>
    {currentQuestion < questions.length && (
      <div className='mt-5 shadow-lg shadow-slate-600 px-10 py-10' >
        <p className='text-xl text-blue-800'>{questions[currentQuestion].question}</p>
        <ul className='hover:cursor-pointer list-disc'>
          {questions[currentQuestion].options.map((option, index) => (
           <li key={index} onClick={() => handleAnswer(option)}>
              {option}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
  )
}

export default Quiz