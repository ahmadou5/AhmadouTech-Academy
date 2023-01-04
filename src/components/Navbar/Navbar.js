import Image from 'next/image'
import {FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { TbRobot} from 'react-icons/tb'
import { FaBars } from 'react-icons/fa'
import Logo from '../../assets/logdark.png'
import { Card1 } from '../Cards/Card1'
import { Card2 } from '../Cards/Card2'
import { useState } from 'react'



export const Navbar = () => {

    const [isCard1, setIscard1] = useState(false);
    const [isCard2, setIscard2] = useState(false);
    
    return(
    <div className="fixed w-full z-[5]  sm:px-14 px-6 py-4 flex justify-center items-center shadow-none drop-shadow-sm dark:bg-slate-900 bg-slate-100 transition ease-in">
       <div className="flex  items-end 3xl:max-w-[1280px] w-full flex-row justify-between">
        <div className="relative md:w-[80px] md:h-[52px] w-[65px] h-[50px] dark:flex cursor-pointer py-1 mb-1 md:mb-0">
          <Image src={Logo} alt='ttt' classNamSe='w-[100%]  h-[100%]' />
        </div>
        <div className='md:flex hidden flex-1 justify-end items-center py-4'>
            <div class="flex mr-8">
              <input type="checkbox" class="checkbox" id="checkbox">
                
              </input>
              <label for="checkbox" class="flex justify-between items-center min-w-[32px] h-4 bg-pro-black-2 rounded-2xl p-1 relative label">
               
              </label>
            </div>
            <div className="relative flex justify-center items-center flex-row  mr-10">
              <p class="font-poppins font-normal dark:text-[#969BA5] text-pro-w-black dark:hover:text-white hover:text-[#969BA5] text-[16px] leading-[22px] cursor-pointer">Courses</p>
              {
                isCard2 ?  
                <FiChevronUp onClick={() => {setIscard2(false)}}  className='ml-3 dark:text-[#969BA5] dark:hover:text-white hover:text-[#969BA5] text-[16px] leading-[22px] cursor-pointer' />
                 :
                <FiChevronDown  onClick={() => {setIscard2(true); setIscard1(false)} } className='ml-3 dark:text-[#969BA5] dark:hover:text-white hover:text-[#969BA5] text-[16px] leading-[22px] cursor-pointer' />
              }
              {isCard2 &&<Card2 />}
            </div>
            <div className="relative flex justify-center items-center flex-row  mr-10">
              <p className="font-poppins font-normal dark:text-[#969BA5] text-pro-w-black dark:hover:text-white hover:text-[#969BA5] text-[16px] leading-[22px] cursor-pointer">Ask Your Couch</p>
              <TbRobot className='ml-3 dark:text-[#969BA5] dark:hover:text-white hover:text-[#969BA5] text-[16px] leading-[22px] cursor-pointer"' />
            </div>
            <div className="relative flex justify-center items-center flex-row  mr-10">
              <p className="font-poppins font-normal dark:text-[#969BA5] text-pro-w-black dark:hover:text-white hover:text-[#969BA5] text-[16px] leading-[22px] cursor-pointer">More</p>
              {
                isCard1 ?  
                <FiChevronUp onClick={() => {setIscard1(false)}}  className='ml-3 dark:text-[#969BA5] dark:hover:text-white hover:text-[#969BA5] text-[16px] leading-[22px] cursor-pointer' />
                 :
                <FiChevronDown  onClick={() => {setIscard1(true); setIscard2(false)}} className='ml-3 dark:text-[#969BA5] dark:hover:text-white hover:text-[#969BA5] text-[16px] leading-[22px] cursor-pointer' />
              }
              {isCard1 && <Card1 />}
            </div>
        </div>
        <div class="md:hidden flex justify-center items-center py-4 relative">
          <div className='relative mt-2 w-9 dark:invert '>
            <FaBars className='w-[90%] h-[90%]' /> 
          </div>
        </div>
        
       </div>
    </div>
    )
}