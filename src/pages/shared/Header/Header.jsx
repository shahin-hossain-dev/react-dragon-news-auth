import logo from "../../../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-3 py-5">
      <img src={logo} alt="" />
      <p className="text-xl">Journalism Without Fear or Favour</p>
      <p className="text-xl">{moment().format("dddd, MMMM D, YYYY ")}</p>
    </div>
  );
};

export default Header;
