export const Gain = () => {
    return(
    <div className="dark:bg-slate-900 bg-slate-100">
        <div className="flex justify-center items-center sm:p-16 xs:p-8 px-6 py-12">
            <div className="flex justify-center items-center 3xl:max-w-[1280px] w-full flex-col">
                <h1 style={{'opacity':1},{'transform': 'none'}} className="font-poppins dark:text-white text-pro-w-black font-bold sm:text-[48px] sm:leading-[52px] text-[30px] leading-[36px] xs:tracking-[-0.5%] tracking-[-0.25%] text-center">
                  Ditch Theory-Driven Courses 
                  <br /> 
                    and
                  <br className="md:block hidden"/> 
                  <span className="text-blue-300"> Enter the World </span>
                  of a 
                  <span className="text-blue-300"> True Developer</span>
                </h1>
                <div className="flex justify-center items-center flex-wrap mt-10">
                    <div className="flex-1 xs:min-w-[370px] m-2 sm:p-12 p-6 sm:rounded-[40px] rounded-[30px] dark:bg-pro-black-1 bg-pro-w-white hover:shadow-lg dark:hover:bg-pro-black-2 hover:bg-white dark:shadow-inherit shadow-pro-w-shadow2">
                        <div className="flex flex-col" style={{'opacity':1}}>
                            <div className="flex justify-center items-center bg-[#2190FF] xs:w-[70px] xs:h-[70px] w-[70px] h-[70px] rounded-full bg-[#2190FF]">
                                <div className="relative rounded-full xs:w-[32px] xs:h-[32px] w-[28px] h-[28px]">
                                    <span ></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}