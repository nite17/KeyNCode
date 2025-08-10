import { useState,useEffect } from 'react';


export default function NavBar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
    
          if (currentScrollY > lastScrollY && currentScrollY > 50) {
            // Scrolling down & past 50px => hide navbar
            setShowNav(false);
          } else {
            // Scrolling up => show navbar
            setShowNav(true);
          }
    
          setLastScrollY(currentScrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
      }, [lastScrollY]);

    return(
        
        <nav
      className={`
        lg:relative top-0 left-0 fixed z-50 px-4 py-4 overflow-x-hidden w-full
        transition-transform duration-300 ease-in-out
        ${showNav ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
           
           
           
            <div className="hidden md:flex  mt-[56px]  items-start  justify-start ml-4 ">
           
                <div className="flex  items-start space-x-10 md:space-x-20 lg:space-x-12 xl:space-x-[60px] justify-start   z-10 overflow-x-hidden">
                  
                    <a className="  text-home font-poppins hover:scale-120 transition-transform duration-300 hover:cursor-pointer whitespace-nowrap">HOME</a>
                    <a className=" text-white font-poppins hover:scale-120 transition-transform duration-300 hover:cursor-pointer whitespace-nowrap">ABOUT US</a>
                    <a className=" text-white font-poppins hover:scale-120 transition-transform duration-300 hover:cursor-pointer whitespace-nowrap">OUR SOLUTION</a>
                    <a className=" text-white font-poppins hover:scale-120 transition-transform duration-300 hover:cursor-pointer whitespace-nowrap">BLOGS</a>
                    <a className=" text-white font-poppins hover:scale-120 transition-transform duration-300 hover:cursor-pointer whitespace-nowrap">CAREERS</a>
                    <a className=" text-white font-poppins hover:scale-120 transition-transform duration-300 hover:cursor-pointer whitespace-nowrap">CONTACT US</a>
                </div>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex justify-between items-center">
                <div className="text-home font-poppins font-bold text-xl">KeyNcode</div>
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white focus:outline-none"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-90 backdrop-blur-sm">
                    <div className="flex flex-col space-y-4 p-6">
                        <a className="text-home font-poppins hover:scale-105 transition-transform duration-300 hover:cursor-pointer">HOME</a>
                        <a className="text-white font-poppins hover:scale-105 transition-transform duration-300 hover:cursor-pointer">ABOUT US</a>
                        <a className="text-white font-poppins hover:scale-105 transition-transform duration-300 hover:cursor-pointer">OUR SOLUTION</a>
                        <a className="text-white font-poppins hover:scale-105 transition-transform duration-300 hover:cursor-pointer">BLOGS</a>
                        <a className="text-white font-poppins hover:scale-105 transition-transform duration-300 hover:cursor-pointer">CAREERS</a>
                        <a className="text-white font-poppins hover:scale-105 transition-transform duration-300 hover:cursor-pointer">CONTACT US</a>
                    </div>
                </div>
            )}
        </nav>
    )
}   