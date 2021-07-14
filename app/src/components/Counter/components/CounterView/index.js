import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const CounterView = ({ countValue, 
   handleIncrement, 
   handleDecrement, 
   handleReset,
   evenValue }) => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.display}>{countValue}</div>
         <div className={styles.display_parity}>{evenValue}</div>
          <div className={styles.buttonsWrapper}>
             <button onClick={handleDecrement}>-</button>
             <button onClick={handleReset}>Reset</button>
             <button onClick={handleIncrement}>+</button>
          </div>  
      </div>
   );
};

CounterView.propTypes = {
   countValue: PropTypes.number.isRequired,
};

export default CounterView;