import { BsDashLg } from 'react-icons/bs';
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
const Hero = ({atExperience, atProjects}) => {
    return ( 
        <div className="w-full text-slate-200 ">
            <h1 className=" name-title font-montserrat  font-bold text-4xl">Divine Jojolola</h1>
            <h1 className="occupation text-2xl font-rubik font-medium bg-[#464555] w-fit  mt-5 xl:mt-3 2xl:mt-3 px-1 ">Web Developer & Machine Learning Engineer</h1>
            <h1 className="text-lg font-rubik w-fit xl:w-96 2xl:w-96 mt-5">Leveraging my dual expertise as a Web Developer and Machine Learning Engineer to orchestrate symphonies of code and intelligent systems that bring visions to life.</h1>
            
            <div className='mt-5'>
                <a className='text-lg font-ubuntu underline w-fit xl:w-96 2xl:w-96 hover:text-[#7F87F1]' href='https://docs.google.com/document/d/1E0653oAQ5HUMHKZPnoOteC6Q0NCQvm5cBrsoPFCSBvU/edit?usp=sharing' target='_blank'>View Full Resume</a>
            </div>

            
            <ul className='mt-10 xl:flex 2xl:flex flex-col gap-y-2 hidden'>

                <li className={`flex items-center font-mono ${atExperience? 'text-[#00A3B3]' : ''}`}>
                    <BsDashLg className='text-3xl' />
                    <h1 className='font-semibold text-2xl'>Experience</h1>
                </li>

                <li className={`flex items-center font-mono ${atProjects? 'text-[#00A3B3]' : ''}`}>
                    <BsDashLg className='text-3xl' />
                    <h1 className='font-semibold text-2xl'>Projects</h1>
                </li>
            </ul>
            
            <div className='social-media-icons mt-10 flex gap-x-8'>
                <a href='https://github.com/whoissegun' target='_blank' rel='noreferrer'>
                    <AiFillGithub className='text-3xl' />
                </a>

                <a href='https://www.linkedin.com/in/divine-jojolola-082a5b249/' target='_blank' rel='noreferrer'>
                    <FaLinkedinIn className='text-3xl' />
                </a>

                <a href='mailto:jojololadivine05@gmail.com' target='_blank' rel='noreferrer'>
                    <AiOutlineMail className='text-3xl' />
                </a>
            </div>
            
        </div>
     );
}
 
export default Hero;