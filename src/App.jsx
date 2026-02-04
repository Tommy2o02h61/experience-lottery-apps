import React, { useState } from 'react';
import InputForm from './components/InputForm';
import LotteryEffect from './components/LotteryEffect';
import ResultCards from './components/ResultCards';
import { drawLottery } from './data';

function App() {
  const [step, setStep] = useState('input');
  const [criteria, setCriteria] = useState({ mood: '', time: '', location: '' });
  const [results, setResults] = useState([]);

  const handleStart = () => {
    setStep('drawing');
    setTimeout(() => {
      const drawnItems = drawLottery(criteria.mood, criteria.time, criteria.location);
      setResults(drawnItems);
      setStep('result');
    }, 2500);
  };

  const handleReset = () => {
    setCriteria({ mood: '', time: '', location: '' });
    setResults([]);
    setStep('input');
  };

  // 青海波（Seigaiha）パターン
  // User Request: 10% opacity (0.1) without complex gradients
  const patternSvg = `
    <svg width='80' height='40' viewBox='0 0 80 40' xmlns='http://www.w3.org/2000/svg'>
      <g fill='none' fill-rule='evenodd'>
        <g fill='#FFB978' fill-opacity='0.1'>
          <path d='M40 40c0-21.5-17.9-40-40-40V0c0 22.1 17.9 40 40 40z' />
          <path d='M40 40c0-21.5 17.9-40 40-40V0c0 22.1-17.9 40-40 40z' />
        </g>
      </g>
    </svg>
  `;
  const encodedPattern = `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(patternSvg.trim())}")`;

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 overflow-hidden relative"
      style={{
        backgroundColor: '#FFFdeb',
        backgroundImage: encodedPattern,
        backgroundSize: '40px 20px'
      }}
    >
      <div className="relative z-10 w-full flex justify-center">
        {step === 'input' && (
          <InputForm
            criteria={criteria}
            setCriteria={setCriteria}
            onStart={handleStart}
          />
        )}

        {step === 'drawing' && (
          <LotteryEffect />
        )}

        {step === 'result' && (
          <ResultCards
            results={results}
            onReset={handleReset}
          />
        )}
      </div>
    </div>
  );
}

export default App;
