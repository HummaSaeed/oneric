import React from 'react'
import TopHeader from '../components/shared/TopHeader/TopHeader';
import SubHeading from '../components/shared/SubHeading/SubHeading';
import ReusableTable from '../components/shared/ReusableTable/ReusableTable'
const headings = ['Title', 'Text', 'Date','Type of Message','Sent Status', 'Status','Action'];
const rows = [
  ['India vs Pakistan Battle ship to finale', "Match is live and make your team fast.Join now in multiple contest and unlock your victory","2023-05-04 12:35:43","Push Or Normal","completed","","..."],
   ['India vs Pakistan ', "Match is live ","2023-05-04 12:35:43","Push Or Normal","completed","","..."],
  ['India vs Pakistan Battle', "Match is live and make your team fast","2023-05-04 12:35:43","Push Or Normal","completed","","..."],
   ['India vs Pakistan ', "Match is live ","2023-05-04 12:35:43","Push Or Normal","completed","","..."],
  ['India vs Pakistan Battle ship to finale', "Match is live and make your team fast.Join now in multiple contest and unlock your victory","2023-05-04 12:35:43","Push Or Normal","completed","","..."],
   ['India vs Pakistan ', "Match is live ","2023-05-04 12:35:43","Push Or Normal","completed","","..."],
  ['India vs Pakistan Battle', "Match is live and make your team fast","2023-05-04 12:35:43","Push Or Normal","completed","","..."],
   ['India vs Pakistan ', "Match is live ","2023-05-04 12:35:43","Push Or Normal","completed","","..."],
  
];

const BroadCastScheduling = () => {
  return (
   <div className="admin-container">
        <div style={{backgroundColor:'white',padding:10,minHeight:340}}>
    <SubHeading totalRecords={18} buttonText="Add User Type" />
    <ReusableTable headings={headings} rows={rows} />
     <p style={{textAlign:'center',marginTop:40,backgroundColor:'#f9f9f9'}}>No more record found</p>
    </div>
    </div>
  )
}

export default BroadCastScheduling