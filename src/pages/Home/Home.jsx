import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
        <div className=" border-2">
          <LeftSideNav />
        </div>
        <div className="md:col-span-2 border-2">
          <div className="text-3xl">News Coming Soon</div>
        </div>
        <div className=" border-2">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
