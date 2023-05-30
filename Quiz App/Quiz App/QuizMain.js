import React from "react";
export default function QuizMain(props) {
    
    return (
        <div className="radio">
            <p>{props.question}</p>
            <label>
                <input
                    type="radio"
                    name={`option${props.questionNum}`}
                    value="a"
                    disabled={props.submitted}
                    onChange={props.handleOptionChange}
                />
                <span className="ans">{props.optionA}</span>
            </label>
            <br />
            <label>
                <input
                    type="radio"
                    name={`option${props.questionNum}`}
                    value="b"
                    disabled={props.submitted}
                    onChange={props.handleOptionChange}
                />
                <span className="ans">{props.optionB}</span>
            </label>
            <br />
            <label>
                <input
                    type="radio"
                    name={`option${props.questionNum}`}
                    value="c"
                    disabled={props.submitted}
                    onChange={props.handleOptionChange}
                />
                <span className="ans">{props.optionC}</span>
            </label>
            <br />
            <label>
                <input
                    type="radio"
                    name={`option${props.questionNum}`}
                    value="d"
                    disabled={props.submitted}
                    onChange={props.handleOptionChange}
                />
                <span className="ans">{props.optionD}</span>
            </label>
            <br />
        </div>
    )
}
