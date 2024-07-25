import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation,useNavigate } from "react-router-dom";

const QuizStart = () => {
    // for navigation
    let navigate=useNavigate();
    let location = useLocation();
    const [quizData, setQuizData] = useState(null);
    const [currques, setCurrques] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [markedForReview, setMarkedForReview] = useState([]);
    const [result, setResult] = useState(false);
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(prevSeconds => {
                if (prevSeconds === 0) {
                    if (minutes === 0) {
                        calculateResult();
                        return 0;
                    }
                    setMinutes(prevMinutes => prevMinutes - 1);
                    return 59;
                }
                return prevSeconds - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [minutes]);

    useEffect(() => {
        const fetchQuiz = async () => {
            const res = await axios.get(
                `http://localhost:1000/api/v1/quiz/fetch-quiz/${location.state.from}`
            );
            setMinutes(res.data.time);
            setQuizData(res.data);
            setSelectedAnswers(Array(res.data.questions.length).fill(null));
            setMarkedForReview(Array(res.data.questions.length).fill(false));
        };
        fetchQuiz();
    }, [location.state.from]);

    const handleNextQuestion = () => {
        if (currques < quizData.questions.length - 1) {
            setCurrques(currques + 1);
        }
    };

    const handlePreviousQuestion = () => {
        if (currques > 0) {
            setCurrques(currques - 1);
        }
    };

    const reset = () => {
        setCurrques(0);
        setSelectedAnswers(Array(quizData.questions.length).fill(null));
        setMarkedForReview(Array(quizData.questions.length).fill(false));
        setResult(false);
    };

    const handleSelectAnswer = (index, answer) => {
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[index] = answer;
        setSelectedAnswers(updatedAnswers);
    };

    const clearAnswer = (index) => {
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[index] = null;
        setSelectedAnswers(updatedAnswers);
    };

    const toggleMarkForReview = (index) => {
        const updatedMarkedForReview = [...markedForReview];
        updatedMarkedForReview[index] = !updatedMarkedForReview[index];
        setMarkedForReview(updatedMarkedForReview);
    };

    const calculateResult = async () => {
        let correctAnswers = 0;
        quizData.questions.forEach((question, index) => {
            if (selectedAnswers[index] === question.correctAnswer.toString()) {
                correctAnswers += 1;
            }
        });
    
        setResult(correctAnswers);
    
        try {
            const id = localStorage.getItem('id');
            const dataToSend = {
                userId: id,
                quizId: location.state.from,
                selectedAnswers: selectedAnswers.map(ans => ans ? parseInt(ans) : null),
                marks: correctAnswers
            };
    
            const response = await axios.post('http://localhost:1000/api/v1/store-result', dataToSend);
            console.log('Quiz result stored:', response.data);
            setResult(correctAnswers); 
        } catch (error) {
            console.error('Error storing quiz result:', error);
        }
    };
    

    if (!quizData) return <div>Loading...</div>;

    return (
        <div
            onCopy={(e) => e.preventDefault()}
            onCut={(e) => e.preventDefault()}
            onPaste={(e) => e.preventDefault()}
            style={{ userSelect: 'none' }}
        >
            {result !== false ? (
                <div>
                    <div className='w-[350px] h-[200px] mx-auto bg-gray shadow-lg shadow-gray-500 rounded-md mt-40'>
                        <h2 className='text-2xl text-center my-3'>Quiz App</h2>
                        <hr />
                        <h2 className='text-center text-xl my-3'>Your Score: {result} / {quizData.questions.length}</h2>
                        <div className='text-center'>
                            <button onClick={reset} className='px-2 py-1 bg-green-500 hover:bg-green-400 rounded-md hover:rounded-full text-2xl hover:outline hover:outline-green-500 hover:outline-offset-2'>Go To Quizzes</button>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className='bg-emerald-500 py-2'>
                        <ul className='text-center text-2xl'>
                            <li>{minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}</li>
                        </ul>
                    </div>

                    <div className="app-container flex">
                        <div className="outline outline-black w-[70%] ml-10 mt-14 h-[500px]">
                            <div className="text-lg font-semibold">
                                <ul className="list-group">
                                    <li className="text-xl ml-4 py-2" key={currques}>
                                        Ques: {currques + 1} - {quizData.questions[currques].questionText}
                                    </li>
                                    {quizData.questions[currques].options.map((option, i) => (
                                        <li className="list-group-item" key={`${currques}-${i}`}>
                                            <input
                                                type="radio"
                                                id={`${currques}-${i}`}
                                                name={`question-${currques}`}
                                                value={i + 1}
                                                checked={selectedAnswers[currques] === `${i + 1}`}
                                                onChange={() => handleSelectAnswer(currques, `${i + 1}`)}
                                            />
                                            <label htmlFor={`${currques}-${i}`}>{option.optionText}</label>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    type="button"
                                    className="btn btn-light bg-gray-100 text-lg mt-2 ml-4 rounded-lg px-2 py-1 text-red-500"
                                    onClick={() => clearAnswer(currques)}
                                >
                                    Clear Option
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-light bg-gray-100 text-lg mt-2 ml-4 rounded-lg px-2 py-1 text-blue-500"
                                    onClick={() => toggleMarkForReview(currques)}
                                >
                                    {markedForReview[currques] ? 'Unmark Review' : 'Mark for Review'}
                                </button>
                            </div>
                            <button
                                type="button"
                                className="btn btn-light bg-gray-100 text-lg mt-44 ml-10 rounded-lg px-2 py-1 text-red-500"
                                onClick={handlePreviousQuestion}
                                disabled={currques === 0}
                            >
                                Previous Question
                            </button>
                            <button
                                type="button"
                                className="btn btn-light bg-gray-100 text-lg ml-[600px] mt-44 rounded-lg px-2 py-1 text-red-500"
                                onClick={handleNextQuestion}
                                disabled={currques === quizData.questions.length - 1}
                            >
                                Next Question
                            </button>
                        </div>
                        <div className="outline outline-black w-[22%] mt-14 mx-10">
                            {quizData.questions.map((_, index) => (
                                <button
                                    key={index}
                                    className={`m-[11px] w-[55px] h-[55px] rounded-md ${markedForReview[index] ? 'bg-blue-200 hover:bg-blue-300' : selectedAnswers[index] === null ? 'bg-red-200 hover:bg-red-300' : 'bg-gray-200 hover:bg-gray-300'}`}
                                    onClick={() => setCurrques(index)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            <div>
                                <button
                                    type="button"
                                    className="mt-[298px] text-2xl bg-green-500 w-[316px] py-2 absolute hover:bg-green-400"
                                    onClick={calculateResult}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default QuizStart;
