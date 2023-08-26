'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Sidebar.module.css';
import Dropdown from '../../shared/Dropdown/Dropdown';
import Link from 'next/link'
import Image from 'next/image';
import home from '../../assets/icons/Home.png';
import backoffice from '../../assets/icons/back_office.png';
import user from '../../assets/icons/user.png';
import manager from '../../assets/icons/manager.png';
import reports from '../../assets/icons/report.png';
import store from '../../assets/icons/store.png';
import configuration from '../../assets/icons/configuration.png';
import board from '../../assets/icons/leader_board.png';

const Sidebar = ({ items, onClick }) => {
  return (
    <aside className={styles.sidebar}>
      <ul className={styles.sidebar_links}>
        {items.map((option, index) => (
              <Link
              href={option.path}
              key={index}
            >
          <li
            className={styles.dropdown_item}
          
          >
            <Image src={option.source} className={styles.icon} alt="" />
            {option.label}
            <div className={styles.arrowButton}></div>
          </li>
          </Link>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
