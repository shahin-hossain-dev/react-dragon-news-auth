import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div className="p-4 space-y-5">
      <div className="space-y-3">
        <h2 className="text-2xl ">Login With</h2>
        <button className="btn bg-sky-500 w-full text-white">
          <FaGoogle /> Continue with Google
        </button>
        <button className="btn bg-neutral-800 w-full text-white">
          <FaGithub /> Continue with Google
        </button>
      </div>
      {/* find us on  */}
      <div className="space-y-3">
        <h2 className="text-2xl ">Find Us On</h2>
        <div className=" ">
          <a
            href="https://facebook.com"
            target="_blank"
            className="p-4 flex items-center gap-3 border rounded-t-lg"
          >
            <FaFacebookF className="text-sky-600 inline" />
            Facebook
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            className="p-4 flex items-center gap-3 border-x "
          >
            <FaTwitter className="text-sky-600 inline" />
            Twitter
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            className="p-4 flex items-center gap-3 border rounded-b-lg"
          >
            <FaInstagram className="text-rose-500 inline" />
            Instagram
          </a>
        </div>
      </div>
      {/* Q-zone */}
      <div className="space-y-3">
        <h2 className="text-2xl ">Q-Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
