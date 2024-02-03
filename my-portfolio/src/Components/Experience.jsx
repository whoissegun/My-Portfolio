const experiences = [
    {
        id: 1,
        title: "Frontend Web Developer",
        company: "Khoomi",
        duration: "July 2023 - Jan 2024",
        description: "Develop user-friendly using Tailwind, TypeScript, and Next.js. Utilize Google Analytics to gather valuable user behavior data, enabling data-driven optimizations that result in a significant 15% increase in conversion rates. Strategically distribute the workload between Next.js API endpoints and backend API endpoints, resulting in a remarkable 30% decrease in response time. This approach ensures optimal performance for users while preventing backend overload."
    },
    
    {
        id: 2,
        title: "Summer Admin Student",
        company: "Fasken Martineau Dumoulin LLP",
        duration: "June 2023 - Oct 2023",
        description: "Manage and maintain the company's websites across five countries using HTML, CSS, and JavaScript. Ensure WCAG 2.0 guidelines compliance leading to a 50% increase in site accessibility. Perform routine bug fixes for seamless user experience and collaborated with teams for adherence to accessibility standards."
    },
    {
        id: 3,
        title: "Web Developer",
        company: "Blue W",
        duration: "Feb 2023 - May 2023",
        description: "Integrated new APIs and endpoints using Django Rest Framework for efficient data exchange, resulting in faster page loads. Conducted user experience research and optimized the UI with React and Tailwind. Analyzed spatial data using PostGIS and PostgreSQL to inform expansion strategy. Created data-driven reports with Pandas and Numpy."
    },
    {
        id: 3,
        title: "Web Developer",
        company: "Freelance",
        duration: "July 2022 - Aug 2022",
        description: "Developed a full-stack restaurant website using React and Django, and improved search engine optimization leading to a 60% increase in visibility and footfall. Built a gaming tournament website with user registration and real-time updates, increasing participation by 50% and enhancing user experience."
    },
    
];

const Experience = () => {
    return ( 
        <div className="w-full gap-y-6 flex flex-col  items-center text-slate-200  h-full xl:px-2 2xl:px-2">
            <h1 className="font-bold text-3xl font-montserrat">Experience</h1>
            {experiences.map((experience) => (
                <div key={experience.id} className="hover:bg-[#444463] w-fit transition-all duration-150  rounded-lg px-3 py-2">
                    <h1 className="text-2xl font-semibold font-montserrat text-white ">{experience.title}</h1>
                    <h1 className="text-xl font-medium font-raleway mt-1">{experience.company}</h1>
                    <h1 className="text-lg font-medium mt-1 italic">{experience.duration}</h1>
                    <h1 className="text-lg font-medium mt-1 xl:w-[80%] 2xl:w-[80%]">{experience.description}</h1>
                </div>
            ))}
        </div>
     );
}
 
export default Experience;