import Image from 'next/image'
import {FiChevronDown } from 'react-icons/fi'
import { TbRobot } from 'react-icons/tb'
import Logo from '../assets/tech1.png'
export const Navbar = () => {
    return(
    <div className="fixed w-full z-[5] sm:px-16 px-6 py-4 flex justify-center items-center shadow-none dark:bg-slate-900 bg-slate-100 transition ease-in">
       <div className="flex  items-end 3xl:max-w-[1280px] w-full flex-row justify-between">
        <div className="w-[18%] h-[60px]">
          <Image src={Logo} alt='ttt' className='w-[100%] h-[100%]' />
        </div>
        <div className='flex flex-1 justify-end  items-center'>
            <div className="relative flex justify-center items-center flex-row  mr-10">
              <p class="font-poppins font-normal dark:text-[#969BA5] text-pro-w-black dark:hover:text-white hover:text-[#969BA5] text-[16px] leading-[22px] cursor-pointer">Courses</p>
              <FiChevronDown className='ml-3 dark:text-[#969BA5] dark:hover:text-white hover:text-[#969BA5] text-[16px] leading-[22px] cursor-pointer"' />
            </div>
            <div className="relative flex justify-center items-center flex-row  mr-10">
              <p class="font-poppins font-normal dark:text-[#969BA5] text-pro-w-black dark:hover:text-white hover:text-[#969BA5] text-[16px] leading-[22px] cursor-pointer">Ask Your Couch</p>
              <TbRobot className='ml-3 dark:text-[#969BA5] dark:hover:text-white hover:text-[#969BA5] text-[16px] leading-[22px] cursor-pointer"' />
            </div>
            <div className="relative flex justify-center items-center flex-row  mr-10">
              <p class="font-poppins font-normal dark:text-[#969BA5] text-pro-w-black dark:hover:text-white hover:text-[#969BA5] text-[16px] leading-[22px] cursor-pointer">More</p>
              <FiChevronDown className='ml-3 dark:text-[#969BA5] dark:hover:text-white hover:text-[#969BA5] text-[16px] leading-[22px] cursor-pointer"' />
            </div>
        </div>
        
       </div>
    </div>
    )
}