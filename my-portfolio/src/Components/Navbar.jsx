import { useState } from 'react'
import { SiMinutemailer } from 'react-icons/si';
import { BsCodeSlash, BsGithub } from 'react-icons/bs';


const Navbar = () => {
    const [hamMenuClicked,setHamMenuClicked] = useState(false)
      
    return ( 
        <>
            <nav className="flex px-3 pt-5  items-center  relative text-white ">
                    

                    <ul className="right-side absolute  right-5 items-center flex gap-x-8 mt-2 sm:hidden md:hidden lg:mt-1 text-xl  font-['Poppins']">
                        

                        <a href='#' className=' flex font-["Poppins"]'>
                            <BsCodeSlash className='mt-1 mr-1' />Projects
                        </a>

                        <a href='#' className=' flex font-["Poppins"]'>
                            <BsGithub className='mt-1 mr-1' />Github
                        </a>

                        <a href='#' className=' flex font-["Poppins"]'>
                            <SiMinutemailer className='mt-1 mr-1' />Contact Me
                        </a>
                        
                    </ul>

                    
                    
                </nav>

                <div className=" hidden sm:block md:block ">
                        <div className="hamMenuIcon  text-2xl absolute right-[5%] top-[1.5%] z-20 px-4 py-1 " onClick={() => setHamMenuClicked(!hamMenuClicked)}>
                            {!hamMenuClicked ?
                                <i className="fa-solid fa-bars "></i>
                                : <i className="fa-solid fa-xmark "></i>
                            }
                        </div>
                        
                        <ul className={`subNavbar flex-col gap-14 h-[90vh] justify-center items-center px-14 bg-[#082f49]  ${hamMenuClicked?'flex translate-x-0':' fixed translate-x-[-100vw]'} text-2xl transition-all duration-500  `}>

                            <a href='#' onClick={() => handleLinkClick()} className=' flex font-["Poppins"]'>
                                <BsCodeSlash className='mt-1 mr-1' />Projects
                            </a>

                            <li className='flex font-["Poppins"]'>
                                <BsGithub className='mt-1 mr-1' />Github
                            </li>
 
                        
                        </ul>
                    </div>

                    {/* <div className="nav-underline w-full mt-[3%] sm:mt-[5%] h-[0.1vh] bg-slate-200"></div> */}
        </>
     );
}
 
export default Navbar;