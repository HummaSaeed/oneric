'use client'
import React from 'react';
import Card from '../components/layout/Card/Card';
import Table from '../components/layout/Table/Table';
import profile from '../components/assets/icons/profile.png';
import currency from '../components/assets/icons/currency.png';
import trophe from '../components/assets/icons/trophe.png';
import backward from '../components/assets/icons/backward.png';
import forward from '../components/assets/icons/forward.png';

const Home = ({ currentRoute }) => {
  const data = [
    {text:'Verified Users',number:'132',bgcolor:'linear-gradient(90deg, #5885F9 0%, rgba(88, 133, 249, 0.78) 100%)',logo:profile},
    {text:'Unverified Users',number:'82',bgcolor:'linear-gradient(90deg, #39AD54 0%, rgba(55, 180, 84, 0.6) 100%)',logo:profile},
    {text:'Today New Registration',number:'0',bgcolor:'linear-gradient(90deg, #733BE4 0%, rgba(115, 59, 228, 0.6) 100%)',logo:profile},
    {text:'Total Active Players',number:'132',bgcolor:'linear-gradient(90deg, #C63A7E 0%, rgba(198, 58, 126, 0.6) 100%)',logo:profile},
    {text:'Total Cash Top Up',number:'19,750.00',bgcolor:'linear-gradient(90deg, #007AFF 0%, rgba(0, 122, 255, 0.58) 100%)',logo:currency},
    {text:'Current Month Cash TopUp',number:'0.00',bgcolor:'linear-gradient(90deg, #2C4864 0%, rgba(44, 72, 99, 0.6) 100%)',logo:currency},
    {text:'Today Cash TopUp',number:'0.00',bgcolor:'linear-gradient(90deg, #DF771F 0%, rgba(223, 119, 31, 0.6) 100%)',logo:currency},
    {text:'Total Withdrawal',number:'1795.00',bgcolor:'linear-gradient(90deg, #DF771F 0%, rgba(223, 119, 31, 0.6) 100%)',logo:currency},
    {text:'Pending Withdrawal',number:'0.00',bgcolor:'linear-gradient(90deg, #DC3546 0%, rgba(220, 53, 70, 0.6) 100%)',logo:backward},
    {text:'Current Month Withdrawal',number:'0.00',bgcolor:'linear-gradient(90deg, #DA016A 0%, rgba(218, 1, 106, 0.6) 100%)',logo:forward},
    {text:"Today's contest",number:'75',bgcolor:'linear-gradient(90deg, #2C4864 0%, rgba(44, 72, 100, 0.6) 100%)',logo:forward},
    {text:'Upcoming Created Contest',number:'136',bgcolor:'linear-gradient(90deg, #007AFF 0%, rgba(0, 122, 255, 0.6) 100%)',logo:forward},
    {text:'Today Joined Contest',number:'0',bgcolor:'linear-gradient(90deg, #353A40 0%, rgba(53, 58, 64, 0.6) 100%)',logo:trophe}
  ];
  const todaydata = [
    {text:'Live Users',number:'132',bgcolor:'linear-gradient(90deg, #733BE4 0%, rgba(88, 133, 249, 0.78) 100%)',logo:profile},
    {text:'Left Users',number:'82',bgcolor:'linear-gradient(90deg, #DB3333 0%, rgba(218, 51, 51, 0.6) 100%)',logo:profile},
    {text:'Verified Users',number:'0',bgcolor:'linear-gradient(90deg, #24AC00 0%, rgba(36, 172, 0, 0.6) 100%)',logo:profile},
    {text:'Unverified Users',number:'132',bgcolor:'linear-gradient(90deg, #EEBD2F 0%, #E69A28 100%)',logo:profile},
    
  ];
  const rows = [
    [
      'Vitality T20 Blast 2023',
       'Middlesex',
       'Hampshire',
       'T20 at Radlett...',
       '2023-06-06 21:00:00',
       'completed',
       'Reviewing',
    ],
    [
      'Vitality T20 Blast 2023',
       'Middlesex',
       'Hampshire',
       'T20 at Radlett...',
       '2023-06-06 21:00:00',
       'completed',
       'Reviewing',
    ],
    [
      'Vitality T20 Blast 2023',
       'Middlesex',
       'Hampshire',
       'T20 at Radlett...',
       '2023-06-06 21:00:00',
       'completed',
       'Reviewing',
    ],
    [
      'Vitality T20 Blast 2023',
       'Middlesex',
       'Hampshire',
       'T20 at Radlett...',
       '2023-06-06 21:00:00',
       'completed',
       'Reviewing',
    ],
    
  ];
  return (
    <>
      <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent:'start'
    }}
  >
    
    <Card title={"Dashboard"} data={data}/>
    <Card title={"Today Report"} data={todaydata}/>
    <Table rows={rows} profileIcon={true} index={1} title={"Live Games"}/>
    <Table rows={rows} profileIcon={true} index={1} title={"Live Games"}/>
  </div>
  </>
  )
}

export default Home