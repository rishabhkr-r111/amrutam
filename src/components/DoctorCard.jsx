import Doctor from "../assets/docter.png";
import Med from "../assets/med.png";
import Experience from "../assets/experience.png";
import Lang from "../assets/comment.png";
import { useNavigate } from "react-router-dom";

function DoctorCard() {
    const navigate = useNavigate();

    const profile = () => {
      navigate("/profile");
    };

  return (
    <div className="max-w-[356px] max-h-[561px] bg-[#FFF7E2] rounded-xl shadow-md p-6 border border-[#E3E3E3] font-['Nunito']">
      <div className="flex flex-col items-center">
        <img
          src={Doctor}
          alt="Dr. Prerna Narang"
          className="w-[149px] h-[150px] rounded-full shadow-md"
        />
        <div className="flex items-center bg-black border border-none rounded-2xl px-[7px] py-[2px] -translate-y-5 ">
          <span className="text-[12px] font-medium text-white">4.5</span>
          <svg
            className="w-4 h-4 text-yellow-400 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 15l-5.88 3.09 1.12-6.55L0 6.91l6.56-.95L10 0l2.44 5.96 6.56.95-4.74 4.63 1.12 6.55z" />
          </svg>
        </div>
        <h2 className="mt-[19px] text-[32px] font-semibold text-gray-800">
          Dr. Prerna Narang
        </h2>

        <p className="mt-2 text-[#646665] text-[16px] ">
          <span>
            <img src={Med} alt="Med" className="w-4 h-4 inline-block mr-3" />
          </span>
          Male-Female Infertility
        </p>
        <p className="mt-1 text-[#646665] text-[16px] ">
          <span>
            <img
              src={Experience}
              alt="Experience"
              className="w-5 h-5 inline-block mr-3"
            />
          </span>
          7 years of Experience
        </p>
        <p className="mt-1 text-[#646665] text-[16px] ">
          <span>
            <img src={Lang} alt="Lang" className="w-4 h-4 inline-block mr-3" />
          </span>
          Speaks: English, Hindi, Marathi
        </p>
        <div className="flex justify-center w-full mt-4 gap-2">
          <button className="text-[12px] text-gray-700 px-4 py-2 rounded-md border border-[#3A643B] hover:bg-green-100">
            Video Consultation
            <div className="text-[#3A643B] font-bold">₹800</div>
          </button>
          <button className="text-[12px] text-gray-700 px-4 py-2 rounded-md border border-[#3A643B] hover:bg-green-100">
            Chat Consultation
            <div className="text-[#3A643B] font-bold">Free</div>
          </button>
        </div>
        <button
          className="text-sm mt-4 w-full bg-white text-[#3A643B] py-2 rounded-md hover:bg-gray-200 border border-[#3A643B] "
          onClick={profile}
        >
          View Profile
        </button>
        <button
          className="text-sm mt-2 w-full bg-[#3A643B] text-white py-2 rounded-md hover:bg-green-700"
          onClick={profile}
        >
          Book a consultation
        </button>
      </div>
    </div>
  );
}

export default DoctorCard;
