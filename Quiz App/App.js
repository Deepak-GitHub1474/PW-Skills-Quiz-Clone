
// Quiz App
// 1st way
// import React, { useState } from "react";
// import "./MyProject.css";
// import QuizNav from "./MyProject/QuizNav";
// import QuizBody from "./MyProject/QuizBody";
// import QuizMain from "./MyProject/QuizMain";
// import QuizData from "./MyProject/QuizData";

// export default function Quiz() {
//     const [myQuestions, setMyQuestions] = useState(QuizData)
//     const [submitted, setSubmitted] = useState(false);
//     const [score, setScore] = useState(0);

//     function handleAnswerSelect(questionNum, selectedAnswer) {
//         if (!submitted) {
//             setMyQuestions((prevQuestions) => {
//                 const updatedQuestions = [...prevQuestions];
//                 const question = updatedQuestions[questionNum];

//                 if (question.selectedAnswer) {
//                     // Decrement correctSelected if the previously selected answer was correct
//                     if (question.selectedAnswer === question.correctAnswer) {
//                         setScore((prevCorrectSelected) => prevCorrectSelected - 1);
//                     }
//                 }

//                 question.selectedAnswer = selectedAnswer;

//                 if (selectedAnswer === question.correctAnswer) {
//                     // Increment correctSelected if the current selected answer is correct
//                     setScore((prevCorrectSelected) => prevCorrectSelected + 1);
//                 }

//                 return updatedQuestions;
//             });
//         }
//     };

//     function handleSubmit() {
//         if (!submitted) {
//             let newScore = 0;
//             myQuestions.forEach((currentQuestion) => {
//                 if (currentQuestion.selectedAnswer === currentQuestion.correctAnswer) {
//                     newScore++;
//                 }
//             });

//             setScore(newScore);
//             setSubmitted(true);
//         }
//     };

//     return (
//         <div className="quiz-app">
//             <QuizNav />
//             < QuizBody
//                 submitted={submitted}
//                 handleSubmit={handleSubmit}
//                 score={score}
//                 MyQuestions={myQuestions.length}
//             />
//             <div id="questions-el">
//                 {myQuestions.map((question, index) => (
//                     <Question
//                         key={index}
//                         question={question}
//                         questionNum={index}
//                         onAnswerSelect={handleAnswerSelect}
//                         submitted={submitted}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }

// function Question({ question, questionNum, onAnswerSelect, submitted }) {
//     const handleOptionChange = (event) => {
//         const selectedAnswer = event.target.value;
//         onAnswerSelect(questionNum, selectedAnswer);
//     };

//     return (
//         <QuizMain
//             question={question.question}
//             questionNum={questionNum}
//             submitted={submitted}
//             handleOptionChange={handleOptionChange}
//             optionA={question.answer.a}
//             optionB={question.answer.b}
//             optionC={question.answer.c}
//             optionD={question.answer.d}
//         />
//     );
// }

// .......... 2nd Way ................. //
import React, { useState } from "react";
import "./MyProject.css";
import QuizNav from "./MyProject/QuizNav";
import QuizBody from "./MyProject/QuizBody";
import QuizMain from "./MyProject/QuizMain";
import QuizData from "./MyProject/QuizData";

export default function Quiz() {
  const [myQuestions, setMyQuestions] = useState(QuizData);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerSelect = (questionNum, selectedAnswer) => {
    if (!submitted) {
      setMyQuestions((prevQuestions) =>
        prevQuestions.map((question, index) => {
          if (index === questionNum) {
            return {
              ...question,
              selectedAnswer: selectedAnswer,
            };
          }
          return question;
        })
      );
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const score = myQuestions.reduce(
    (totalScore, question) =>
      question.selectedAnswer === question.correctAnswer
        ? totalScore + 1
        : totalScore,
    0
  );

  return (
    <div className="quiz-app">
      <QuizNav />
      <QuizBody
        submitted={submitted}
        handleSubmit={handleSubmit}
        score={score}
        MyQuestions={myQuestions.length}
      />
      <div id="questions-el">
        {myQuestions.map((question, index) => (
          <Question
            key={index}
            question={question}
            questionNum={index}
            onAnswerSelect={handleAnswerSelect}
            submitted={submitted}
          />
        ))}
      </div>
    </div>
  );
}

function Question({ question, questionNum, onAnswerSelect, submitted }) {
  const handleOptionChange = (event) => {
    const selectedAnswer = event.target.value;
    onAnswerSelect(questionNum, selectedAnswer);
  };

  return (
    <QuizMain
      question={question.question}
      questionNum={questionNum}
      submitted={submitted}
      handleOptionChange={handleOptionChange}
      optionA={question.answer.a}
      optionB={question.answer.b}
      optionC={question.answer.c}
      optionD={question.answer.d}
    />
  );
}
