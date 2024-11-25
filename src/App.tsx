import { useState } from 'react'
import './App.css'
import Card from './components/Card';
import management from "./assets/time_managment.svg";
import programming from "./assets/programming.svg";
import meditation from "./assets/meditation.svg";

export default function App() {

  const tutorialData = [
    {
      title: 'Spend many hours',
      description: "If you don't have enough, you will have to dedicate more hours to it. At first it seems impossible, but you will notice an improvement quickly",
      bgColor: '#2f95b1',
      image: management,
    },
    {
      title: 'Code your own projects',
      description: 'Better 10 hours working on your own projects than 10 hours watching tutorials. Motivation and involvement in the project will help accelerate your learning',
      bgColor: '#d2d2d2',
      image: programming
    },
    {
      title: 'Try to rest',
      description: 'Resting well and disconnecting is vital. This way you will reduce stress and anxiety. You will improve your concentration and consolidate your learning',
      bgColor: '#edc73f',
      image: meditation
    }    
  ];

  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(0);
  const currentCardData = tutorialData[step];

  const nextStep = () => {
    setDirection(1);
    setStep(step => step + 1);
  };

  const prevStep = () => {
    setDirection(-1);
    setStep(step => step - 1);
  };

  const goToStep = (indicatorStep) => {
    setDirection(indicatorStep > step ? 1 : -1);
    setStep(indicatorStep);
    console.log({indicatorStep});
  }

  return (
    <Card title={currentCardData.title} description={currentCardData.description
    } image={currentCardData.image} bgColor={currentCardData.bgColor}
    nextStep={nextStep} prevStep={prevStep} currentStep={step} dataLength={tutorialData.length} goToStep={goToStep} direction={direction}/>
  );
}
