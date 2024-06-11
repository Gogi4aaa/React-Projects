import { useState, useCallback, useRef } from "react";
import quizCompleteImg from "../assets/quiz-complete.png"
import QUESTIONS from '../questions.js';
import Question from "./Question.jsx";

const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(
        function handleSelectAnswer(selectedAnswer){
        setUserAnswers(prevAnswers => {
            return [...prevAnswers, selectedAnswer]
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);
    if(quizIsComplete){
        return <div id="summary">
            <img src={quizCompleteImg} alt="Trophy icon"/>
            <h2>Quiz Completed!</h2>
        </div>
    }

    return(
        <div id="quiz">
            <Question 
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    )
}
export default Quiz;