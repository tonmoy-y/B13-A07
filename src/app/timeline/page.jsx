'use client'
import React, { useContext, useState } from 'react';
import { userContext } from '../user-provider';
import ShowTimeline from '@/components/ShowTimeline';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';


const Timeline = () => {
    const { history} = useContext(userContext);
    const [showHistory, setShowHistory] = useState(history);
    const handleFilter = (value) => {
        document.activeElement.blur();
         setShowHistory(
        history.filter(his => his.activity === value)
    );
    }
    return (
        <>

        <div className='mx-auto container md:px-30 space-y-4 p-10 md:p-20 bg-base-200'>
            <h2 className='text-5xl font-bold'>Timeline</h2>

            {/* <h2 className='text-4xl mx-auto text-center' >Time line is coming soon</h2> */}
            {
                history.length === 0 ? <div className='p-8 bg-white rounded-lg shadow'> Connect with someone to get Timeline </div> :
            
            <div className=' space-y-4'>

                <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">Filter timeline </div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><button onClick={() => handleFilter('Call')} >Call</button></li>
    <li><button onClick={() => handleFilter('Text')} >Text</button></li>
    <li><button onClick={() => handleFilter('Video')} >Video</button></li>
  </ul>
</div>
                   {
                       showHistory.map((his, index) => (
                           <ShowTimeline key={index} his={his}>
                           
                        </ShowTimeline>
                    ))
                    
                }
            </div>
            }
        </div>

                </>
    );
};

export default Timeline;