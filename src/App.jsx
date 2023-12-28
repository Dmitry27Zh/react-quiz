import { useState } from 'react'
import './App.css'

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: ['Это простой HTML', 'Это функция', 'Это тот же HTML, но с возможностью выполнять JS-код'],
    correct: 2,
  },
]

function Game({ step }) {
  const question = questions[step]
  const progress = Math.floor((step / questions.length) * 100)

  return (
    <>
      <div className="progress">
        <div style={{ width: progress }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((variant) => (
          <li key={crypto.randomUUID()}>{variant}</li>
        ))}
      </ul>
    </>
  )
}

function Result() {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="" />
      <h2>Вы отгадали 3 ответа из 10</h2>
      <button>Попробовать снова</button>
    </div>
  )
}

function App() {
  const [step, setStep] = useState(0)

  return (
    <div className="App">
      <Game step={step} />
    </div>
  )
}

export default App
