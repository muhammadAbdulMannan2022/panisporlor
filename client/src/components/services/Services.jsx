import { useState } from "react";
import Service from "./Service";
import { Link } from "react-router-dom";

const Services = () => {
  const [searvices, setSearvices] = useState([]);
  setTimeout(() => {
    setSearvices([
      {
        _id: "1",
        imageUrl: "https://i.ibb.co/g45RqmK/Group-1374.png",
        name: "Skin Care Treatment",
        price: 299,
        description:
          "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
      },
      {
        _id: 2,
        imageUrl: "https://i.ibb.co/GtLQJ8J/Group-1373.png",
        name: "Anti Age Face Treatment",
        price: 199,
        description:
          "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
      },
      {
        _id: 3,
        imageUrl: "https://i.ibb.co/V3BVGmF/Group-1372.png",
        name: "Hair Color & Styleing",
        price: 99,
        description:
          "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
      },
    ]);
  }, 0);
  return (
    <div className="bg-white px-8 xl:px-20 py-10 xl:py-16 flex flex-col items-center">
      <h1 className="font-bold text-3xl md:text-4xl xl:text-6 mb-10">
        Our Awsome <span className="text-[#F63E7B]">Services</span>
      </h1>
      <div className="flex flex-col gap-4 md:flex-row mb-10">
        {searvices.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
      <div>
        <button>
          <Link className="bg-[#F63E7B] py-1 px-4 rounded text-white">
            Explore more
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Services;
