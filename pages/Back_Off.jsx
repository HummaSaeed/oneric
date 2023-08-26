import React from 'react';
import TopHeader from '../components/shared/TopHeader/TopHeader';
import SubHeading from '../components/shared/SubHeading/SubHeading';
import ReusableTable from '../components/shared/ReusableTable/ReusableTable'
const headings = ['User', 'Contact No', 'Role','Registered on','Last Login','Status','Action'];
const rows = [
  ['superadmin@gmail', '2875975439', 'Administrator','2023-05-03 12:23:45','2023-05-03 12:23:45','verified',""],
  
];

const Back_Off = () => {
  return (
    <div className="admin-container">
        <div style={{backgroundColor:'white',padding:10,minHeight:340}}>
    <TopHeader text="Manage staff" />
    <SubHeading totalRecords={1} buttonText="Add Staff" />
    <ReusableTable headings={headings} rows={rows} />
     <p style={{textAlign:'center',marginTop:40,backgroundColor:'#f9f9f9'}}>No more record found</p>
    </div>
   
  </div>
  )
}

export default Back_Off