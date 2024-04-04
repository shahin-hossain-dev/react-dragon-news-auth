import Header from "../shared/Header/Header";
import RightSideNav from "../shared/RightSideNav/RightSideNav";

const News = () => {
  return (
    <div>
      <Header />
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
