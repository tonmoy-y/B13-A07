import React, { act } from 'react';
import callImage from '../assets/call.png';
import textImage from '../assets/text.png';
import videoImage from '../assets/video.png';
import Image from 'next/image';

const ShowTimeline = ({his}) => {
    console.log(his);
    const {activity, people , date} = his;
    let currentImage;
    if(activity === 'Call') {
        currentImage = callImage;
    }
    else if(activity === 'Text') {
         currentImage = textImage;
    }
    else {
         currentImage = videoImage;
    }
    return (
        <div>

        <div className='mx-auto container p-4 flex gap-4 items-center bg-white rounded-lg shadow-2xs'>
            <div>
                <Image src={currentImage} width={40} height={30} alt='call'></Image>
            </div>
            <div className='flex flex-col'>
                <p><span className='font-medium text-xl'>{activity}</span> <span className='text-lg text-[#64748B] '>with {people}</span></p>
                <p className='text-[#64748B] font-medium'>{new Date(date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                })}</p>
            </div>
        </div>
                </div>
    );
};

export default ShowTimeline;