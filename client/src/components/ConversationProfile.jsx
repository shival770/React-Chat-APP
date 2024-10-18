
import React from 'react'
import useConversation from '../zustand/useConversation.js'
import { useSocketContext } from '../context/SocketContext.jsx'

export default function ConversationProfile({conversation , emoji , lastIdx}) {

  const {onlineUsers} = useSocketContext();
  const {selectedConversation , setSelectedConversation} = useConversation()
  console.log(selectedConversation)
  const isSelected = selectedConversation?._id === conversation._id
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <div className={`flex gap-2 p-1 items-center  cursor-pointer ${isSelected ? "bg-sky-500" : ""}`} 
     onClick={()=>setSelectedConversation(conversation)} >
        <div className={`avatar ${isOnline ? 'online' : ''}`}>
            <div className='w-12 rounded-full'>
                <img src= {conversation.profilePic}
                alt='user avator'
                
                 />
            </div>
        </div>
        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-200'>{conversation.fullName}</p>
                <span className='text-xl'>{emoji}</span>
            </div>
        </div>
       
        {!lastIdx &&  <div className='divider my-0 py-0 h-2  bg-white' />}
    </div>
  )
}
