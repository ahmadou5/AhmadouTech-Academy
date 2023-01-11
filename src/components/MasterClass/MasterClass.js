export const MasterClass = () => {
    return(
    <div className="dark:bg-slate-900 bg-slate-100">
        <div class="flex justify-center items-center sm:p-16 xs:p-8 px-6 py-12">
            <div class="flex justify-center items-center 3xl:max-w-[1280px] w-full">
                <div class="flex justify-center items-center w-full flex-col frame py-16 xs:px-8 px-0 3xl:max-w-[1000px] max-w-[900px] 3xl:min-h-[600px]" style={{'opacity': 1}, {'transform':'none'}}>
                    <div class="sm-box sm-box-1 dark:bg-slate-100 bg-slate-900"></div>
                    <div class="flex justify-center items-center text-center mb-5">
                        <p class="flex align-center font-poppins font-medium text-[14px] leading-[20px] uppercase tracking-[2px] orange_text-gradient">
                            <span class="font-semibold orange_text-gradient mr-2">JavaScript Mastery is Proud to Introduce</span>
                        </p>
                    </div>
                    <h2 class="font-poppins dark:text-white text-pro-w-black font-bold md:text-[64px] md:leading-[70px] text-[40px] leading-[46px] tracking-[-0.5%] text-center mt-4">
                       The JSM Pro
                       <br/>
                       <span class="text-gradient">Masterclass
                       <br/> Experience</span>
                    </h2>
                    <p className="sm:w-[80%] w-[100%] text-center dark:text-[#A3B3BC] text-[#5B6478] mt-10 font-poppins xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal">
                        Showcase your expertise to employers with exciting projects where you will build real-world applications and have your code reviewed by industry experts.
                    </p>
                    <p className="sm:w-[80%] w-[100%] text-center dark:text-[#A3B3BC] text-[#5B6478] mt-6 font-poppins xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal">
                      Learn how to position yourself for a rewarding career with weekly live Q&As, mock interviews, LinkedIn and resume/CV guidance, and more.
                    </p>
                    <div className="flex w-full sm:flex-row flex-col justify-center items-center mt-10">
                        <div className="flex flex-row justify-center items-center py-3 px-6 rounded-full cursor-pointer bg-[#2190ff] min-h-[48px]">
                            <button type="button"  className="font-poppins font-semibold text-[14px] leading-[16px] text-white">Learn More</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
