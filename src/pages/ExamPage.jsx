// import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import Navbar from '../components/Navbar'
// import { RiTimerLine } from "react-icons/ri";
// import { IoRadioButtonOn, IoRadioButtonOffSharp } from "react-icons/io5";

// const questions = [
//   {
//     id: 1,
//     text: "Who was the first man to land on the moon?",
//     answers: [
//       { id: 'A', text: 'Yuri Gagarin' },
//       { id: 'B', text: 'Neil Armstrong' },
//       { id: 'C', text: 'Eila Thomas' },
//       { id: 'D', text: 'Peter Jefferson' },
//     ],
//     correctAnswer: 'B'
//   },
//   {
//     id: 2,
//     text: "What is the capital of France?",
//     answers: [
//       { id: 'A', text: 'London' },
//       { id: 'B', text: 'Berlin' },
//       { id: 'C', text: 'Paris' },
//       { id: 'D', text: 'Rome' },
//     ],
//     correctAnswer: 'C'
//   },
//   {
//     id: 3,
//     text: "Which planet is known as the Red Planet?",
//     answers: [
//       { id: 'A', text: 'Venus' },
//       { id: 'B', text: 'Mars' },
//       { id: 'C', text: 'Jupiter' },
//       { id: 'D', text: 'Saturn' },
//     ],
//     correctAnswer: 'B'
//   },
//   {
//     id: 4,
//     text: "Who painted the Mona Lisa?",
//     answers: [
//       { id: 'A', text: 'Vincent van Gogh' },
//       { id: 'B', text: 'Pablo Picasso' },
//       { id: 'C', text: 'Leonardo da Vinci' },
//       { id: 'D', text: 'Michelangelo' },
//     ],
//     correctAnswer: 'C'
//   },
//   {
//     id: 5,
//     text: "What is the largest ocean on Earth?",
//     answers: [
//       { id: 'A', text: 'Atlantic Ocean' },
//       { id: 'B', text: 'Indian Ocean' },
//       { id: 'C', text: 'Arctic Ocean' },
//       { id: 'D', text: 'Pacific Ocean' },
//     ],
//     correctAnswer: 'D'
//   }
// ];

// const ExamPage = () => {
//     const [timeLeft, setTimeLeft] = useState(60 * 60); // Start with 60 minutes
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (timeLeft <= 0) return;
//         const intervalId = setInterval(() => {
//             setTimeLeft(timeLeft - 1);
//         }, 1000);
//         return () => clearInterval(intervalId);
//     }, [timeLeft]);

//     const formatTime = (seconds) => {
//         const h = Math.floor(seconds / 3600);
//         const m = Math.floor((seconds % 3600) / 60);
//         const s = seconds % 60;
//         return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
//     };

//     const handleAnswerSelect = (answerId) => {
//         const newSelectedAnswers = [...selectedAnswers];
//         newSelectedAnswers[currentQuestionIndex] = answerId;
//         setSelectedAnswers(newSelectedAnswers);
//     };

//     const handleNextQuestion = () => {
//         if (currentQuestionIndex < questions.length - 1) {
//             setCurrentQuestionIndex(currentQuestionIndex + 1);
//         } else {
//             // Navigate to results page or next step
//             navigate('/exam-results');
//         }
//     };

//     const currentQuestion = questions[currentQuestionIndex];

//     return (
//         <div>
//             <Navbar/>
//             <p className='mt-12 px-48 font-bold text-2xl'>Basic Competency Exam</p>

//             <div className='flex flex-col justify-center items-center'>
//                 <div className='border-2 px-9 py-2 w-[1000px] mt-9 rounded-md'>
//                     <div className='flex items-center justify-between'>
//                         <div className='flex items-center gap-x-2'>
//                             <p><RiTimerLine /></p>
//                             <p className='font-semibold text-lg'>Time left</p>
//                         </div>
//                         <p>{formatTime(timeLeft)}</p>
//                     </div>
//                 </div>

//                 <div className='border-2 px-9 py-9 w-[1000px] mt-9 rounded-md'>
//                     <p className='font-semibold bg-gray-100 py-2 px-2'>Question {currentQuestionIndex + 1} of {questions.length}</p>
//                     <p className='font-semibold mt-9'>{currentQuestion.text}</p>
//                     {currentQuestion.answers.map((answer) => (
//                         <p 
//                             key={answer.id} 
//                             className='flex items-center gap-x-2 mt-3 cursor-pointer'
//                             onClick={() => handleAnswerSelect(answer.id)}
//                         >
//                             {selectedAnswers[currentQuestionIndex] === answer.id ? 
//                                 <IoRadioButtonOn size={20} /> : 
//                                 <IoRadioButtonOffSharp size={20} />
//                             }
//                             {answer.id}. {answer.text}
//                         </p>
//                     ))}
//                 </div>
//             </div>
            
