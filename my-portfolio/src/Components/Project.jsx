import bluew from '../assets/bluew.png'
import obando from '../assets/obando.png'
import the_library from '../assets/the_library.png'
import analysis from '../assets/analysis.jpeg'
import transport from '../assets/transport.jpeg'
import art from '../assets/art.png'
import subscription from '../assets/subscription.jpeg'
import crop_classification from '../assets/crop_classification.jpg'
import server from '../assets/server.jpeg'
const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'The Library',
            description: 'A digital library platform featuring robust user authentication, authorization, and REST APIs for swift CRUD operations. Integrated with advanced systems to vectorize PDFs, it ranks document sections in response to user queries and interprets the relevant sections to offer natural language answers',
            image: the_library,
            languages: ['Django', 'React', 'Tailwind CSS', 'PostgreSQL', 'Pinecone', 'Langchain'],
            link: 'https://the-library-virid.vercel.app/'
        },

        {
            id:2,
            title: 'Art Exhibition Site',
            description: "A full-stack art exhibition website with a focus on user experience and functionaliy. It's designed to simulate an art exhibition environment, focusing on efficient management and display of art content. The site features robust backend structuring for managing artworks, users, and interactive elements like reviews and workshops. Emphasizing modularity and scalability, the project integrates user-friendly features such as artist following, artwork reviews, workshop creation and enrollment, mirroring the dynamic interactivity found in popular social media platforms",
            image: art,
            languages: ['MongoDB', 'EJS', 'CSS', 'NodeJS', 'ExpressJS'],
            link: 'https://art-exhibition-site-production.up.railway.app/'
        },
        {
            id: 3,
            title: 'Obando',
            description: 'A restaurant website with a focus on user experience.',
            image: obando,
            languages: ['React', 'Tailwind CSS'],
            link: 'https://obando.vercel.app/'
        },
        {
            id: 4,
            title: 'Vegetable Image Classification Model',
            description: 'A deep learning model developed to classify images of vegetables into 15 types. It achieved an accuracy of 88 percent. I fine-tuned a pre-trained ResNet50 model to achieve this.',
            image: crop_classification,
            languages: ['Pytorch', 'Numpy'],
            link: 'https://github.com/whoissegun/VEGETABLE-IMAGE-CLASSIFICATION-MODEL'
        },
        {
            id: 5,
            title: 'YouTube EDA: Analyzing a Popular Nigerian Content Creator',
            description: 'A comprehensive exploratory data analysis project that delves into the performance metrics of Korty, a popular Nigerian YouTuber. The project covers video durations, view-to-like ratios, and other key metrics',
            image: analysis,
            languages: ['Matplotlib', 'Pandas','Python','Youtube API'],
            link: 'https://github.com/whoissegun/KORTY_YOUTUBE_EDA'
        },
        {
            id:6,
            title: 'Subscription Management System',
            description: "This application features user registration capabilities, both with and without phone numbers, and handles various subscription types, differentiated by price, resolution, and device accessibility. It includes comprehensive user profile management tools, ensuring secure handling of personal details like email and phone numbers. A standout feature is its thread-safe user ID generation, ensuring robust system performance. Rigorous unit testing, in line with industry best practices, underpins the system's reliability",
            image: subscription,
            languages: ['Java'],
            link: 'https://github.com/whoissegun/SubsCribMaster'
        },
        {
            id: 7,
            title: 'Multithreaded Chat Server',
            description: 'A multithreaded chat server in C that supports multiple clients. It features a robust user authentication system and a secure messaging system. The server is designed to handle multiple clients concurrently, ensuring a seamless user experience. ',
            image: server,
            languages: ['C'],
            link: 'https://github.com/whoissegun/chat-server',
        }
    ];

    const openProject = (url) => {
        window.open(url, "_blank");
    }

return (
    <div className="w-full text-slate-200 overflow-y-auto h-fit flex flex-col gap-y-32 xl:mt-28 2xl:mt-28 ">
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
