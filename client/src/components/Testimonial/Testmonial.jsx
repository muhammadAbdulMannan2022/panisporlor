import { FaStar, FaRegStar } from "react-icons/fa";
const Testmonial = ({
  review: { _id, name, image, date_of_review, review, comment },
}) => {
  return (
    <div className="w-[250px] h-[300px] shadow p-4">
      <div className="relative h-full">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
            <img className="" src={image} alt={name} />
          </div>
          <div>
            <h1 className="font-bold">{name}</h1>
            <h1 className="text-sm">{date_of_review}</h1>
          </div>
        </div>
        <div>
          <h1 className="text-wrap" title={comment}>
            {comment}
          </h1>
        </div>
        <div className="flex font-bold items-center absolute bottom-0 mt-5">
          {Array.from({ length: 5 }, (_, index) =>
            index < review ? (
              <FaStar key={index} className="text-[#FFAC0C]" />
            ) : (
              <FaRegStar key={index} className="text-[#FFAC0C]" />
            )
          )}{" "}
          <p className="ms-2">{review}</p>
        </div>
      </div>
    </div>
  );
};

export default Testmonial;
