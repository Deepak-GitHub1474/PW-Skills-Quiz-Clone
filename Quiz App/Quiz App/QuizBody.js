// import React from "react";

// export default function QuizBody(props) {
//     return (
//         <div className="quiz-body">
//             <div className="main">
//                 <h2>Database quiz</h2>
//                 {props.score ? (
//                     <p id="score">{`You scored ${props.score} out of ${props.question.length}`}</p>
//                 ) : (
//                     <p id="score">Score</p>
//                 )}
//             </div>
//             <hr />

//             <div id="score-container">
//                 <div id="score-closing">
//                     <h3>Quiz Score</h3>
//                     <span id="score-box-close">X</span>
//                 </div>
//                 <div className="score-box">
//                     <div className="ring">
//                         <div className="ring"></div>
//                     </div>
//                     <h2 id="correct-symbol">✔</h2>
//                     {props.score && (
//                         <p id="score-obtained">{`You scored ${props.score} out of ${props.question.length}`}</p>
//                     )}
//                 </div>
//             </div>
//             {props.displayScore ? (
//                 <button className="submit" >Submitted</button>
//             ) : (<button className="submit" onClick={props.handleClick}>Submit</button>)}
//         </div>
//     );
// }


import React from "react";

export default function QuizBody(props) {

    return (
        <div className="quiz-body">
            <div className="main">
                <h2>Database quiz</h2>
                {props.submitted ? (
                    <p id="score">You scored {props.score} out of {props.MyQuestions}</p>
                ) : (
                    <p id="score">Score</p>
                )}
            </div>
            <hr />
            {props.submitted ? (<button id="submit" onClick={props.handleSubmit}>Submitted</button>)
                       : (<button id="submit" onClick={props.handleSubmit}>Submit</button>)}
        </div>
    );
}
