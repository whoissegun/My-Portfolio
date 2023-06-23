import './App.css'
import Hero from './Components/Hero'
import Experience from './Components/Experience'
import Projects from './Components/Project'
import { useRef, useEffect, useState } from 'react'

function App() {
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const scrollableDivRef = useRef(null);

  const [atExperience, setAtExperience] = useState(true);
  const [atProjects, setAtProjects] = useState(false);

  const handleScroll = () => {
    const experienceOffset = experienceRef.current.offsetTop;
    const projectsOffset = projectsRef.current.offsetTop;

    const scrollPosition = scrollableDivRef.current.scrollTop;

    if (scrollPosition >= experienceOffset && scrollPosition < projectsOffset) {
      setAtExperience(true);
      setAtProjects(false);
    } else if (scrollPosition >= projectsOffset) {
      setAtExperience(false);
      setAtProjects(true);
    } else {
      setAtExperience(false);
      setAtProjects(false);
    }
  };

  useEffect(() => {
    scrollableDivRef.current.addEventListener('scroll', handleScroll);

    return () => {
      scrollableDivRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='flex flex-col xl:flex-row 2xl:flex-row  bg-[#080519] xl:h-screen 2xl:h-screen  w-screen px-3 xl:px-10 2xl:px-10'>
      <div className='mt-10 xl:mt-20 2xl:mt-20'>
        <Hero atExperience={atExperience} atProjects={atProjects} />
      </div>
      <div className='mt-10 xl:mt-40 2xl:mt-40 xl:ml-20 2xl:ml-20 2xl:h-[80vh] xl:h-[80vh] xl:overflow-y-auto 2xl:overflow-y-auto scrollbar ml-2 w-full h-full' ref={scrollableDivRef}>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
      </div>
    </div>
  )
}

export default App
