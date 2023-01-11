export const CourseCard = () => {
    return(
    <div>
        <div class="course_card relative sm:w-[470px] w-full flex rounded-[20px] dark:bg-pro-black-2 bg-white flex-col xs:m-7 my-5 mx-0 cursor-pointer shadow-md hover:shadow-xl dark:shadow-inherit shadow-pro-w-shadow overflow-hidden ml-2 mr-2" style={{'opacity': 1},{'transform':'none'}}>
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
                            <span style={{'box-sizing':'border-box'},{'display':'inline-block'},{'overflow':'hidden'},{'width':'initial'},{'height':'initial'},{'background':'none'},{'opacity':1},{'border':0},{'margin':0},{'padding':0},{'position':'relative'},{'max-width':'100%'}}>
                               <img alt="full_star" src="/star.svg" decoding="async" data-nimg="intrinsic" style={{'position':'absolute'},{'top':0},{'left':0},{'bottom':0},{'right':0},{'box-sizing':'border-box'},{'padding':0},{'border':'none'},{'margin':'auto'},{'display':'block'},{'width':0},{'height':0},{'min-width':'100%'},{'max-width':'100%'},{'min-height':'100%'},{'max-height':'100%'},{'object-fit':'contain'}} />
                            </span>
                        </div>
                        <div class="relative w-[16px] h-[16px]">
                            <span style={{'box-sizing':'border-box'},{'display':'inline-block'},{'overflow':'hidden'},{'width':'initial'},{'height':'initial'},{'background':'none'},{'opacity':1},{'border':0},{'margin':0},{'padding':0},{'position':'relative'},{'max-width':'100%'}}>
                               <img alt="full_star" src="/star.svg" decoding="async" data-nimg="intrinsic" style={{'position':'absolute'},{'top':0},{'left':0},{'bottom':0},{'right':0},{'box-sizing':'border-box'},{'padding':0},{'border':'none'},{'margin':'auto'},{'display':'block'},{'width':0},{'height':0},{'min-width':'100%'},{'max-width':'100%'},{'min-height':'100%'},{'max-height':'100%'},{'object-fit':'contain'}} />
                            </span>
                        </div>
                        <div class="relative w-[16px] h-[16px]">
                            <span style={{'box-sizing':'border-box'},{'display':'inline-block'},{'overflow':'hidden'},{'width':'initial'},{'height':'initial'},{'background':'none'},{'opacity':1},{'border':0},{'margin':0},{'padding':0},{'position':'relative'},{'max-width':'100%'}}>
                               <img alt="full_star" src="/star.svg" decoding="async" data-nimg="intrinsic" style={{'position':'absolute'},{'top':0},{'left':0},{'bottom':0},{'right':0},{'box-sizing':'border-box'},{'padding':0},{'border':'none'},{'margin':'auto'},{'display':'block'},{'width':0},{'height':0},{'min-width':'100%'},{'max-width':'100%'},{'min-height':'100%'},{'max-height':'100%'},{'object-fit':'contain'}} />
                            </span>
                        </div>
                        <div class="relative w-[16px] h-[16px]">
                            <span style={{'box-sizing':'border-box'},{'display':'inline-block'},{'overflow':'hidden'},{'width':'initial'},{'height':'initial'},{'background':'none'},{'opacity':1},{'border':0},{'margin':0},{'padding':0},{'position':'relative'},{'max-width':'100%'}}>
                               <img alt="full_star" src="/star.svg" decoding="async" data-nimg="intrinsic" style={{'position':'absolute'},{'top':0},{'left':0},{'bottom':0},{'right':0},{'box-sizing':'border-box'},{'padding':0},{'border':'none'},{'margin':'auto'},{'display':'block'},{'width':0},{'height':0},{'min-width':'100%'},{'max-width':'100%'},{'min-height':'100%'},{'max-height':'100%'},{'object-fit':'contain'}} />
                            </span>
                        </div>
                        <div class="relative w-[16px] h-[16px]">
                            <span style={{'box-sizing':'border-box'},{'display':'inline-block'},{'overflow':'hidden'},{'width':'initial'},{'height':'initial'},{'background':'none'},{'opacity':1},{'border':0},{'margin':0},{'padding':0},{'position':'relative'},{'max-width':'100%'}}>
                               <img alt="full_star" src="/star.svg" decoding="async" data-nimg="intrinsic" style={{'position':'absolute'},{'top':0},{'left':0},{'bottom':0},{'right':0},{'box-sizing':'border-box'},{'padding':0},{'border':'none'},{'margin':'auto'},{'display':'block'},{'width':0},{'height':0},{'min-width':'100%'},{'max-width':'100%'},{'min-height':'100%'},{'max-height':'100%'},{'object-fit':'contain'}} />
                            </span>
                        </div>
                        <div class="flex flex-row justify-center items-center mt-1">
                            <p class="font-poppins xs:text-[16px] xs:leading-[22px] text-[14px] leading-[20px] font-normal dark:text-[#A3B3BC] text-[#5B6478] ml-2">4.7/5, based on 97 reviews</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}