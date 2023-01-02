import { FaYoutubeSquare, FaInstagramSquare } from "react-icons/fa"

export const Hero = () => {
    return(
    <div className="bg-slate-100 dark:bg-slate-900">
      <div className="flex justify-center items-center sm:px-16 px-6 sm:pb-16 xs:pb-8 pb-12 pt-6 hero-height overflow-x-hidden">
        <div className="flex justify-center items-center 3xl:max-w-[1280px] w-full pt-[98px] lg:flex-row flex-col">
            <div className="flex-1 flex flex-col justify-center items-start" style={{opacity: 1}}>
                <h1 className="font-poppins dark:text-white text-pro-w-black font-bold md:text-[64px] md:leading-[70px] text-[40px] leading-[46px] tracking-[-0.5%] text-left">
                    Launch Your Dev 
                    <br className="sm:block hidden"></br>
                    Career With 
                    <br className="sm:block hidden"></br>
                    <span className="text-[#2190ff]">Project-Based</span>
                    <br className="sm:block hidden"></br>
                    Coaching
                </h1>
                <p className="fonts-poppins xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal dark:text-[#A3B3BC] text-[#5B6478] mt-5 mb-10">
                  Showcase your skills with practical 
                  development experience and land the coding
                  career of your dreams
                </p>
                <a href="/" >
                    <div className='flex flex-row justify-center items-center py-3 px-6 rounded-full cursor-pointer bg-[#2190ff] min-h-[48px]'>
                       <button type="button" className="font-poppins font-semibold text-[14px] leading-[16px] text-white">Explore Courses</button>
                    </div>
                </a>
                <div className="flex justify-start items-center xs:flex-row flex-col w-full mt-14">
                    <div className="xs:mr-5 mr-0 xs:mb-0 mb-10">
                        <div className="flex justify-start items-start flex-row">
                            <div className="flex justify-center items-center flex-row mr-4">
                                <FaYoutubeSquare className="text-red-600" />
                                <p className="font-poppins xs:text-[16px] xs:leading-[22px] text-[14px] leading-[20px] font-normal dark:text-[#A3B3BC] text-[#5B6478] flex flex-1 ml-2">200k+</p>
                            </div>
                            <div className="flex justify-center items-center flex-row mr-4">
                                <FaInstagramSquare className="text-purple-400"/>
                                <p className="font-poppins xs:text-[16px] xs:leading-[22px] text-[14px] leading-[20px] font-normal dark:text-[#A3B3BC] text-[#5B6478] flex flex-1 ml-2">200k+</p>
                            </div>
                        </div>
                        <p className="font-poppins xs:text-[16px] xs:leading-[22px] text-[14px] leading-[20px] font-normal dark:text-[#A3B3BC] text-[#5B6478] mt-4 xs:text-left text-center">Global Supporters</p>
                    </div>
                </div>
            </div>
            <div className=" flex-1 w-full flex lg:justify-center justify-end items-center lg:ml-10 ml-0 lg:mt-0 mt-10">
                <div className="relative lg:w-full h-full w-[90%] object-cover">
                    nam zamu tashi
                </div>
            </div>
        </div>
      </div>
    </div>
    )
}