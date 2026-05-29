'use client'
import React, { useContext } from 'react';
import { userContext } from '../user-provider';
import ShowTimeline from '@/components/ShowTimeline';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';


const Timeline = () => {
      const { history} = useContext(userContext);
    return (
        <>

        <div className='mx-auto container md:px-30 space-y-4 p-10 md:p-20 bg-base-200'>
            <h2 className='text-5xl font-bold'>TImeline</h2>
            {/* <h2 className='text-4xl mx-auto text-center' >Time line is coming soon</h2> */}
            <div className=' space-y-4'>
                   {
                       history.map((his, index) => (
                           <ShowTimeline key={index} his={his}>
                           
                        </ShowTimeline>
                    ))
                    
                }
            </div>
        </div>

                </>
    );
};

export default Timeline;