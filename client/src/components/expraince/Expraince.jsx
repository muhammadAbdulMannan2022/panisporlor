import Facepack from "../../assets/images/facepack.png";
const Expraince = () => {
  return (
    <div className="flex gap-6 py-10 md:py-14 flex-col md:flex-row px-5">
      <div className="flex-1">
        <img src={Facepack} alt="facepack" />
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-bold md:text-4xl xl:text-6xl mb-5 md:mb-4">
          Let us handle your <br />
          screen<span className="text-[#F63E7B]"> Professionally</span>.
        </h1>
        <h1 className="text-gray-700 mb-3 md:mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero dolor
          totam ad aliquam rem placeat dolores! Nam explicabo modi nesciunt,
          excepturi dignissimos optio illo quibusdam iste culpa sit quidem
          molestiae!
        </h1>
        <div className="flex gap-10">
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="text-3xl xl:text-6xl text-[#F63E7B] font-bold">
              500+
            </h1>
            <h1>Happy Customr</h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="text-3xl xl:text-6xl text-[#F63E7B] font-bold">
              16+
            </h1>
            <h1>Total Service</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expraince;
