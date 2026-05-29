'use client'
import { userContext } from '@/app/user-provider';
import React, { use, useContext } from 'react';
import { IoAdd } from "react-icons/io5";


// const getFriendInfo = 

const Hero = () => {
    // const res = await fetch('/friends.json');
    // const friends = await res.json();
    // console.log(friends);
    const {friendsPromise} = useContext(userContext);
    const friends = use(friendsPromise);
    // console.log(friends);

    return (
        <div className='mx-auto text-center container px-8 md:px-30 space-y-4 pt-20'>
            <h2 className='text-4xl font-bold'>Friends to keep close in your life</h2>
            <p className='text-[##64748B] text-[16px] '>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.</p>
            <button className='btn btn-neutral text-white mt-4'><IoAdd size={20} className='text-white font-bold' />
 Add a Friend</button>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-8'>
                <div className='bg-white p-8'>
                    <h2 className='text-3xl font-semibold rounded-lg'>{friends.length}</h2>
                    <p>Total Friends</p>
                </div>
                <div className='bg-white p-8'>
                    <h2 className='text-3xl font-semibold rounded-lg'>{friends.filter(f => f.status === "on-track").length}</h2>
                    <p>On Track</p>
                </div>
                <div className='bg-white p-8'>
                    <h2 className='text-3xl font-semibold rounded-lg'>{friends.filter(f => f.status === "overdue").length}</h2>
                    <p>Need Attention</p>
                </div>
                <div className='bg-white p-8'>
                    <h2 className='text-3xl font-semibold rounded-lg'>12</h2>
                    <p>Interactions This Month</p>
                </div>
             
            </div>
            <hr  className='text-[#E9E9E9]'/>
        </div>
    );
};

export default Hero;