import React from 'react';
import styles from './TopHeader.module.css'

const TopHeader = ({ text }) => {
  return (
  <p className={styles.top_heading}>{text}</p>
  )
}

export default TopHeader