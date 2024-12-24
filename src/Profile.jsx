import "./Profile.css";
import { Star } from "lucide-react";
import { Check } from "lucide-react";
import frame from "./assets/frame2.png";
import doctor from "./assets/docter2.png";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Facebook,  Youtube, Instagram, Twitter } from "lucide-react";


function Profile() {
  const specialties = [
    { name: "Women's Health", icon: "👩" },
    { name: "Skin Care", icon: "🧴" },
    { name: "Immunity", icon: "🛡️" },
    { name: "Hair Care", icon: "💇‍♀️" },
  ];

  const concerns = [
    "Skin Treatment",
    "Pregnancy",
    "Period Doubts",
    "Endometriosis",
    "Pelvic Pain",
    "Ovarian Cysts",
    "+ 5 More",
  ];

  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:15 AM",
    "10:45 AM",
    "11:00 AM",
    "04:00 PM",
    "04:30 PM",
    "04:30 PM",
    "04:45 PM",
    "05:15 PM",
  ];

  return (
    <div>
      <section className="container">
        <div className="w-[1100px] flex flex-col justify-center items-center mx-auto mt-8">
          <img
            src={frame}
            alt="Banner"
            className="w-[1100px] h-[100px] object-cover rounded-lg"
          />
          <div className="w-[1100px] h-[140px] mx-auto flex items-center justify-between bg-[#FFFBF2] p-9 border border-[#DCDCDC] rounded-b-lg">
            <div className="flex items-center gap-4">
              <div className="w-32 h-32 rounded-full overflow-hidden border-3 border-white translate-y-[-40px]">
                <img
                  src={doctor}
                  alt="Doctor profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-['Poppins']">Dr. Bruce Willis</h2>
                  <div className="bg-blue-600 text-white rounded-full p-1 w-4 h-4 flex items-center justify-center">
                    <Check size={12} />
                  </div>
                </div>
                <p className="text-sm text-[#3A643B] font-['Poppins']">
                  Gynecologist
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-[#626262] font-['Nunito'] font-semibold text-[12px]">
                    4.2
                  </span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={14}
                        className={
                          star <= 4
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center font-['Poppins'] ">
              <div className="flex gap-24">
                <div className="text-center">
                  <div className="text-sm text-gray-600">Followers</div>
                  <div className="font-semibold">850</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">Following</div>
                  <div className="font-semibold">18K</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">Posts</div>
                  <div className="font-semibold">250</div>
                </div>
              </div>
            </div>
            <button className="bg-[#3A643B] text-white px-4 py-2 rounded-md hover:bg-green-800 transition-colors font-['Inter']">
              Book an Appointment
            </button>
          </div>
        </div>
      </section>

      <section className="container  w-[1150px] mx-auto">
        <div className="w-full mx-auto p-7 flex gap-8">
          {/* Left Column */}
          <div className="w-1/2 space-y-8">
            <div className="border border-[#DCDCDC] rounded-2xl">
              <div className="flex justify-between items-center bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] px-5 py-3 border-x border-t rounded-t-2xl">
                <h2 className="text-xl font-semibold font-['Nunito']">
                  A Little About me
                </h2>
                <button className="px-4 py-1 border rounded-md text-sm border-[#3A643B] ">
                  Follow +
                </button>
              </div>

              <div className="space-y-4 px-7 mt-5">
                <div className="text-[12px] text-[#333548] font-['Poppins'] opacity-50 ">
                  MBBS | DGO (5+ Years of MCI) Is A Gynecologist Based In
                  Coimbatore. Worked as an intern with all my hospital staff and
                  mentor doctors. Completed my graduation in (gynaecologist)
                  medicine from the
                </div>
                <div className="flex items-center gap-4 w-full">
                  <div className="h-px bg-gray-300 flex-grow"></div>
                  <span className="text-gray-600 text-sm font-medium whitespace-nowrap underline">
                    Read More
                  </span>
                </div>
                <div className="flex gap-5">
                  <div className="text-sm font-medium">Language Spoken</div>
                  <div className="flex gap-5">
                    {["English", "Hindi", "Telugu"].map((lang) => (
                      <span
                        key={lang}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-5 flex gap-4">
                  <Facebook
                    className="border rounded-full p-1 mb-5 text-[#3A643B] font-thin"
                    size={40}
                    strokeWidth={1}
                  />
                  <Instagram
                    className="border rounded-full p-1 mb-5 text-[#3A643B] font-thin"
                    size={40}
                    strokeWidth={1}
                  />
                  <Youtube
                    className="border rounded-full p-1 mb-5 text-[#3A643B] font-thin"
                    size={40}
                    strokeWidth={1}
                  />
                  <Twitter
                    className="border rounded-full p-1 mb-5 text-[#3A643B] font-thin"
                    size={40}
                    strokeWidth={1}
                  />
                </div>
              </div>
            </div>

            <div className="border border-[#DCDCDC] rounded-2xl">
              <div className="flex justify-between items-center bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] px-5 py-3 border-x border-t rounded-t-2xl">
                <h2 className="text-xl font-semibold font-['Nunito']">
                  I Specialize In
                </h2>
              </div>
              <div className="grid grid-cols-4 gap-4 p-7 ">
                {specialties.map((specialty) => (
                  <div
                    key={specialty.name}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-xl">
                      {specialty.icon}
                    </div>
                    <span className="text-xs mt-2">{specialty.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-[#DCDCDC] rounded-2xl">
              <div className="flex justify-between items-center bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] px-5 py-3 border-x border-t rounded-t-2xl">
                <h2 className="text-xl font-semibold font-['Nunito']">
                  The Concerns I Treat
                </h2>
              </div>
              <div className="flex flex-wrap gap-3 p-7">
                {concerns.map((concern) => (
                  <span
                    key={concern}
                    className="px-4 py-1 bg-[#F7F7FC] rounded-full text-[#3A643B] text-sm font-semibold"
                  >
                    {concern}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-[#DCDCDC] rounded-2xl">
              <div className="flex justify-between items-center bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] px-5 py-3 border-x border-t rounded-t-2xl">
                <h2 className="text-xl font-semibold font-['Nunito']">
                  My Work Experience
                </h2>
              </div>
              <div className="space-y-4 p-7">
                <div className="flex gap-4">
                  <MapPin className="text-blue-600" />
                  <div>
                    <div className="font-medium">Mothern Medical Clinic</div>
                    <div className="text-sm text-gray-600">2016-PRESENT</div>
                    <div className="text-sm text-gray-600">Senior Doctor</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="text-blue-600" />
                  <div>
                    <div className="font-medium">Mothern Medical Clinic</div>
                    <div className="text-sm text-gray-600">2010-2016</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-[#DCDCDC] rounded-2xl">
              <div className="flex justify-between items-center bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] px-5 py-3 border-x border-t rounded-t-2xl">
                <h2 className="text-xl font-semibold font-['Nunito']">
                  Featured Reviews (102)
                </h2>
              </div>
              <div className="flex flex-wrap gap-3 p-7">
                {concerns.map((concern) => (
                  <span
                    key={concern}
                    className="px-4 py-1 bg-[#F7F7FC] rounded-full text-[#3A643B] text-sm font-semibold"
                  >
                    {concern}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-1/2 bg-gray-50 p-6 rounded-lg space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Appointment Fee</h3>
              <span className="text-xl font-semibold text-green-600">
                ₹699.00
              </span>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Select your mode of session</h4>
              <div className="flex gap-4">
                <button className="px-4 py-2 border rounded-lg flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <div>
                    <div>In-Clinic</div>
                    <div className="text-xs text-gray-500">45 Mins</div>
                  </div>
                </button>
                <button className="px-4 py-2 border rounded-lg bg-green-50 border-green-500 flex items-center gap-2">
                  <video className="w-4 h-4" />
                  <div>
                    <div>Video</div>
                    <div className="text-xs text-gray-500">45 Mins</div>
                  </div>
                </button>
                <button className="px-4 py-2 border rounded-lg flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <div>
                    <div>Chat</div>
                    <div className="text-xs text-gray-500">10 Mins</div>
                  </div>
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Pick a time slot</h4>
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-green-50 border-green-500 border rounded-lg text-sm">
                  Mon, 10 Oct
                  <div className="text-xs text-gray-500">10 slots</div>
                </button>
                <button className="px-4 py-2 border rounded-lg text-sm">
                  Tue, 11 Oct
                  <div className="text-xs text-gray-500">12 slots</div>
                </button>
                <button className="px-4 py-2 border rounded-lg text-sm">
                  Wed, 12 Oct
                  <div className="text-xs text-gray-500">8 slots</div>
                </button>
              </div>

              <div className="space-y-4">
                <h5 className="font-medium">Morning</h5>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.slice(0, 6).map((time) => (
                    <button
                      key={time}
                      className={`p-2 text-sm border rounded ${
                        time === "11:00 AM" ? "bg-green-600 text-white" : ""
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>

                <h5 className="font-medium">Evening</h5>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.slice(6).map((time) => (
                    <button key={time} className="p-2 text-sm border rounded">
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium">
              Make An Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;