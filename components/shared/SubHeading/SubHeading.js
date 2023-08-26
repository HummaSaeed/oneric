// components/SubHeading.js
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import styles from './SubHeading.module.css';

function SubHeading({ totalRecords, buttonText, onButtonClick }) {
  return (
    <div className={styles.sub_heading}>
      <span className={styles.total_records}>
        Total records: {totalRecords}
      </span>
      <div>
        <button className={styles.action_button} onClick={onButtonClick}>
          {buttonText}
        </button>
        <SearchBar placeholder="Search" />
      </div>
    </div>
  );
}

export default SubHeading;
