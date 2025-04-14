import { useState } from 'react';
import styles from './sliderWithCounter.module.css';

const SliderWithCounter = () => {
  const [noiseReduction, setNoiseReduction] = useState(25);
  const [inputValue, setInputValue] = useState('25');

  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value);
    setNoiseReduction(value);
    setInputValue(value.toString());
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    
    if (/^\d+$/.test(value)) {
      const num = parseInt(value);
      if (num >= 0 && num <= 100) {
        setNoiseReduction(num);
      }
    }
  };

  const handleBlur = () => {
    if (!/^\d+$/.test(inputValue)) {
      setInputValue(noiseReduction.toString());
    }
  };

  const increment = () => {
    const newValue = Math.min(100, noiseReduction + 1);
    setNoiseReduction(newValue);
    setInputValue(newValue.toString());
  };

  const decrement = () => {
    const newValue = Math.max(0, noiseReduction - 1);
    setNoiseReduction(newValue);
    setInputValue(newValue.toString());
  };

  return (
    <div className={styles.sliderGroup}>
      <div className={styles.sliderRow}>
        <input
          type="range"
          min="0"
          max="100"
          value={noiseReduction}
          onChange={handleSliderChange}
          className={styles.slider}
        />
        <div className={styles.counter}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={styles.counterInput}
          />
          <div className={styles.buttons}>
            <button onClick={increment} className={styles.counterBtn}>▲</button>
            <button onClick={decrement} className={styles.counterBtn}>▼</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderWithCounter