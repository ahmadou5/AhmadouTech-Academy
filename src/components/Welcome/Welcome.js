export const Welcome = () => {
    return(
    <div className="flex justify-center items-center sm:p-16 xs:p-8 px-6 py-12 dark:bg-slate-900 bg-slate-100">
        <div className="flex justify-center items-center 3xl:max-w-[1280px] w-full flex-col">
            <div className="flex flex-col items-center" style={{opacity:1}}>
                <h1 className="font-poppins dark:text-white text-pro-w-black font-bold sm:text-[48px] sm:leading-[52px] text-[30px] leading-[36px] xs:tracking-[-0.5%] tracking-[-0.25%] text-center">
                    Welcome to
                    <br class="md:hidden block"></br>
                    <span class="text-[#2190ff]"> AT Academy </span>
                </h1>
                <p class="font-poppins xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal xl:w-[65%] sm:w-[75%] w-[100%] text-center dark:text-[#A3B3BC] text-[#5B6478] mt-4">
                    Hands-on projects are the most practical way to learn a programming language
                    and build your portfolio. If you're tired of building "to-do" apps and learning theory,
                    JS Mastery Pro can help you solidify your knowledge and start taking on 
                    meaningful projects that will set the tone for your career.
                </p>
            </div>
            <div class="flex justify-center items-center 3xl:w-[80%] lg:w-[899px] w-full rounded-[20px] mt-12 overflow-hidden" >
                <video controls preload="none" poster="https://i.ibb.co/YkNcJZR/homepage-thumbnail-1.png" class="w-full">
                    <source src="https://player.vimeo.com/progressive_redirect/playback/715127251/ren…signature=dbbc617…"></source>
                </video>
            </div>

        </div>
    </div>
    )
}