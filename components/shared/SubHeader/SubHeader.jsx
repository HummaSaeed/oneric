import React from 'react';
import styles from '../SubHeading/SubHeading.module.css'

const SubHeader = ({text}) => {
  return (
    <p className={styles.sub_heading}>{text}</p>
  )
}

export default SubHeader