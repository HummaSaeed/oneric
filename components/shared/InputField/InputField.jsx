import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputField.module.css';

const InputField = ({type,placeholder,value,onChange}) => {
  return (
       <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={styles.input}
    />
  )
}
InputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
InputField.defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
  onChange: () => {},
};

export default InputField