import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const newses = useLoaderData();
  console.log(newses);

  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
        <div className=" ">
          <LeftSideNav />
        </div>
        {/* news container */}
        <div className="md:col-span-2  p-5">
          {newses.map((news) => (
            <NewsCard key={news._id} news={news}></NewsCard>
          ))}
        </div>
        <div className=" ">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
