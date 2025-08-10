import box_video from '../assets/box.mp4'

export default function Second(){
    return(
        <>
         {/* Second Section - Full width on all screens */}
         <div className="absolute  mt-[100vh]  bg-white min-h-screen pt-8 lg:pt-16 w-full left-0 overflow-x-hidden ">
                {/* Header Section - Fixed responsive */}
                <div className="flex flex-col md:flex-row items-start md:items-center px-4 md:px-8 lg:ml-[10vh] xl:ml-[20vh] space-y-4 md:space-y-0 md:space-x-4">
                    <div className="border-4 md:border-6 border-orange-500 h-16 md:h-24 w-1 flex-shrink-0"></div>
                    <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[86px] leading-tight xl:leading-[86px] break-words">
                        WHY PARTNER WITH US
                    </h2>
                </div>
                
                {/* Description - Original design */}
                <p className="mt-6 md:mt-4 text-black max-w-6xl xl:max-w-[1400px] font-cabinet leading-relaxed xl:leading-[1.5] text-base md:text-lg xl:text-lg px-4 md:px-8 lg:ml-[10vh] xl:ml-[20vh] tracking-wide xl:tracking-widest">
                    At Keyncoders, we are on a mission to transform underperforming tier 2 and tier 3 colleges into centers of excellence by providing students with industry-relevant skills, career development resources, and direct employment opportunities.
                </p>
               
                {/* Feature Box - Properly sized */}
                <div className="flex flex-col lg:flex-row justify-between rounded-[30px] lg:rounded-[69px] mb-10 mt-8 min-h-[500px] lg:h-[620px] w-full max-w-[calc(100vw-2rem)] lg:max-w-[1600px] bg-box mx-4 lg:mx-[10vh] xl:mx-[2vh] 2xl:mx-[15vh] overflow-hidden">
                    {/* Left Text Section - Original design */}
                    <div className="flex flex-col p-6 lg:p-0 lg:ml-16 lg:mt-16 w-full lg:w-1/2">
                        <h3 className="font-cabinet-grotesk text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[50px] leading-tight xl:leading-[50px] tracking-wide xl:w-[860px]">
                            Boost Placement Rates & attract more admissions.
                        </h3>
                        
                        <p className="font-light text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] leading-relaxed xl:leading-[38px] mt-6 lg:mt-12 xl:w-[887px]">
                            Many colleges struggle due to a lack of career guidance, outdated curriculam, and minimal
                            corporate connections. We bridge this gap by partnering with colleges and equipping them with
                            a structured skill development and placement system.
                        </p>
                        
                        <button className="flex justify-center rounded-full bg-white max-w-58 h-12 lg:h-12 mt-8 lg:mt-40  group hover:bg-stone-100 hover:cursor-pointer transition-colors duration-300 z-80 hover:scale-105 ">
                            <p className="flex items-center font-cabinet-grotesk text-black text-xl lg:text-2xl xl:text-3xl">
                                Know more
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                                        className="bi bi-arrow-right ml-4 font-bold group-hover:translate-x-5 duration-300" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1
                                            .708-.708l4 4a.5.5 0 0 1 0
                                            .708l-4 4a.5.5 0 0 1-.708-.708L13.293
                                            8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg>
                                </span>
                            </p>
                        </button>
                    </div>
                
                    {/* Right Video Section - Positioned at rightmost */}
                    <div className="w-full lg:w-[35%] h-64 lg:h-full lg:ml-auto overflow-x-clip">
                        <video
                            className="w-full h-full object-cover  "
                            src={box_video}
                            autoPlay
                            loop
                            muted
                            playsInline
                        ></video>
                    </div>
                </div>
            </div>
        </>
    )
}