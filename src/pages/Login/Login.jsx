import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { userSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state.pathname);
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget); //form কে পাওয়ার জন্য e.currentTarget
    const form = new FormData(e.currentTarget); // new FormData(e.currentTarget) দিলে  data িএকটা object এর মধ্যে আসবে।
    const email = form.get("email"); // form function variable কে form.get() দিয়ে input field name দিলে value পাওয়া যাবে।
    const password = form.get("password");
    console.log(email, password);

    // sign in user
    userSignIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(location.state?.pathname || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="w-1/2 mx-auto mt-10">
        <div className="w-full">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Please Login!</h1>
          </div>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center">
            Don&apos;t Have an Account? Please{" "}
            <Link to={"/register"} className=" link link-hover link-primary">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
