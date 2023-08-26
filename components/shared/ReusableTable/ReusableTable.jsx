import React from 'react';
import styles from './ReusableTable.module.css';
import avatar from '../../assets/Avatar.png';
import Image from 'next/image';
const ReusableTable = ({ headings, rows,profileIcon,index }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {headings.map((heading, index) => (
            <th key={index}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((rowData, rowIndex) => (
          <tr key={rowIndex}>
            {rowData.map((cellData, cellIndex) => (
              profileIcon && cellIndex===index ? (<td key={cellIndex}><Image src={avatar} alt="Avatar" width={20} height={20}/>{cellData}</td>):<td key={cellIndex}>{cellData}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReusableTable;
