import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber,setQuestionNumber] =useState(1);
  const [timeout,setTimeOut] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1,000" },
        { id: 6, amount: "$ 2,000" },
        { id: 7, amount: "$ 4,000" },
        { id: 8, amount: "$ 8,000" },
        { id: 9, amount: "$ 16,000" },
        { id: 10, amount: "$ 32,000" },
        { id: 11, amount: "$ 64,000" },
        { id: 12, amount: "$ 125,000" },
        { id: 13, amount: "$ 250,000" },
        { id: 14, amount: "$ 500,000" },
        { id: 15, amount: "$ 1,000,000" },
      ].reverse(),
    []
  );

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who was the first African American to win the Nobel Prize for Literature?",
      answers: [
        {
          text: "Toni Morrison",
          correct: true,
        },
        {
          text: "Maya Angelou",
          correct: false,
        },
        {
          text: "Langston Hughes",
          correct: false,
        },
        {
          text: "Ralph Ellison",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which city is the capital of Australia?",
      answers: [
        {
          text: "Melbourne",
          correct: false,
        },
        {
          text: "Canberra",
          correct: true,
        },
        {
          text: "Sydney",
          correct: false,
        },
        {
          text: "Perth",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Who was the first woman to win a Nobel Prize?",
      answers: [
        {
          text: "Marie Curie",
          correct: true,
        },
        {
          text: "Ada Lovelace",
          correct: false,
        },
        {
          text: "Madam Curie",
          correct: false,
        },
        {
          text: "Jane Goodall",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which country is the largest producer of coffee in the world?",
      answers: [
        {
          text: "Ethiopia",
          correct: false,
        },
        {
          text: "Colombia",
          correct: false,
        },
        {
          text: "Vietnam",
          correct: false,
        },
        {
          text: "Brazil",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "What is the smallest country in the world?",
      answers: [
        {
          text: "Monaco",
          correct: false,
        },
        {
          text: "Nauru",
          correct: false,
        },
        {
          text: "Vatican City",
          correct: true,
        },
        {
          text: "San Marino",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "What is the smallest bone in the human body?",
      answers: [
        {
          text: "Stapes",
          correct: true,
        },
        {
          text: "Incus",
          correct: false,
        },
        {
          text: "Malleus",
          correct: false,
        },
        {
          text: "Hyoid",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "What is the largest organ in the human body?",
      answers: [
        {
          text: "Liver",
          correct: false,
        },
        {
          text: "Brain",
          correct: false,
        },
        {
          text: "Skin",
          correct: true,
        },
        {
          text: "Lungs",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Who was the first person to circumnavigate the globe?",
      answers: [
        {
          text: "Christopher Columbus",
          correct: false,
        },
        {
          text: "Ferdinand Magellan",
          correct: true,
        },
        {
          text: "Vasco da Gama ",
          correct: false,
        },
        {
          text: "Marco Polo",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which country has the highest number of UNESCO World Heritage Sites?",
      answers: [
        {
          text: "China",
          correct: true,
        },
        {
          text: "Italy",
          correct: false,
        },
        {
          text: "France",
          correct: false,
        },
        {
          text: "Spain",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "What is the largest island in the Mediterranean Sea?",
      answers: [
        {
          text: "Sardinia",
          correct: false,
        },
        {
          text: "Corsica",
          correct: false,
        },
        {
          text: "Cyprus",
          correct: false,
        },
        {
          text: "Sicily",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "Which city is the farthest north?",
      answers: [
        {
          text: "Oslo",
          correct: false,
        },
        {
          text: "Reykjavik",
          correct: true,
        },
        {
          text: "Helsinki",
          correct: false,
        },
        {
          text: "Moscow",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "In what year did the Battle of Hastings take place?",
      answers: [
        {
          text: "1066",
          correct: true,
        },
        {
          text: "1215",
          correct: false,
        },
        {
          text: "1348",
          correct: false,
        },
        {
          text: "1415",
          correct: false,
        },
      ],
    },
  ];

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
    {!username ? (
      <Start setUsername={setUsername} />
    ) : (
      <>
        <div className="main">
           
          {timeout ? (
            <h1 className="endText">You earned: {earned}</h1>
          ) : (
            <>
              <div className="top">
                <div className="timer">
                  <Timer
                    setTimeOut={setTimeOut}
                    questionNumber={questionNumber}
                  />
                </div>
              </div>
              <div className="bottom">
                <Trivia
                  data={data}
                  questionNumber={questionNumber}
                  setQuestionNumber={setQuestionNumber}
                  setTimeOut={setTimeOut}
                  earned={earned}
                />
              </div>
            </>
          )}
        </div>
        <div className="pyramid">
          <ul className="moneyList">
            {moneyPyramid.map((m) => (
              <li
                className={
                  questionNumber === m.id
                    ? "moneyListItem active"
                    : "moneyListItem"
                }
              >
                <span className="moneyListItemNumber">{m.id}</span>
                <span className="moneyListItemAmount">{m.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </>
    )}
  </div>
);
}

export default App;
