import bluew from '../assets/bluew.png'
import obando from '../assets/obando.png'
const Projects = () => {
    return ( 
        <div className="projects font-['Poppins']  mt-5 px-5 py-4" id='projects'>
            <h1 className='font-bold text-4xl text-center '>Projects</h1>
            <div className="project flex flex-col mt-[5%] ml-[25%]">
                <img src={bluew} alt="" className='w-[60%]' />
                <div className="details bg-white text-black py-4 w-[60%] pl-8 ">
                    <h1 className='text-3xl font-bold w-fit '>Environmental Services Website</h1>
                    <h1 className='description text-slate-600 w-[80%]  mt-[3%]'>I undertook the redesign of Blue W, an environmental services company specializing in water management. My focus was on enhancing their website by refining the map services and elevating both the user experience (UX) and user interface (UI) to provide a more intuitive and visually appealing platform for users. </h1>
                    <h1 className='font-medium text-2xl  mt-[2%]'>Built With</h1>
                    <h1 className=' text-lg  mt-[2%]'>React JS, Tailwind, PostgreSQL, RESTFUL APIs</h1>
                    
                    <div className="cta-btns  mt-[5%] flex">
                        <button className="register-btn bg-[#3D8B83] rounded-lg w-fit px-4 py-2 ">
                                <a href='https://bluew-one.vercel.app/' target="_blank" className="text-white font-bold text-lg text-center">View Site</a>
                        </button>

                        <button className="register-btn border-[#3D8B83] border-2 rounded-lg w-fit px-4 py-2 ml-[5%] ">
                                <a href='https://github.com/whoissegun/BLUEW_GIT' target="_blank" className="text-black font-bold text-lg text-center">View On Github</a>
                        </button>
                    </div>
                </div>
            </div>

            <div className="project flex flex-col mt-[5%] ml-[25%]">
                <img src={obando} alt="" className='w-[60%]' />
                <div className="details bg-white text-black py-4 w-[60%] pl-8 ">
                    <h1 className='text-3xl font-bold w-fit '>Restaurant Website</h1>
                    <h1 className='description text-slate-600 w-[80%]  mt-[3%]'> A full-stack restaurant website that seamlessly combines an aesthetically pleasing front-end with a robust and efficient back-end. This comprehensive platform showcases the restaurant's enticing menu, highlights customer reviews, and facilitates a streamlined online ordering system for customers' convenience.</h1>
                    <h1 className='font-medium text-2xl  mt-[2%]'>Built With</h1>
                    <h1 className=' text-lg  mt-[2%]'>React JS, Tailwind, PostgreSQL, RESTFUL APIs,Django</h1>
                    
                    <div className="cta-btns  mt-[5%] flex">
                        <button className="register-btn bg-[#3D8B83] rounded-lg w-fit px-4 py-2 ">
                                <a href='https://obando.vercel.app/' target="_blank" className="text-white font-bold text-lg text-center">View Site</a>
                        </button>

                        <button className="register-btn border-[#3D8B83] border-2 rounded-lg w-fit px-4 py-2 ml-[5%] ">
                                <a href='https://github.com/whoissegun/obando' target="_blank" className="text-black font-bold text-lg text-center">View On Github</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;