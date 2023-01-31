import React, { useEffect, useState } from 'react';
import styles from './style.module.css';

const Rating: React.FC = ({ setRate }) => {
  const [selectedRate, setSelectedRate] = useState(null);
  const rates = [1, 2, 3, 4, 5];

  useEffect(() => {
    setRate(selectedRate);
  }, [selectedRate]);

  const handleClickRate = (rate: number) => {
    rate !== selectedRate && setSelectedRate(rate);
    rate === selectedRate && setSelectedRate(null);
  };

  return (
    <div className={styles.rating}>
      {rates.map((rate) => (
        <button
          className={selectedRate === rate ? styles.selectedrate : null}
          onClick={() => handleClickRate(rate)}
        >
          {rate}
        </button>
      ))}
    </div>
  );
};

export default Rating;
