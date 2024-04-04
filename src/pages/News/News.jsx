import { useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Navbar from "../shared/Navbar/Navbar";

const News = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <Header />
      <Navbar />
      <h2>Dragon News</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="lg:col-span-3"></div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
