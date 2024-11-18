import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx';

export default function App() {

  const tutorialData = [
    {
      title: 'Spend many hours',
      description: "If you don't have enough, you will have to dedicate more hours to it. At first it seems impossible, but you will notice an improvement quickly",
      bgColor: "#2f95b1",
      image: "./assets/time_managment.svg"
    },
    {
      title: 'Code your own projects',
      description: 'Better 10 hours working on your own projects than 10 hours watching tutorials. Motivation and involvement in the project will help accelerate your learning',
      bgColor: '#d2d2d2',
      image: "./assets/programming.svg"
    },
    {
      title: 'Try to rest',
      description: 'Resting well and disconnecting is vital. This way you will reduce stress and anxiety. You will improve your concentration and consolidate your learning',
      bgColor: '#edc73f',
      image: "./assets/meditation.svg"
    },
  ]

  const [step, setStep] = useState(0)
  const currentCardData = tutorialData[step];  

  return (
   <Card title={currentCardData.title} description={currentCardData.description
   }/>
  );
}
