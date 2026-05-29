import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const FriendCard = ({friend}) => {
    const { id, name, picture, days_since_contact, status, tags } = friend;
    return (
        <Link href={`${id}`} className='text-center space-y-2 bg-white p-5 rounded-lg shadow'>
            <ToastContainer />
           <div className=''>
            <Image src={picture} alt={name} width={80} height={80} className='rounded-full w-20 h-20 mx-auto'/>
           </div>
        <h2 className='text-xl font-semibold'>{name}</h2>
        <p className='text-[#64748B] text-xs'>{days_since_contact}d ago</p>
        <div className='flex gap-2 justify-center flex-wrap'>

        {
            tags.map((tag, index) => (
                <div key={index} className=''>
                    <p className='bg-[#CBFADB] text-xs p-1.5 rounded-full text-[#244D3F] font-medium`'>{tag.toUpperCase()}</p>
                </div>
            ))
        }
        </div>
        {
        status === 'overdue' ? <div className='flex justify-center text-white font-medium'><p className='bg-[#EF4444] text-xs p-1.5 rounded-full'>Overdue</p></div> : status === 'almost due' ? <div className='flex justify-center text-white'><p className='bg-[#EFAD44] text-xs p-1.5 rounded-full font-medium'>Almost due</p></div> : <div className='flex justify-center text-white'><p className='bg-neutral text-xs p-1.5 rounded-full font-medium'>On-track</p></div>
        }
        </Link>
    );
};

export default FriendCard;