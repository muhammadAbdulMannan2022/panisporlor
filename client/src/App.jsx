import Banar from "./components/banar/Banar";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div className="w-full overflow-x-hidden xl:px-20">
      <div className="bg-[#E5E5E5] px-3">
        <Navbar />
        <Banar />
      </div>
      <Services />
    </div>
  );
};

export default App;
