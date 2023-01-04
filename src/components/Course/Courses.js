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
            <div class="w-full flex justify-center items-center flex-wrap mt-10 ">
               <div class="course_card relative sm:w-[470px] w-full flex rounded-[20px] dark:bg-pro-black-2 bg-white flex-col xs:m-7 my-5 mx-0 cursor-pointer shadow-md hover:shadow-xl dark:shadow-inherit shadow-pro-w-shadow overflow-hidden" style={{'opacity': 1},{'transform':'none'}}>
                <div class="relative max-h-[328px] w-full overflow-hidden rounded-tl-[20px] rounded-tr-[20px] object-cover">
                    <span style={{'box-sizing':'border-box'},{'display':'inline-block'},{'overflow':'hidden'},{'width':'initial'},{'height':'initial'},{'background':'none'},{'opacity':1},{'border':0},{'margin':0},{'padding':0},{'position':'relative'},{'max-width':'100%'}}>
                        <span style={{'box-sizing':'border-box'},{'display':'block'},{'width':'initial'},{'height':'initial'},{'background':'none'},{'opacity':1},{'border':0},{'margin':0},{'padding':0},{'max-width':'100%'}}>
                            
                        </span>
                        <img alt="movie" src="/movie.png" decoding="async" data-nimg="intrinsic" style={{'position':'absolute'},{'top':0},{'left':0},{'bottom':0},{'right':0},{'box-sizing':'border-box'},{'padding':0},{'border':'none'},{'margin':'auto'},{'display':'block'},{'width':0},{'height':0},{'min-width':'100%'},{'max-width':'100%'},{'min-height':'100%'},{'max-height':'100%'}} />
                    </span>
                </div>
                <div class="flex w-full justify-start flex-col sm:p-10 p-6 course-desc">
                    <h3 class="font-poppins font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] dark:text-[#D0DFFF] text-[#3A4556]">Build an AI Powered Movie Application and Master React</h3>
                    <div class="my-5 flex flex-row justify-start items-center">
                        <div class="relative w-[16px] h-[16px]">
                            
                        </div>
                    </div>
                </div>
               </div>
            </div>
        </div>
    </div>
    )
}