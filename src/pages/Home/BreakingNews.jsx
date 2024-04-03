import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="bg-slate-200 p-3 my-5 rounded-xl flex items-center">
      <button className="btn btn-error  ">Breaking News</button>
      <div className="">
        <Marquee pauseOnHover={true}>
          <Link className="me-12" to={"/"}>
            I can be a React component, multiple React components, or just some
            text.
          </Link>
          <Link to={"/"} className="me-12">
            I can be a React component, multiple React components, or just some
            text.
          </Link>
          <Link to={"/"} className="me-12">
            I can be a React component, multiple React components, or just some
            text.
          </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
