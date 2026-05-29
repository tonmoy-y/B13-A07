import Image from 'next/image';
import React from 'react';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='bg-[#244D3F] text-white container px-30'>
            <div className='mx-auto text-center my-10 pt-10'>
                <h2 className='text-5xl'><span className='font-bold'>Keen</span>Keeper</h2>
            <p className='py-4'> Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <p className='font-medium text-xl mb-4'>Social Links</p>
            <div className='flex justify-center gap-4'>
                <Link href="https://www.facebook.com/" target='blank'> <Image src={facebook} alt="Facebook" width={40} height={40} ></Image></Link>

                <Link href="https://www.instagram.com/" target='blank'> <Image src={instagram} alt="instagram" width={40} height={40} ></Image></Link>

                <Link href="https://www.x.com/" target='blank'> <Image src={twitter} alt="twitter" width={40} height={40} ></Image></Link>
            </div>
            </div>
            <div className='flex justify-between opacity-60 pb-10'>
                <div><p>© 2026 KeenKeeper. All rights reserved.</p></div>
                <div className='flex gap-8'>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookies</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;