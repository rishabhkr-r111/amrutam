import "./css/Navbar.css";
import banner from "../assets/banner.png";

function Navbar() {
  return (
    <nav className="container mx-auto flex flex-row justify-center align-center">
      <a href="#" className="banner">
        <img src={banner} alt="banner" width={249} height={49} />
      </a>
      <div className="flex items-center space-x-10 mr-[266px] font-thin">
        <a href="#" className="hover:text-[#3A643B]">
          Home
        </a>
        <a href="#" className="text-[#3A643B] font-bold">
          Find Doctors
        </a>
        <a href="#" className=" hover:text-[#3A643B] font-thin">
          About Us
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="#"
          className="text-[#3A643B] border-[1px] border-[#3A643B] px-4 py-2 rounded-lg hover:bg-[#3A643B] hover:text-white transition-colors duration-300"
        >
          Login
        </a>
        <a
          href="#"
          className="bg-[#3A643B] text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300"
        >
          Sign-up
        </a>
      </div>
    </nav>
  );
}

export default Navbar;