import { useState } from 'react';
import {IoSearchSharp} from 'react-icons/io5';
import useConversation from '../zustand/useConversation.js';
import useGetConversation from '../hooks/useGetConversation.js';
import {toast} from 'react-hot-toast';
const SearchInput = () => {
    const [search , setSearch] = useState('');
    const {selectedConversation , setSelectedConversation} = useConversation();
    const {conversations} = useGetConversation();
    const handleOnSubmit =  (e) => {
        e.preventDefault();
        if(!search) return ; 
        if(search.length < 3) return toast.error('Search term must be atleast 3 characters long.');
        const conversation = conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()));

        if(conversation){
            setSelectedConversation(conversation)
            setSearch('');
        }else{
            toast.error('No such user found!')
        }
    }   
    return (
        <form onSubmit={handleOnSubmit} className="flex items-center gap-2">
            <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search..." className="input input-bordered rounded-3xl" />
            <button className="btn btn-circle bg-sky-500 text-white">
                <IoSearchSharp className='h-6 w-6 outline-none' />
            </button>
        </form>
    );
}

export default SearchInput ; 