import { Link } from "react-router-dom";
import Girl from "../../assets/images/girl.png"

const Banar = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row px-2 md:px-5 py-5 md:py-10 gap-8 sm:px-10">
            <div className="flex-1 flex flex-col justify-center">
                <h1 className="md:text-5xl text-3xl font-bold xl:text-7xl">beauty salon <br/> for every woman</h1>
                <h1 className="my-5 text-gray-700 xl:text-lg">Discover elegance at Jerin's Parlour. Tailored beauty services for the modern woman. Embrace your radiance with us.</h1>
                <button className="flex items-start justify-start xl:text-lg"><Link to="" className="text-white bg-[#F63E7B] px-4 py-2 rounded">Get on Appointment</Link></button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
                <img className="xl:w-4/5" src={Girl} alt="girl img" />
            </div>
        </div>
    );
};

export default Banar;