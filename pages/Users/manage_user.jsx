import React, {useState} from 'react';
import TopHeader from '../../components/shared/TopHeader/TopHeader';
import SubHeading from '../../components/shared/SubHeading/SubHeading'
import CustomDropdown from '../../components/shared/Dropdown/Dropdown.jsx'
import ReusableTable from '../../components/shared/ReusableTable/ReusableTable'
const Manage_User = () => {

     const handleButtonClick = () => {
    console.log('Dropdown button clicked');
  };
  const headings = ['User', 'Contact No', 'Reffered','Registered on','onBoarding Type','Last Login','Status','Action'];
const rows = [
  ['superadmin@gmail', '2875975439', 'Administrator','2023-05-03 12:23:45','2023-05-03 12:23:45','verified',"..."],
];
  return (
    <div style={{padding:20}}>
    <TopHeader text="Manage users" />
    <SubHeading totalRecords={18} buttonText="" />
    <div style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between',flexWrap: "wrap"}}>
    <CustomDropdown text="verified" onClick={handleButtonClick} />
    <CustomDropdown text="Wallet Type" onClick={handleButtonClick} />
    <CustomDropdown text="Please Select" onClick={handleButtonClick} />
     <CustomDropdown text="Amount" onClick={handleButtonClick} />
    </div>
        <div style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between',flexWrap: "wrap"}}>
    <CustomDropdown text="Private Contest Name Display" onClick={handleButtonClick} />
    <CustomDropdown text="WithdrawalAccept" onClick={handleButtonClick} />
    <CustomDropdown text="Name,Email,Phone,Username" onClick={handleButtonClick} />
    </div>
    <div style={{marginTop:20}}>
    <ReusableTable headings={headings} rows={rows} profileIcon={true} index={0} statusIndex={1} />
    </div>
  </div>
  )
}

export default Manage_User