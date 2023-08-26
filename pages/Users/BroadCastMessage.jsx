"use client"
import React,{useState} from 'react';
import Image from 'next/image';
import { FiCircle } from 'react-icons/fi';
import styles from './user.module.css'
import Title from '../../components/shared/Title/Title'
import MessageBox from '../../components/shared/MessageBox/MessageBox'
import InputField from '../../components/shared/InputField/InputField'
import speaker from '../../components/assets/icons/speaker.png'
import TopHeader from '../../components/shared/TopHeader/TopHeader'
import SubHeader from '../../components/shared/SubHeader/SubHeader';
import CustomDropdown from '../../components/shared/Dropdown/Dropdown.jsx'

const BroadCastMessage = () => {
    const [name, setName] = useState('');
      const [msg,setmsg] = useState('');
        const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleMessageChange = (event) => {
    setmsg(event.target.value);
  };
      const handleButtonClick = () => {
    console.log('Dropdown button clicked');
  };
  return (
     <div>
     <TopHeader text="Broadcast Message" />
      <div className={styles.rect}>
       <Image src={speaker} alt="Speaker" className={styles.speakerImage}/>
       </div>
       <div className={styles.formcontainer}>
<SubHeader text={"Broadcast Way "}/>
     <label>
     Email
        <input
          type="radio"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
          style={{marginLeft:150}}
        />
        
      </label>
          <br />
      <label>
      Sms
        <input
          type="radio"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
          style={{marginLeft:160}}
        />
        
      </label>
      
           <br />
      <label>
      Notification
        <input
          type="radio"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
          style={{marginLeft:100}}
        />
        
      </label>
      <br />
       <Title text={"Type"}/>
       <CustomDropdown text="Please Select" onClick={handleButtonClick} />
       <Title text={"Send To"}/>
       <div style={{display:'flex',alignItems:'center',flexDirection:'row',width:'50%',justifyContent:'space-between',}}>
           <label>
      All user
        <input
          type="radio"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
        style={{marginLeft:20}}
        />
        
      </label>
          <label>
      Selected user
        <input
          type="radio"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
          style={{marginLeft:20}}
        />
        
      </label>
        </div>
        <Title text={"Title"}/>
           <InputField
        type="text"
        placeholder=""
        value={name}
        onChange={handleNameChange}
      />
      <Title text={"Message"}/>
       <MessageBox
        type="text"
        placeholder=""
        value={msg}
        onChange={handleMessageChange}
      />
         <button className={styles.action_button}>
         Send
        </button>
       </div>
 </div>
  )
}

export default BroadCastMessage