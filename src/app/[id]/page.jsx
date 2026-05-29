'use client'
import React, { use, useContext } from 'react';
import { userContext } from '../user-provider';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { RiNotificationSnoozeLine, RiDeleteBin6Line } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";
import { PiChatTextBold } from "react-icons/pi";
import { LuVideo } from "react-icons/lu";
import { toast, ToastContainer } from 'react-toastify';
import NotFound from '../not-found';






const Profile = () => {
    const handleCheckIn = (check, value) => {
        toast.success(`${check} with ${value.name}`)
        
        // console.log(check, "With    ",value.name);
        setHistory(
            his => [
                ...his,
                {
                    activity: check,
                    people: value.name,
                    date: new Date(),
                }
            ]
        )
        // console.log(history);
        {
            check === "Call" ? setCount(prev => ({
                ...prev,
                call: prev.call + 1
            })) : check === "Text" ? setCount(prev => ({
                ...prev,
                text: prev.text + 1
            })) : setCount(prev => ({
                ...prev,
                video: prev.video + 1
            }))
        }
        // console.log(count);
        
    }
    const params = useParams();
    const id = params.id;
    
    const { friendsPromise, history, setHistory, count, setCount } = useContext(userContext);
    const friends = use(friendsPromise);
    const friend = friends.find(f => id == f.id);
    if(!friend) {
        return <NotFound></NotFound>;
    }
    const { name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } = friend;
    
    
    return (
        <div className='mx-auto text-center container md:px-30 space-y-4 p-10 md:p-20 bg-base-200'>
            <ToastContainer> </ToastContainer>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 '>
                {/* Profile info should be there  */}
                <div className='flex flex-col gap-4 '>

                    <div className='text-center space-y-2 bg-white p-5 rounded-lg shadow'>
                        <div className=''>
                            <Image src={picture} alt={name} width={80} height={80} className='rounded-full w-20 h-20 mx-auto' />
                        </div>
                        <h2 className='text-xl font-semibold'>{name}</h2>
                        <p className='text-[#64748B] text-xs'>{days_since_contact}d ago</p>

                        {
                            status === 'overdue' ? <div className='flex justify-center text-white font-medium'><p className='bg-[#EF4444] text-xs p-1.5 rounded-full'>Overdue</p></div> : status === 'almost due' ? <div className='flex justify-center text-white'><p className='bg-[#EFAD44] text-xs p-1.5 rounded-full font-medium'>Almost due</p></div> : <div className='flex justify-center text-white'><p className='bg-neutral text-xs p-2 rounded-full font-medium'>On-track</p></div>
                        }


                        <div className='flex gap-2 justify-center flex-wrap'>



                            {
                                tags.map((tag, index) => (
                                    <div key={index} className=''>
                                        <p className='bg-[#CBFADB] text-xs p-2 rounded-full text-[#244D3F] font-medium`'>{tag.toUpperCase()}</p>
                                    </div>
                                ))
                            }
                        </div>

                        <p className='italic text-[#64748B] font-medium'>&quot;{bio}&quot;</p>
                        <p className='text-[#64748B] text-sm'>Preferred: {email}</p>

                    </div>

                    <div className='flex flex-col gap-2'>
                        <button className='btn w-full bg-white'><RiNotificationSnoozeLine size={18} />
                            Snooze 2 Weeks</button>
                        <button className='btn w-full bg-white'> <FiArchive size={18} />
                            Archive</button>
                        <button className='btn w-full bg-white text-[#EF4444]'> <RiDeleteBin6Line size={18} />
                            Delete</button>
                    </div>
                </div>
                <div className=' col-span-2 space-y-6'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        <div className='text-center space-y-2 py-8 bg-white'>
                            <h2 className='text-3xl font-semibold'>{days_since_contact}</h2>
                            <p className='text-[#64748B] text-lg'>Days Since Contact</p>
                        </div>
                        <div className='text-center space-y-2 py-8 bg-white'>
                            <h2 className='text-3xl font-semibold'>{goal}</h2>
                            <p className='text-[#64748B] text-lg'>Goal (Days)</p>
                        </div>
                        <div className='text-center space-y-2 py-8 bg-white'>
                            <h2 className='text-3xl font-semibold'>{new Date(next_due_date).toLocaleDateString("en-US", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}</h2>
                            <p className='text-[#64748B] text-lg'>Next Due</p>
                        </div>
                    </div>

                    <div className='p-6 bg-white' >
                        <div className=' flex justify-between'>

                            <h4 className='text-xl font-medium'>Relationship Goal</h4>
                            <button className='btn'>Edit</button>
                        </div>
                        <p className='text-left text-lg '><span className='text-[#64748B] '>Connect every </span><span className='font-bold'>{goal} days</span></p>
                    </div>
                    <div className='p-6 bg-white space-y-4'>
                        <h3 className='text-xl font-medium text-left'>Quick Check-In</h3>
                        <div className='grid grid-cols-3 gap-4'>
                            <button onClick={() => handleCheckIn("Call", { name })} className='btn font-normal text-lg flex flex-col h-full py-4'> <LuPhoneCall size={26} />
                                <p className=''>Call</p></button>
                            <button onClick={() => handleCheckIn("Text", { name })} className='btn font-normal text-lg flex flex-col h-full py-4'> <PiChatTextBold size={26} />
                                <p className=''>Text</p></button>
                            <button onClick={() => handleCheckIn("Video", { name })} className='btn font-normal text-lg flex flex-col h-full py-4'> <LuVideo size={26} />
                                <p className=''>Video</p></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;