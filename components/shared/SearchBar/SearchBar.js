import React from 'react';
import styles from './SearchBar.module.css';

function SearchBar({ placeholder }) {
  return <input className={styles.search_bar} type="text" placeholder={placeholder} />;
}

export default SearchBar;