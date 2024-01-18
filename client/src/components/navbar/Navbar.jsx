import { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu, BiX } from "react-icons/bi";
import Logo from "../../assets/logo.png";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="px-2 py-2">
            <div className="flex px-2 md:px-4 justify-between items-center">
                <div>
                    <img className="md:max-w-[200px] max-w-[150px]" src={Logo} alt="Jerin's Parlor" />
                </div>
                <div className={`${isMobileMenuOpen ? "sm:block":"sm:hidden"} md:contents py-5 bg-[#e4e4e446] backdrop-blur-md md:bg-transparent absolute md:static ${isMobileMenuOpen ? "top-0 right-0":"top-0 translate-x-full"} transition-all ease-in-out  w-full h-full text-center`}>
                    <ul className="flex md:space-x-4 flex-col md:flex-row md:static font-semibold justify-end">
                        <li className="hover:cursor-pointer md:hover:text-gray-900 md:hover:bg-transparent hover:bg-[#e4e4e46a] hover:backdrop-blur-md w-auto p-4"><Link to="">Home</Link></li>
                        <li className="hover:cursor-pointer md:hover:text-gray-900 md:hover:bg-transparent hover:bg-[#e4e4e446] hover:backdrop-blur-md w-auto p-4"><Link to="">Our Portfolio</Link></li>
                        <li className="hover:cursor-pointer md:hover:text-gray-900 md:hover:bg-transparent hover:bg-[#e4e4e446] hover:backdrop-blur-md w-auto p-4"><Link to="">Our Team</Link></li>
                        <li className="hover:cursor-pointer md:hover:text-gray-900 md:hover:bg-transparent hover:bg-[#e4e4e446] hover:backdrop-blur-md w-auto p-4"><Link to="">Contact Us</Link></li>
                        <li className="hover:cursor-pointer text-white mt-4">
                            <Link to="#" className="bg-[#F63E7B] py-1 px-4 rounded">Login</Link>
                        </li>
                        
                    </ul>
                    <div onClick={toggleMobileMenu} className="md:hidden absolute top-[30px] left-[30px] rounded-full hover:bg-[#e4e4e4] hover:cursor-pointer transition-colors">
                        <BiX size={30} />
                    </div>
                </div>
                <div className="md:hidden">
                    {/* Mobile menu button using React Icons */}
                    <button className="text-black" onClick={toggleMobileMenu}>
                        <BiMenu size={30} />
                    </button>
                </div>
            </div>
        
        </nav>
    );
};

export default Navbar;
