import person from "../assets/personCoding.jpg"
const Hero = () => {
    return ( 
        <div className="font-['Poppins'] px-5 relative pb-16">

            <div className="hero-text mt-[10%] sm:mt-[30%] lg:mt-[20%] md:mt-[20%] ">
                <h1 className="font-bold text-4xl sm:w-fit text-[white]">
                    Hello, I am Divine
                </h1>
                <h1 className="w-[45%] mt-[1%] sm:w-[80%]">I am a passionate Web Developer with a love for problem-solving and creative thinking.</h1>

                <div className="cta-btns  mt-5">
                    <button className="register-btn bg-[#3D8B83] rounded-lg w-fit px-4 py-2 ">
                            <a href="https://drive.google.com/file/d/1fj7rhWg0LHOVR3uurYEfpK2KjnqIwH8s/view?usp=share_link"  target="_blank" className="text-white font-bold text-lg text-center">View Resume</a>
                    </button>
                </div>
            </div>

            <img src={person} alt="" className="rounded-full w-[30%] lg:w-[40%] md:w-[50%] sm:w-[60%] -mt-[15%] sm:mt-0 lg:-mt-[30%] md:-mt-[35%] ml-[50%] sm:ml-[30%]" />
        </div>
     );
}
 
export default Hero;