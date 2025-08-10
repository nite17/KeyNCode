export default function Hero_text(){
    return(
        <>
         {/* Hero Text Section - Restore original design for large screens, responsive for mobile */}
         <div className="flex flex-col xl:flex-row md:space-x-20 xl:space-x-40  ml-4 xl:items-center xl:justify-center md:ml-10 mt-40 lg:mt-30 xl:mt-[400px] 2xl:mt-[480px] space-y-8 md:space-y-0">
            {/* From CLASSROOM Section */}
            <div className="flex flex-col items-center md:items-end text-center md:text-right 2xl:ml-50">
                <p className="text-white text-4xl  md:text-5xl lg:text-6xl xl:text-8xl font-nohemi md:pl-14">
                    From
                </p>
                <p className="text-white text-5xl sm:text-7xl md:text-8xl  font-nohemi">
                    CLASSROOM
                </p>
            </div>
            
            {/* Center Dot - Exactly centered */}
            <div className="hidden  border-4 rounded-full h-[30px] w-[30px] lg:ml-13  bg-white border-white self-center flex-shrink-0"></div>
            
            {/* To CAREER Section */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left ">
                <p className="text-white text-4xl  md:text-5xl lg:text-6xl xl:text-8xl font-nohemi ">
                    To
                </p>
                <p className="text-white text-5xl sm:text-7xl md:text-8xl  font-nohemi">
                    CAREER
                </p>
            </div>
        </div>
        
        {/* Description Text - Centered with minimal bottom spacing */}
        <p className="px-4 md:px-0 max-w-[900px]  2xl:py-4 font-poppins text-white text-sm md:text-base xl:leading-[36px] mx-auto xl:ml-[30%]  md:mt-2 ">
            Keyncoders partners with colleges to bridge the gap between education and employability. We integrate skill
            development and placement services into your curriculum, ensuring students graduate job-ready.
        </p>
        </>
    )
} 