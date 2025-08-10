import vec1 from '../assets/Left_vec.png'
import Card from './Card.jsx'
import vec2 from '../assets/Right_vec.png'
export default function Fourth(){
    return(
        <>
        <div class="absolute flex flex-col bg-white min-h-screen w-full 2xl:mt-[380vh] lg:mt-[335vh] xl:mt-[360vh] pb-56 ">
        <div className="flex flex-col md:flex-row items-start md:items-center px-4 md:px-8 lg:ml-[10vh]  space-y-4 md:space-y-0 md:space-x-4 mt-24">
                    <div className="hidden md:block border-4 md:border-6 border-orange-500 h-16 md:h-32 w-1 flex-shrink-0 lg:-mt-14"></div>
                    <h2 className="text-black  text-2xl ml-10 lg:ml-0 sm:text-3xl md:text-4xl xl:text-[70px] leading-tight xl:leading-[86px] xl:max-w-[950px] font-Bricolage font-semibold">
                        HEAR WHAT COLLEGES SAY ABOUT US
                    </h2>
                </div>
                {/*Row 1*/}
                <div class="grid grid-cols-2  ml-[10vh] xl:ml-0 lg:flex xl:flex  xl:mt-20 space-x-12 items-center ">
                    <img src={vec1} class="hidden xl:block"></img>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                    {/*Row 2*/}
                <div class="hidden xl:flex xl:mt-20 space-x-12 items-center xl:ml-40">
                   
                    <Card/>
                    <Card/>
                    <Card/>
                    <img src={vec2} class="mr-0 hidden lg:block"></img>
                </div>
        </div>
        </>
    )
}