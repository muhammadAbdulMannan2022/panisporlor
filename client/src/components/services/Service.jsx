import { Link } from "react-router-dom";

const Service = ({ service }) => {
  return (
    <Link
      to=""
      className="flex flex-col items-center justify-center bg-white shadow p-4 xl:p-8 h-[330px] hover:scale-[1.020] transition-all hover:cursor-pointer"
    >
      <div className="xl:w-[120px] w-[72px] mb-3">
        <img src={service.imageUrl} alt="icon" />
      </div>
      <h1 className="font-bold text-[#111430]">{service.name}</h1>
      <h1 className="text-[#F63E7B]">${service.price}</h1>
      <h1 className="text-gray-700 text-center">{service.description}</h1>
    </Link>
  );
};

export default Service;
