import Image from 'next/image'
import {FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { TbRobot} from 'react-icons/tb'
import { FaBars } from 'react-icons/fa'
import Logo from '../../assets/logdark.png'
import { Card1 } from '../Cards/Card1'
import { Card2 } from '../Cards/Card2'
import { useState, useContext } from 'react'
import { ThemeContext } from '../../../pages'





export const Navbar = () => {

   const {setIsLit,isLit} = useContext(ThemeContext)

    const [isCard1, setIscard1] = useState(false);
    const [isCard2, setIscard2] = useState(false);
    
    return(
    <div className="fixed w-full z-[5]  sm:px-16 px-6 py-4 flex justify-center items-center shadow-none drop-shadow-sm dark:bg-slate-900 bg-slate-100 transition ease-in">
       <div className="flex  items-end 3xl:max-w-[1280px] w-full flex-row justify-between">
        <div className="relative md:w-[80px] md:h-[52px] w-[65px] h-[50px] dark:flex cursor-pointer py-1 mb-1 md:mb-0">
          <Image src={Logo} alt='ttt' className='w-[100%]  h-[100%]' />
        </div>
        <div className='md:flex hidden flex-1 justify-end  items-center py-4'>
            <div class="flex mr-8 ">
              <label onClick={() => setIsLit(!isLit)} for="checkbox" className=" shadow-md hover:shadow-xl  dark:shadow-inherit flex justify-between items-center min-w-[20px] h-5 w-5 bg-slate-200 dark:bg-slate-700 rounded-2xl p-1 relative label">
               { isLit ? 
                <span style={{'box-sizing':'border-box'},{'display':'inline-block'},{'overflow':'hidden'},{'width':'initial'},{'height':'initial'},{'background':'none'},{'opacity':1},{'border':0},{'margin':0},{'padding':0},{'position':'relative'},{'max-width':'100%'}}>
                  <span style={{'box-sizing':'border-box'},{'display':'block'},{'width':'initial'},{'height':'initial'},{'background':'none'},{'opacity':1},{'border':0},{'margin':0},{'padding':0},{'max-width':'100%'}}>
                    <img style={{'display':'block'},{'max-width':'100%'},{'width':'initial'},{'height':'initial'},{'background':'none'},{'opacity':1},{'border':0},{'margin':0},{'padding':0}} alt='ddd'  src="/download.svg"/>
                  </span>
                  <img alt="moon" src="/suni.png" decoding="async" data-nimg="intrinsic" style={{'position':'absolute'},{'top':0},{'left':0},{'bottom':0},{'right':0},{'box-sizing':'border-box'},{'padding':0},{'border':'none'},{'margin':0},{'display':'block'},{'width':0},{'height':0},{'min-width':'100%'},{'max-width':'100%'},{'min-height':'100%'},{'max-height':'100%'},{'object-fit':'contain'}} />
                </span>
                :
                <span style={{'box-sizing':'border-box'},{'display':'inline-block'},{'overflow':'hidden'},{'width':'initial'},{'height':'initial'},{'background':'none'},{'opacity':1},{'border':0},{'margin':0},{'padding':0},{'position':'relative'},{'max-width':'100%'}}>
                  <span style={{'box-sizing':'border-box'},{'display':'block'},{'width':'initial'},{'height':'initial'},{'background':'none'},{'opacity':1},{'border':0},{'margin':0},{'padding':0},{'max-width':'100%'}}>
                    <img style={{'display':'block'},{'max-width':'100%'},{'width':'initial'},{'height':'initial'},{'background':'none'},{'opacity':1},{'border':0},{'margin':0},{'padding':0}} alt='ddd'  src="/download.svg"/>
                  </span>
                  <img alt="sun" src="/sun.png" decoding="async" data-nimg="intrinsic" style={{'position':'absolute'},{'top':0},{'left':0},{'bottom':0},{'right':0},{'box-sizing':'border-box'},{'padding':0},{'border':'none'},{'margin':0},{'display':'block'},{'width':0},{'height':0},{'min-width':'100%'},{'max-width':'100%'},{'min-height':'100%'},{'max-height':'100%'},{'object-fit':'contain'}} />
                </span> 
               }
              </label>
            </div>
            <div className="relative flex justify-center items-center flex-row  mr-10">
              <p className="font-poppins font-normal dark:text-[#969BA5] text-pro-w-black dark:hover:text-white hover:text-[#969BA5] text-[16px] leading-[22px] cursor-pointer">Courses</p>
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
          <label onClick={() => setIsLit(!isLit)} for="checkbox" className=" shadow-md hover:shadow-xl  dark:shadow-inherit flex justify-between items-center min-w-[20px] h-5 w-5 bg-slate-200 dark:bg-slate-700 rounded-2xl p-1 relative label">
               { isLit ? 
                <span style={{'box-sizing':'border-box'},{'display':'inline-block'},{'overflow':'hidden'},{'width':'initial'},{'height':'initial'},{'background':'none'},{'opacity':1},{'border':0},{'margin':0},{'padding':0},{'position':'relative'},{'max-width':'100%'}}>
                  <span style={{'box-sizing':'border-box'},{'display':'block'},{'width':'initial'},{'height':'initial'},{'background':'none'},{'opacity':1},{'border':0},{'margin':0},{'padding':0},{'max-width':'100%'}}>
                    <img style={{'display':'block'},{'max-width':'100%'},{'width':'initial'},{'height':'initial'},{'background':'none'},{'opacity':1},{'border':0},{'margin':0},{'padding':0}} alt='ddd'  src="/download.svg"/>
                  </span>
                  <img alt="moon" src="/suni.png" decoding="async" data-nimg="intrinsic" style={{'position':'absolute'},{'top':0},{'left':0},{'bottom':0},{'right':0},{'box-sizing':'border-box'},{'padding':0},{'border':'none'},{'margin':0},{'display':'block'},{'width':0},{'height':0},{'min-width':'100%'},{'max-width':'100%'},{'min-height':'100%'},{'max-height':'100%'},{'object-fit':'contain'}} />
                </span>
                :
                <span style={{'box-sizing':'border-box'},{'display':'inline-block'},{'overflow':'hidden'},{'width':'initial'},{'height':'initial'},{'background':'none'},{'opacity':1},{'border':0},{'margin':0},{'padding':0},{'position':'relative'},{'max-width':'100%'}}>
                  <span style={{'box-sizing':'border-box'},{'display':'block'},{'width':'initial'},{'height':'initial'},{'background':'none'},{'opacity':1},{'border':0},{'margin':0},{'padding':0},{'max-width':'100%'}}>
                    <img style={{'display':'block'},{'max-width':'100%'},{'width':'initial'},{'height':'initial'},{'background':'none'},{'opacity':1},{'border':0},{'margin':0},{'padding':0}} alt='ddd'  src="/download.svg"/>
                  </span>
                  <img alt="sun" src="/sun.png" decoding="async" data-nimg="intrinsic" style={{'position':'absolute'},{'top':0},{'left':0},{'bottom':0},{'right':0},{'box-sizing':'border-box'},{'padding':0},{'border':'none'},{'margin':0},{'display':'block'},{'width':0},{'height':0},{'min-width':'100%'},{'max-width':'100%'},{'min-height':'100%'},{'max-height':'100%'},{'object-fit':'contain'}} />
                </span> 
               }
          </label>
          <div className='relative mt-2 w-9 dark:invert '>
            <FaBars className='w-[90%] h-[90%]' /> 
          </div>
        </div>
        
       </div>
    </div>
    )
}
