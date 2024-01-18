import Banar from "./components/banar/Banar";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div className='w-full overflow-x-hidden bg-[#E5E5E5] px-3 xl:px-20'>
      <Navbar/>
      <Banar/>
    </div>
  );
};

export default App;