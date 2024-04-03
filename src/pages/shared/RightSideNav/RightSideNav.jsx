import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
const RightSideNav = () => {
  return (
    <div className="p-4 space-y-4">
      <div className="space-y-3">
        <h2 className="text-2xl text-center">Login With</h2>
        <button className="btn bg-sky-500 w-full text-white">
          <FaGoogle /> Continue with Google
        </button>
        <button className="btn bg-neutral-800 w-full text-white">
          <FaGithub /> Continue with Google
        </button>
      </div>
      <div className="space-y-3">
        <h2 className="text-2xl text-center">Find Us On</h2>
        <div className=" ">
          <a
            href="https://facebook.com"
            target="_blank"
            className="p-4 flex items-center gap-3"
          >
            <FaFacebookF className="text-sky-800 inline" />
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
