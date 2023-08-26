import React from 'react'
import TopHeader from '../components/shared/TopHeader/TopHeader';
import SubHeading from '../components/shared/SubHeading/SubHeading';
import ReusableTable from '../components/shared/ReusableTable/ReusableTable'
const headings = ['CRON NAME CRICKET', 'Action'];
const rows = [
  ['Cricket Get & updates all upcoming matches Metric 100 & 1000', 'Update'],
  
];
const Crons = () => {
  return (
     <div style={{backgroundColor:'white',padding:10,minHeight:340}}>
     <ReusableTable headings={headings} rows={rows} />
     </div>

  )
}

export default Crons