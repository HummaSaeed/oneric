import React from 'react'
import TopHeader from '../components/shared/TopHeader/TopHeader';
import SubHeading from '../components/shared/SubHeading/SubHeading';
import ReusableTable from '../components/shared/ReusableTable/ReusableTable'
const headings = ['User Type Name', 'Permitted Modules', 'User Count','Action'];
const rows = [
  ['Administrator', "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at ex neque.Sed gravida urna in ex malesuada vel aliquet ligula dapibus. Nulla facilisi.Duis maximus libero non ex lacinia, vel suscipit velit varius.",1,""],
  ['User', 'Manage Page ad Team.',218,""],
   ['Administrator', "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at ex neque.Sed gravida urna in ex malesuada vel aliquet ligula dapibus. Nulla facilisi.Duis maximus libero non ex lacinia, vel suscipit velit varius.",1,""],
  ['User', 'Manage Page ad Team.',218,""],
  
];
const Roles_and_Responsibilities = () => {
  return (
     <div className="admin-container">
        <div style={{backgroundColor:'white',padding:10,minHeight:340}}>
    <TopHeader text="Roles/Permissions" />
    <SubHeading totalRecords={18} buttonText="Add User Type" />
    <ReusableTable headings={headings} rows={rows} />
     <p style={{textAlign:'center',marginTop:40,backgroundColor:'#f9f9f9'}}>No more record found</p>
    </div>
    </div>
  )
}

export default Roles_and_Responsibilities