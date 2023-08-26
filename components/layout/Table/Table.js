'use client';
import React, { useState } from 'react';
import styles from './table.module.css';
import Image from 'next/image';
import teamlogo from '../../assets/icons/localteam.png';
import visitorteam from '../../assets/icons/visitorteam.png';

const Table = ({ rows, profileIcon, index,title }) => {
  const [activeOption, setActiveOption] = useState(2); // Active option, change as needed

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const options = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
  ];

  const columns = [
    'Series Name',
    'Local Team',
    'Visitor Team',
    'Match Type',
    'Match Started At',
    'Playing 11 Announced',
    'Status',
    
  ];

  return (
    <div>
       <p className={styles.cardtitle}>{title}</p>
    <div className={styles.container}>
     
      <div className={styles.options}>
        {options.map((option) => (
          <div
            key={option.id}
            className={`${styles.option} ${
              activeOption === option.id ? styles.active : ''
            }`}
            onClick={() => handleOptionClick(option.id)}
          >
            {option.name}
          </div>
        ))}
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              {rowData.map((cellData, cellIndex) =>(
                cellIndex === 1 ? (
                  <td key={cellIndex} className={cellData === "completed" ? styles.completed_cell : styles.col}>
                    <Image src={teamlogo} alt="Avatar"/>
                    {cellData}
                    <br/>
                    (MID)
                  </td>): cellIndex === 2 ? (
                  <td key={cellIndex} className={cellData === "completed" ? styles.completed_cell : styles.col}>
                    <Image src={visitorteam} alt="Avatar"  />
                    {cellData}
                    <br/>
                    (HAM)
                  </td>):  (
                  <td key={cellIndex} >
                    <p className={cellData === "completed" ? styles.completed_cell : styles.col}>{cellData}</p>
                  </td>)
           
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Table;
