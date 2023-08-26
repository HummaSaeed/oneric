import React from 'react';
import styles from '../InputField/inputfield.module.css'

const MessageBox = ({type,placeholder,value,onChange}) => {
  return (
    <div>  <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={styles.msgbox}
    /></div>
  )
}

export default MessageBox