import Navbar from "./components/Navbar";
import './Home.css';
import serach from './assets/search.svg';
import { ArrowRight } from "lucide-react";

function Home() {
  return (
    <div>
      <Navbar />
      <section className="container search flex flex-col justify-center text-center align-centre space-y-4">
        <h1 className="text-2xl">
          Find Expert Doctors For An In-Clinic Session Here{" "}
        </h1>
        <div className="w-1/2 flex justify-center items-center gap-2 text-center mx-auto">
          <select className="w-1/4 p-3 rounded-md border border-gray-300 text-gray-700 focus:outline-none">
            <option>Select Location</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Bangalore</option>
          </select>
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="eg. Doctor, specialisation, clinic name"
              className="w-full p-3 pl-4 pr-10 border border-gray-300 rounded-md focus:outline-none"
            />
            <button className="absolute inset-y-0 right-0 px-4 flex items-center">
              <ArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;