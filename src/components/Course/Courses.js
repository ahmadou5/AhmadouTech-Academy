import { CourseCard } from "../Cards/CourseCard"

export const Courses = () => {
    return(
    <div className="flex justify-center items-center sm:p-16 xs:p-8 px-6 py-12 dark:bg-slate-900 bg-slate-100">
        <div class="flex justify-center items-center 3xl:max-w-[1280px] w-full flex-col">
            <span class="hash-span" id="explorecourses">&nbsp;</span>
            <div class="flex flex-col items-center" style={{opacity: 1} , {transform: 'none'}}>
               <h2 class="font-poppins dark:text-white text-pro-w-black font-bold sm:text-[48px] sm:leading-[52px] text-[30px] leading-[36px] xs:tracking-[-0.5%] tracking-[-0.25%] text-center">
                   Comprehensive 
                   <span class="text-[#2190ff]"> Project-Based</span>
                   Courses 
                   <br class="sm:block hidden"></br>
                   to Help You Become a 
                   <span class="text-[#2190ff]"> JavaScript Master</span>
               </h2>
               <p class="font-poppins xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal sm:w-[75%] w-[100%] text-center dark:text-[#A3B3BC] text-[#5B6478] mt-5">
                  Want to master React.js or create a stunning Web 3.0 blockchain app? 
                  Join other professional developers inside Filmpire where you ll build
                   a Netflix clone streaming app or NFT Marketplace where you ll develop
                    Cryptoket, a fully-functioning NFT platform.
               </p>
            </div>
            <div class="w-full flex justify-center items-center flex-wrap  mt-10 ">
               <CourseCard />
               <CourseCard />
               <CourseCard />
            </div>
        </div>
    </div>
    )
}