import { FaYoutube } from "react-icons/fa"
export const Card2 = () => {
    return(
    <div className="absolute top-[20px] z-[2]">
        <div className="min-w-[270px] mt-8 flex justify-start flex-col rounded-md p-4 shadow-lg bg-slate-100 dark:shadow-slate-800 shadow-slate-300 dark:bg-slate-900">
            <div class="flex flex-row justify-start items-center cursor-pointer my-2">
                <FaYoutube />
                <p class="flex-1 font-poppins font-semibold dark:text-[#969BA5] text-pro-w-black dark:hover:text-white hover:text-[#969BA5] text-[12px] leading-[18px] ml-4">Useful YouTube Videos</p>
            </div>
            <div class="flex flex-row justify-start items-center cursor-pointer my-2">
                <FaYoutube />
                <p class="flex-1 font-poppins font-semibold dark:text-[#969BA5] text-pro-w-black dark:hover:text-white hover:text-[#969BA5] text-[12px] leading-[18px] ml-4">Useful YouTube Videos</p>
            </div>
            <div class="flex flex-row justify-start items-center cursor-pointer my-2">
                <FaYoutube />
                <p class="flex-1 font-poppins font-semibold dark:text-[#969BA5] text-pro-w-black dark:hover:text-white hover:text-[#969BA5] text-[12px] leading-[18px] ml-4">Useful YouTube Videos</p>
            </div>
        </div>
    </div>
    )
}