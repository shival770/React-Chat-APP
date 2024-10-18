import {BiLogOut} from 'react-icons/bi';
import React from 'react'
import useLogOut from '../hooks/useLogOut.js';

export default function LogOut() {
  const {loading , logOut} = useLogOut();

  return (
    <div className='mt-auto'>
        {
        !loading ? (<BiLogOut onClick={logOut} className='h-6 w-6 cursor-pointer text-white' />)
          :
          (
            <span className='loading loading-spinner'></span>
          )
     
        }
    </div>
  )
}
