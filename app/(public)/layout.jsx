'use client';
import '../../styles/globalsPublicLayout.scss';
import { useState } from 'react';
import { useRouter } from 'next/router';
import home from '../../components/assets/icons/home.png';
import backoffice from '../../components/assets/icons/back_office.png';
import user from '../../components/assets/icons/user.png';
import manager from '../../components/assets/icons/manager.png';
import reports from '../../components/assets/icons/report.png';
import store from '../../components/assets/icons/store.png';
import configuration from '../../components/assets/icons/configuration.png';
import board from '../../components/assets/icons/leader_board.png';
import Home from '../../pages/Home';
import Back_Off from '../../pages/Back_Off';
import Crons from '../../pages/Crons';
import MatchBroadCast from '../../pages/Users/MatchBroadCast';
import Manage_User from '../../pages/Users/manage_user';
import BroadCastScheduling from '../../pages/BroadCastScheduling';
import Roles_and_Responsibilities from '../../pages/Roles_and_Responsibilities';
import QueryWrapper from '@/components/shared/queryWrapper/queryWrapper';
import GlobalWrapper from '@/components/shared/globalWrapper/globalWrapper';
import Footer from '@/components/layout/Footer/Footer';
import Navbar from '../../components/layout/Navbar/Navbar';
import BroadCastMessage from '../../pages/Users/BroadCastMessage';
import PendingWithDraw from '../../pages/Users/PendingWithDraw';
import Sidebar from '../../components/layout/Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import bootstrap CSS

const dropdownOptions = [
  { label: 'Dashboard', path: '/dashboard', source: home, item: 'Item 1' },
  {
    label: 'Back offline',
    path: '/Back_Off',
    source: backoffice,
    item: 'Item 2',
  },
  { label: 'User', path: '/Crons', source: user, item: 'Item 3' },
  {
    label: 'Cricket Manager',
    path: '/contact',
    source: manager,
    item: 'Item 4',
  },
  { label: 'Cricket Reports', path: '/', source: reports, item: 'Item 5' },
  { label: 'Store Manager', path: '/about', source: store, item: 'Item 6' },
  {
    label: 'Configuration',
    path: '/services',
    source: configuration,
    item: 'Item 7',
  },
  { label: 'Leader Board', path: '/contact', source: board, item: 'Item 8' },
];

export default async function PrimaryLayout({children}) {
  const [selectedComponent, setSelectedComponent] = useState('Crons');
  const handleSidebarClick = (component) => {
    setSelectedComponent('Home');
  };
  return (
    <>
      <GlobalWrapper session={{ user: null }}>
        <div style={{ display: 'inline', width: '100%', height: 70 }}>
          <Navbar />
        </div>
        <QueryWrapper>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Sidebar items={dropdownOptions}/>
            <section style={{ width: '100%' }}>
             {children}
            </section>
          </div>
        </QueryWrapper>
      </GlobalWrapper>
    </>
  );
}
