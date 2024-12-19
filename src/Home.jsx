import DoctorCard from "./components/DoctorCard";
import './Home.css';
import { ArrowRight } from "lucide-react";
import { MapPin } from "lucide-react";
import ArrowDown  from "./assets/arrow-down.svg";
import { X } from "lucide-react";

function Home() {
  return (
    <div>

      <section className="container search flex flex-col justify-center text-center align-centre space-y-4 ">
        <h1 className="text-3xl">
          Find Expert Doctors For An In-Clinic Session Here{" "}
        </h1>
        <div className="w-1/2 flex justify-center items-center gap-2 text-center mx-auto font-['Inter'] font-[50] text-sm">
          <div className="relative w-1/4">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <MapPin className="h-4 w-4 text-['#3A643B'] " />
            </div>
            <select className="w-full p-3 pl-8 rounded-md border border-gray-300 text-[#767676] focus:outline-none text-sm">
              <option>Select Location</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
            </select>
          </div>
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="eg. Doctor, specialisation, clinic name"
              className="w-full p-3 pl-4 pr-10 border border-gray-300 rounded-md focus:outline-none text-[#767676]"
            />
            <button className="absolute inset-y-0 right-0 px-4 flex items-center">
              <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      <section className="container filters flex justify-center items-center ">
        <div className="bg-white flex justify-center py-4 shadow-sm border-b w-full text-sm">
          <div className="flex gap-7">
            <select className="px-[13px] py-[6px] bg-[#F3F3F3] rounded-lg flex items-center">
              <option value="expertise">Expertise</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
            <select className="px-[13px] py-[6px] bg-[#F3F3F3] rounded-lg flex items-center">
              <option value="expertise">Gender</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
            <select className="px-[13px] py-[6px] bg-[#F3F3F3] rounded-lg flex items-center">
              <option value="expertise">Fees</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>

            <button className="px-[13px] py-[6px] bg-[#F3F3F3] rounded-lg flex items-center">
              Language
              <span className="ml-[40px]">
                {" "}
                <img src={ArrowDown}></img>
              </span>
            </button>

            <button className="px-[13px] py-[6px] bg-[#E1F3DE] text-[#3A643B] rounded-lg flex items-center">
              All filters
              <span className="ml-[40px]">
                <img src={ArrowDown}></img>
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="container selected-filters">
        <div className=" flex justify-end align-centure gap-7 mr-48 mt-[50px]">
          <button className="px-[15px] py-[8px] bg-[#EAF2EA] text-black rounded-3xl flex items-center">
            Hair Care
            <span className="ml-[40px]">
              <X />
            </span>
          </button>
          <button className="px-[13px] py-[6px] bg-[#EAF2EA] text-black rounded-3xl  flex items-center">
            Female
            <span className="ml-[40px]">
              <X />
            </span>
          </button>
        </div>
      </section>

      <section className="container doctors mt-9 flex justify-center gap-4">
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </section>
    </div>
  );
}

export default Home;