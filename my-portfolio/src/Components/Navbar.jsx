import { useState } from 'react'
import { SiMinutemailer } from 'react-icons/si';
import { BsCodeSlash, BsGithub } from 'react-icons/bs';


const Navbar = () => {
    const [hamMenuClicked,setHamMenuClicked] = useState(false)
      
    return ( 
        <>
            <nav className="flex px-3 pt-5  items-center  relative text-white ">
                    

                    <ul className="right-side absolute  right-5 items-center flex gap-x-8 mt-2 sm:hidden md:hidden lg:mt-1 text-xl  ">
                        

                        <a href='#projects' className=' flex '>
                            <BsCodeSlash className='mt-1 mr-1' />Projects
                        </a>

                        <a href='https://github.com/whoissegun' target="_blank" className=' flex '>
                            <BsGithub className='mt-1 mr-1' />Github
                        </a>

                        <a href='mailto:jojololadivine05@gmail.com' target="_blank" className=' flex '>
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

                            <a href='#projects' onClick={() => handleLinkClick()} className=' flex '>
                                <BsCodeSlash className='mt-1 mr-1' />Projects
                            </a>

                            <a href='https://github.com/whoissegun' target="_blank" className='flex '>
                                <BsGithub className='mt-1 mr-1' />Github
                            </a>

                            <a href='mailto:jojololadivine05@gmail.com' target="_blank" className=' flex '>
                                <SiMinutemailer className='mt-1 mr-1' />Contact Me
                            </a>
 
                        
                        </ul>
                    </div>

                    
        </>
     );
}
 
export default Navbar;