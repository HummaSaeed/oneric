import React, { useState } from 'react';
import styles from './user.module.css';
import TopHeader from '../../components/shared/TopHeader/TopHeader';
import CustomDropdown from '../../components/shared/Dropdown/Dropdown.jsx'
import DateTimePicker from '../../components/shared/DateTimePicker/DateTimePicker'
const PendingWithDraw = () => {
   const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  }
  return (
    <div className={styles.pendingcontainer}>
    <div style={{height:300,width:'100%',backgroundColor:'white',marginLeft:40,}}>
    <TopHeader text="Pending Withdrawals" />
    <div style={{display:'flex',flexDirection:'row'}}>
      <CustomDropdown text="Please Select"  />
       <DateTimePicker
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    </div>
    </div>
    </div>
  )
}

export default PendingWithDraw