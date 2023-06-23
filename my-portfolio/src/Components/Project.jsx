import bluew from '../assets/bluew.png'
import obando from '../assets/obando.png'
import the_library from '../assets/the_library.png'
import breat from '../assets/breat.jpg'
import transport from '../assets/transport.jpeg'
const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'The Library',
            description: 'A full-stack library management system with user authentication and authorization, and a REST API for CRUD operations.',
            image: the_library,
            languages: ['Django', 'React', 'Tailwind CSS', 'PostgreSQL'],
            link: 'https://the-library-virid.vercel.app/'
        },
        {
            id: 2,
            title: 'Obando',
            description: 'A restaurant website with a focus on user experience.',
            image: obando,
            languages: ['React', 'Tailwind CSS'],
            link: 'https://obando.vercel.app/'
        },
        {
            id: 3,
            title: 'Breast Cancer Clasification Model',
            description: 'A machine learning model developed to accurately distinguish between malignant and benign breast cancer cases, utilizing the comprehensive Wisconsin Breast Cancer Dataset for training and validation',
            image: breat,
            languages: ['Pytorch', 'Matplotlib', 'Numpy', 'Pandas', 'Scikit-learn'],
            link: 'https://github.com/whoissegun/Breast-Cancer-Classification-Model'
        },
        {
            id: 4,
            title: 'Vehicle Recognition Model',
            description: 'An image classification model built to accurately classify vehicles into 3 categories: cars, airplanes, and ships.',
            image: transport,
            languages: ['Pytorch', 'Matplotlib', 'Numpy', 'Pandas', 'Scikit-learn'],
            link: 'https://github.com/whoissegun/Transport_Vehicle_Recognition_Model/blob/main/Transport_Vehicle_Recognition_Model.ipynb'
        }
    ];

    const openProject = (url) => {
        window.open(url, "_blank");
    }

return (
    <div className="w-full text-slate-200 flex flex-col gap-y-32 xl:mt-28 2xl:mt-28 ">
        <h1 className="font-bold text-3xl font-montserrat text-center xl:hidden 2xl:hidden mt-28">Projects</h1>
        {projects.map((project) => (
            <div key={project.id} className="hover:bg-[#324B4A] hover:cursor-pointer p-4 rounded-lg flex flex-col 2xl:flex-row gap-y-8 flex-wrap gap-x-16 " onClick={() => openProject(project.link)}>
                <img src={project.image} alt="" className='xl:w-80 2xl:w-80 md:w-96 lg:w-96 w-64' />
                <div className="">
                    <h1 className="text-2xl font-semibold font-raleway text-white ">{project.title}</h1>
                    <h1 className="text-lg font-medium mt-1 xl:w-96 2xl:w-96 md:w-full lg:w-full w-fit mb-2">{project.description}</h1>
                    {project.languages.map((language) => (
                        <span key={language} className="text-lg font-medium mt-1 w-fit inline-block bg-[#482E2D] mr-2 px-2 py-1 rounded-lg">{language}</span>
                    ))}
                </div>
            </div>
        ))}
    </div>
);
};

export default Projects;
