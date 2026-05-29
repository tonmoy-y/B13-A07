'use client'
import { userContext } from '@/app/user-provider';
import React, { use, useContext } from 'react';
import FriendCard from './FriendCard';


const Friends = () => {
    const {friendsPromise} = useContext(userContext);
        const friends = use(friendsPromise);
    return (
        <div className='mx-auto text-center container px-8 md:px-30 space-y-4 p-10'>
            <h2 className='text-left'>Your Friends</h2>
  
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {
                        friends.map(friend => (
                            <FriendCard key={friend.id} friend = {friend}> </FriendCard>
                        ) )
                }
            </div>
        </div>
    );
};

export default Friends;