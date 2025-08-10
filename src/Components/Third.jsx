import Ellipse from '../assets/Ellipse.png'
import Line from'../assets/Line.png'
import GlassCard from './GlassCard'
export default function Third(){
    return(
        <>
        <div class="absolute mt-[230vh] lg:mt-[222vh] min-h-screen bg-white w-full  pb-50">

            <img src={Ellipse} class="absolute"></img>
            <img src={Line} class="absolute mt-[32vh]"></img>
            <img src={Line} class="absolute mt-[34vh]"></img>
            <img src={Line} class="absolute mt-[36vh]"></img>
            <GlassCard/>
        </div>
        </>
    )
}