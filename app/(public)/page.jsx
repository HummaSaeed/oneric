'use client';
import { useRouter } from 'next/router';
import {useState} from 'react';
import Home from '../../pages/Home';
import Back_Off from '../../pages/Back_Off';
import Crons from '../../pages/Crons';
import MatchBroadCast from '../../pages/Users/MatchBroadCast';
import Manage_User from '../../pages/Users/manage_user';
import BroadCastScheduling from '../../pages/BroadCastScheduling'
import Roles_and_Responsibilities from '../../pages/Roles_and_Responsibilities';
import BroadCastMessage from '../../pages/Users/BroadCastMessage';
import PendingWithDraw from '../../pages/Users/PendingWithDraw';
export default async function Page({ params }) {
 
  return <div>
  <Home/>
    {/* <Back_Off/> */}
  </div>;
 
}
