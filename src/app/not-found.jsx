import Link from 'next/link';
import React from 'react';
import { RiHome2Line ,RiTimeLine } from "react-icons/ri";

const NotFound = () => {
    return (
        <div className=' container  flex flex-col items-center my-auto space-y-5'>
            <h1 className='text-9xl font-semibold'>404</h1>
            <h2 className='text-6xl'>Page not found</h2>
            <Link href="/"> <button className='btn btn-neutral text-white font-bold text-xl'><RiHome2Line size={24} /> Back to Home</button> </Link>
        </div>
    );
};

export default NotFound;