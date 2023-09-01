const Skills = () => {
    const skillsRight = ['JavaScript', 'Python', 'React', 'Next.js', 'Numpy', 'Matplotlib','PostgreSQL'];
    const skillsLeft = ['HTML5', 'CSS3', 'Tailwind CSS', 'Django', 'PyTorch', 'Pandas', 'Scikit-Learn'];

    return (
        <div className="text-xl ml-20 w-[50%] h-full overflow-y-auto rounded-2xl text-white">
            <div className="w-[90%] overflow-hidden">
                <div className=" whitespace-nowrap">
                    {skillsRight.map((skill, idx) => (
                        <span key={idx} className="mx-4">{skill}</span>
                    ))}
                </div>
                <div className=" whitespace-nowrap">
                    {skillsLeft.map((skill, idx) => (
                        <span key={idx} className="mx-4">{skill}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
