import icon1 from '../assets/Icon1.png'
import icon2 from '../assets/Icon2.png'
import icon3 from '../assets/Icon3.png'
import icon4 from '../assets/Icon4.png'
import icon5 from '../assets/Icon5.png'
import Blueprint from '../assets/Blueprint.png'
export default function GlassCard(){
    return(
        <>
        <div className="relative flex flex-col items-start p-8 rounded-3xl
                    bg-white/30 border border-gray-400
                    backdrop-blur-xl shadow-lg
                    max-w-[95%] mx-auto min-h-[90vh] mt-28">
      
      {/* Title */}
      <h2 className="text-xl lg:text-5xl xl:text-7xl font-semibold text-black mb-2 font-Bricolage">HOW IT WORKS</h2>
      <p className="text-black/80 leading-relaxed mb-8 max-w-[88%] md:text-lg text-md xl:text-2xl">
        At Keyncoders, we are on a mission to transform underperforming tier 2 and tier 3 colleges into centers of excellence by providing students with industry-relevant skills, career development resources, and direct employment opportunities.
      </p>

      {/* Section Heading */}
      <h3 className="text-2xl md:text-3xl xl:text-5xl font-cabinet-grotesk text-black mb-4 max-w-[50%] leading-[65px]">
        Partnering with Colleges to Build a Future-Ready Campus.
      </h3>

      {/* Description */}
      <p className="text-black/80 max-w-2xl mb-6 text-md md:text-lg xl:text-2xl mt-10">
        Many colleges struggle due to a lack of career guidance, outdated curriculum, and minimal corporate connections.
       
      </p>
      <p className="text-black/80 max-w-2xl mb-6 text-md md:text-lg xl:text-2xl mt-10">
       
        We bridge this gap by partnering with colleges and equipping them with a structured skill development and placement system.
      </p>


      {/* Button */}
      <button className="flex items-center  space-x-8 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition text-3xl mt-10">
        <p class="-mt-1">Know more</p>
         <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"fill="currentColor"
                                        className="bi bi-arrow-right font-bold text-white  " viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1
                                            .708-.708l4 4a.5.5 0 0 1 0
                                            .708l-4 4a.5.5 0 0 1-.708-.708L13.293
                                            8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg>
      </button>

      {/* Example Icons */}
      <div className="absolute top-[22%] right-[10%] hidden md:grid grid-cols-3 ">
        
            <img src={icon1} alt="" class=" md:h-28 lg:h-32 xl:h-48"/>
            <img src={icon2} alt="" class=" md:h-28 lg:h-32 xl:h-48" />
            <img src={icon3} alt="" class=" md:h-28 lg:h-32 xl:h-48"/>
            <img src={icon4} alt="" class=" md:h-28 lg:h-32 xl:h-48"/>
            <img src={icon5} alt="" class=" md:h-28 lg:h-32 xl:h-48"/>

        
      </div>

      {/* Decorative building bottom-right */}
      <img
        src={Blueprint}
        alt="Building"
        className="absolute bottom-0 right-4 opacity-80 "
      />
    </div>
        </>
    )
}