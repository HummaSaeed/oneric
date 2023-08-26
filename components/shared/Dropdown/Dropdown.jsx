import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FiChevronDown } from 'react-icons/fi';
import styles from './styles.module.css';


const CustomDropdown = ({ text, onClick }) => {
    return (
      <div>
       <button onClick={onClick} className={styles.dropdownButton}>
     {text}<FiChevronDown className={styles.arrow} />
    </button>
    </div>
      );
}
CustomDropdown.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default CustomDropdown;