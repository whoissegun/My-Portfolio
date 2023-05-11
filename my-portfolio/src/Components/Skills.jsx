import html from '../assets/html.png'
import java from '../assets/java.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import postgres from '../assets/postgres.png'
import django from '../assets/django.png'
import pytorch from '../assets/pytorch.png'

const Skills = () => {
    
    return ( 
        <div className="text-black bg-slate-300 font-['Poppins'] px-5">
            <h1 className="text-center pt-[2%] font-bold text-4xl">Skills</h1>

            <div className="skills grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:ml-[30%] mt-[5%] sm:mt-[10%] ml-[10%] gap-y-16">            
                
                <div className="skill relative" >
                    <img src={html} alt="" className='w-[40%] sm:ml-[10%]  ' />
                    <h1 className='font-semibold text-3xl mt-5 ml-[10%] sm:ml-[20%]'>HTML</h1>
                </div>

                <div className="skill relative" >
                    <img src={tailwind} alt="" className='w-[60%]  ' />
                    <h1 className='font-semibold text-3xl mt-10 ml-[10%]'>Tailwind</h1>
                </div>

                <div className="skill relative" >
                    <img src={react} alt="" className='w-[50%]  ' />
                    <h1 className='font-semibold text-3xl mt-5 ml-[10%]'>React</h1>
                </div>

                <div className="skill relative" >
                    <img src={java} alt="" className='w-[50%] lg:-mt-5 lg:w-[40%] md:-mt-5 md:w-[40%]  ' />
                    <h1 className='font-semibold text-3xl mt-5 lg:mt-3 md:mt-3 ml-[10%]'>Java</h1>
                </div>

                <div className="skill relative" >
                    <img src={postgres} alt="" className='w-[50%]  ' />
                    <h1 className='font-semibold text-3xl mt-16 ml-[10%]'>Postgresql</h1>
                </div>

                <div className="skill relative" >
                    <img src={django} alt="" className='w-[50%]  ' />
                    <h1 className='font-semibold text-3xl mt-20 ml-[10%]'>Django</h1>
                </div>

                <div className="skill relative" >
                    <img src={pytorch} alt="" className='w-[50%]  ' />
                    <h1 className='font-semibold text-3xl mt-10 ml-[10%]'>Pytorch</h1>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;