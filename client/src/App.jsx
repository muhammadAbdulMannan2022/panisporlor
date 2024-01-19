import Testmonials from "./components/Testimonial/Testmonials";
import Banar from "./components/banar/Banar";
import Expraince from "./components/expraince/expraince";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div className="w-full xl:px-20">
      <div className="bg-[#E5E5E5] px-3">
        <Navbar />
        <Banar />
      </div>
      <Services />
      <div className="bg-[#E5E5E5] px-3">
        <Expraince />
      </div>
      <Testmonials />
    </div>
  );
};

export default App;