//             <div className='w-[1000px] mx-auto'>
//                 <div className='flex justify-between'>
//                     <button  className='mt-9 bg-blue-500 text-white px-6 py-2 rounded font-medium'>Back</button>
//                     <button 
//                         onClick={handleNextQuestion}
//                         className='mt-9 bg-blue-500 text-white px-6 py-2 rounded font-medium'
//                     >
//                         {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ExamPage

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { RiTimerLine } from "react-icons/ri";
import { IoRadioButtonOn, IoRadioButtonOffSharp } from "react-icons/io5";

const questions = [
  {
    id: 1,
    text: "Who was the first man to land on the moon?",
    answers: [
      { id: 'A', text: 'Yuri Gagarin' },
      { id: 'B', text: 'Neil Armstrong' },
      { id: 'C', text: 'Eila Thomas' },
      { id: 'D', text: 'Peter Jefferson' },
    ],
    correctAnswer: 'B'
  },
  {
    id: 2,
    text: "What is the capital of France?",
    answers: [
      { id: 'A', text: 'London' },
      { id: 'B', text: 'Berlin' },
      { id: 'C', text: 'Paris' },
      { id: 'D', text: 'Rome' },
    ],
    correctAnswer: 'C'
  },
  {
    id: 3,
    text: "Which planet is known as the Red Planet?",
    answers: [
      { id: 'A', text: 'Venus' },
      { id: 'B', text: 'Mars' },
      { id: 'C', text: 'Jupiter' },
      { id: 'D', text: 'Saturn' },
    ],
    correctAnswer: 'B'
  },
  {
    id: 4,
    text: "Who painted the Mona Lisa?",
    answers: [
      { id: 'A', text: 'Vincent van Gogh' },
      { id: 'B', text: 'Pablo Picasso' },
      { id: 'C', text: 'Leonardo da Vinci' },
      { id: 'D', text: 'Michelangelo' },
    ],
    correctAnswer: 'C'
  },
  {
    id: 5,
    text: "What is the largest ocean on Earth?",
    answers: [
      { id: 'A', text: 'Atlantic Ocean' },
      { id: 'B', text: 'Indian Ocean' },
      { id: 'C', text: 'Arctic Ocean' },
      { id: 'D', text: 'Pacific Ocean' },
    ],
    correctAnswer: 'D'
  }
];

const ExamPage = () => {
    const [timeLeft, setTimeLeft] = useState(60 * 60); // Start with 60 minutes
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
    const navigate = useNavigate();

    useEffect(() => {
        if (timeLeft <= 0) return;
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const handleAnswerSelect = (answerId) => {
        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[currentQuestionIndex] = answerId;
        setSelectedAnswers(newSelectedAnswers);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // Navigate to results page or next step
            navigate('/finish');
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div>
            <Navbar/>
            <p className='mt-12 px-48 font-bold text-2xl'>Basic Competency Exam</p>

            <div className='flex flex-col justify-center items-center'>
                <div className='border-2 px-9 py-2 w-[1000px] mt-9 rounded-md'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-x-2'>
                            <p><RiTimerLine /></p>
                            <p className='font-semibold text-lg'>Time left</p>
                        </div>
                        <p>{formatTime(timeLeft)}</p>
                    </div>
                </div>

                <div className='border-2 px-9 py-9 w-[1000px] mt-9 rounded-md'>
                    <p className='font-semibold bg-gray-100 py-2 px-2'>Question {currentQuestionIndex + 1} of {questions.length}</p>
                    <p className='font-semibold mt-9'>{currentQuestion.text}</p>
                    {currentQuestion.answers.map((answer) => (
                        <p 
                            key={answer.id} 
                            className='flex items-center gap-x-2 mt-3 cursor-pointer'
                            onClick={() => handleAnswerSelect(answer.id)}
                        >
                            {selectedAnswers[currentQuestionIndex] === answer.id ? 
                                <IoRadioButtonOn size={20} /> : 
                                <IoRadioButtonOffSharp size={20} />
                            }
                            {answer.id}. {answer.text}
                        </p>
                    ))}
                </div>
            </div>
            
            <div className='w-[1000px] mx-auto'>
                <div className='flex justify-between'>
                    <button 
                        onClick={handlePreviousQuestion}
                        className='mt-9 bg-blue-500 text-white px-6 py-2 rounded font-medium'
                        disabled={currentQuestionIndex === 0}
                    >
                        Back
                    </button>
                    <button 
                        onClick={handleNextQuestion}
                        className='mt-9 bg-blue-500 text-white px-6 py-2 rounded font-medium'
                    >
                        {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ExamPage