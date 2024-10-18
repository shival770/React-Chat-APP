import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../hooks/useGetMessages';
import MessageSkeleton from './MessageSkeleton';
import useListenMessage from '../hooks/useListenMessage';


const Messages = () => {
  const {messages , loading} = useGetMessages();
  useListenMessage();
  const lastMessageRef = useRef();
  console.log(messages)


  useEffect(()=>{
    lastMessageRef.current?.scrollIntoView({behavior : "smooth"})
  },[messages])
  return (
    <div className='flex-1 overflow-auto  px-4'>
    {
      !loading && messages.length > 0 && (
        messages.map((message)=>
          <div key={message._id} ref={lastMessageRef}>
          <Message message={message} />

          </div>

        )
      )
    }
    {loading && [...Array(3)].map((_ , idx)=> <MessageSkeleton key={idx} />)} 
    {!loading && messages.length == 0 && (
      <p className='text-center text-white'>Send a message to start the conversation</p>
    )}
    
    </div>
  )
}

export default Messages