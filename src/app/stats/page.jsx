'use client'
import React, { useContext } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { userContext } from '../user-provider';




const StatsPage = () => {
    const { count } = useContext(userContext);
    const {call, text , video} = count;
    const callColor = '#0088FE';
    const textColor = '#00C49F';
    const videoColor = '#FFBB28';
    const data = [
        { label: 'Call', value: call, color: callColor },
        { label: 'Text', value: text, color: textColor },
        { label: 'Video', value: video, color: videoColor },
  
    ];
    
    const settings = {
        margin: { right: 5 },
        width: 200,
        height: 200,
        hideLegend: true,
    };
    return (
        <div className='mx-auto container md:px-30 space-y-4 p-10 md:p-20 bg-base-200'>
            <h2 className='text-4xl mx-auto text-left font-bold'>Friendship Analytics</h2>
            <div className='p-8 bg-white rounded-lg shadow'>
                <h2 className='text-xl font-medium mb-6'>By Interaction Type</h2>
               <PieChart
      series={[{ innerRadius: 80, outerRadius: 100, data }]}
      {...settings}
      />
      <div className='flex gap-6 justify-center mt-8'>
        <div className='flex items-center gap-1'>

        <div className={`w-3 h-3 bg-[#0088FE]  rounded-full`}> </div>
        <p>Text</p>
        </div>
        <div className='flex items-center gap-1'>

        <div className={`w-3 h-3 bg-[#00C49F]  rounded-full`}> </div>
        <p>Call</p>
        </div>
        <div className='flex items-center gap-1'>

        <div className={`w-3 h-3 bg-[#FFBB28]  rounded-full`}> </div>
        <p>Video</p>
        </div>
      </div>
      </div>
        </div>
    );
};

export default StatsPage;