import React,{useEffect, useState} from 'react'
import useSound from "use-sound";
import play from "../Music/src_sounds_play.mp3";
import correct from "../Music/src_sounds_correct.mp3";
import wrong from "../Music/src_sounds_wrong.mp3";
import wait from "../Music/src_sounds_wait.mp3"

export default function Trivia({data,
    questionNumber,
    setQuestionNumber,
    setTimeOut,earned,}) {
    const[selectedAnswer,setSelectedAnswer]=useState(null);
    const[question,setQuestion]= useState(null);
    const [className, setClassName] = useState("answer");
    const [letsPlay] = useSound(play);
    const [correctAnswer] = useSound(correct);
    const [wrongAnswer] = useSound(wrong);
    const [waitPlease] = useSound(wait);

    useEffect(() => {
        letsPlay();
      }, [letsPlay]);
    
      useEffect(() => {
        // {data.id !== 15 && data.id>14 ? (setTimeOut(true)) :(setTimeOut(false))}
        setQuestion(data[questionNumber - 1]);
      }, [data, questionNumber]);

      const delay = (duration, callback) => {
        setTimeout(() => {
          callback();
        }, duration);
      };
    
      const handleClick = (a) => {
        setSelectedAnswer(a);
        setClassName("answer active");
        delay(3000, () => {
          waitPlease();
          setClassName(a.correct ? "answer correct" : "answer wrong");
        });
        
          delay(5000, () => {
          if (a.correct) {
            correctAnswer();
            delay(1000, () => {
              setQuestionNumber((prev) => prev + 1);
              setSelectedAnswer(null);
            });
          } else {
            wrongAnswer();
            delay(1000, () => {
              setTimeOut(true);
            });
          }
        
    })
};
    
    
  return (
    <div className="trivia">
        <div className="question">
            {question?.question}
        </div>
        <div className="answers">
        {question?.answers.map((a) => (
          <div
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => !selectedAnswer && handleClick(a)}
          >
            {a.text}
          </div>
        ))}
        </div>
    </div>
  );
}
