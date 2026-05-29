'use client'
import Link from 'next/link';
import React from 'react';
import { RiHome2Line ,RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import { usePathname } from 'next/navigation';


const Navbar = () => {
    const path = usePathname();

    const navLinks = <> 
    <li><Link className={path === '/' ? ' btn btn-neutral text-white font-bold': 'btn btn-ghost'} href="/" > <RiHome2Line size={20} />
 Home </Link></li>
    <li><Link className={path === '/timeline' ? ' btn btn-neutral  text-white font-bold': 'btn btn-ghost'} href="/timeline"> <RiTimeLine size={20} />
 Timeline </Link></li>
    <li><Link className={path === '/stats' ? ' btn btn-neutral text-white font-bold': 'btn btn-ghost'} href="/stats"> <ImStatsDots size={20} />
 Stats </Link></li>
    
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {navLinks}
      </ul>
    </div>
    <Link href="/" className="btn btn-ghost text-2xl"><span className='-mr-1.5 font-bold'>Keen</span>Keeper</Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>

</div>
    );
};

export default Navbar;