import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FiCalendar } from 'react-icons/fi';

const DateTimePicker = ({selectedDate,handleDateChange}) => {
    
  return (
    <div>   <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        dateFormat="MMMM d, yyyy h:mm aa"
        placeholderText="YYYY/MM/DD"
        customInput={<CustomInput />}
      /></div>
  )
}
const CustomInput = ({ value, onClick }) => (
   
  <button className="custom-input" onClick={onClick}>
    <span>{value}</span>
    <FiCalendar className="calendar-icon" />
  </button>
  
);

export default DateTimePicker