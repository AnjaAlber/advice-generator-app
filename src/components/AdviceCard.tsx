import React from 'react';
import './AdviceCard.css';
import { ReactComponent as PauseIcon } from '../images/pause.svg';
import { useState, useEffect } from "react";
import { ReactComponent as Dice } from '../images/icon-dice.svg';

const AdviceCard: React.FC = () => {
  const [advice, setAdvice] = useState<{ slip: { id: number; advice: string; } } | null>(null);
  const [error, setError] = useState(null);

  const fetchAdviceData = async () => {
    await fetch('https://api.adviceslip.com/advice')

      .then(res => {
        if (!res.ok) {
          throw Error('An error occurred. Could not fetch data from API. Please try again later.');
        }
        return res.json();
      })
      .then(data => {
        setAdvice(data);
      })
      .catch(err => {
        setError(err.message);
      })
  }
  useEffect(() => {
    fetchAdviceData();
  }, [])

  return (
    <>
      {error && <div className="error">{error}</div>}
      <div className="card-container">
        <small className="advice-index">Advice # <span>{advice?.slip.id}</span></small>
        <p className="advice-text" data-testid="adviceText">“{advice?.slip.advice}“</p>
        <div className="divider">
          <div className="line"></div>
          <PauseIcon />
          <div className="line"></div>
        </div>
        <button onClick={fetchAdviceData} className="btn"><Dice className="dice-icon" /></button>
      </div>
    </>
  )
}

export default AdviceCard;