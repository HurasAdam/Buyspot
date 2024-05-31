import React from 'react';
import Logo from "../../assets/logo.png";
import { IoMdSearch } from 'react-icons/io';
import { FaCartShopping } from 'react-icons/fa6';
import DarkMode from './DarkMode';

const Navbar:React.FC = () => {
  return (
    <nav className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
{/* upper navbar */}
<div className='bg-primary/40 py-2 '>
    <div className='container flex justify-between items-center'>
        <div>
            <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>

                <img 
                className='w-10 uppercase'
                src={Logo} 
                alt="logo" />
                Shopsy
                </a>
        </div>
    {/* SEARCHBAR ORDER BTN */}
    <div className='flex justify-between intems-center gap-4'>
        <div className='relative group hidden sm:block '>
            <input 
            className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 
            rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary' 
            type="text" 
            placeholder='search' />
            <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'/>
        </div>
    </div>

    {/* Order BUTTON */}
    <button 
    onClick={()=> alert("Ordering not avalible yet")} 
    className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
        <span className='group-hover:block hidden transition-all duration-200'>Order</span>
        <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer '/>
    </button>
  {/* DARKMODE SWITCH */}
 <div>
    <DarkMode/>
 </div>
    </div>
</div>
{/* lower navbar */}
<div></div>
    </nav>
  )
}

export default Navbar