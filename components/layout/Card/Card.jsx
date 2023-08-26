import React from 'react';
import Image from 'next/image';
import styles from './card.module.css'

const Card = ({title,data}) => {
  
 
  return (
    <div>
        <p className={styles.cardtitle}>{title}</p>
    <div className={styles.container}>
    
    {data.map((data, index) => (
      <div key={index} className={styles.card} style={{ background: data.bgcolor }}>
        <div>{data.text}</div>
          <div className={styles.cardNumber}>
            <div>{data.number}</div>
            <Image className={styles.rupeeSign} src={data.logo} alt="not"/>
          </div>
      </div>
    ))}
  </div>
  </div>
  );
};

export default Card;