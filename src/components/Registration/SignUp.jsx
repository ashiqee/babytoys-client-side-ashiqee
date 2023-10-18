import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const user = { name, email, password };
    console.log(user);

    if (password.length < 6) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Your password must six digit!",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Your password must need one Capital Letter",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    } else if (
      !/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{6,}/.test(
        password
      )
    ) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Your password must need one special character!",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch(() => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Already Sign Up! Please Login",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div>
      <div className="hero min-h-[90vh] bg-base-200">
        <div className="flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              Create your Baby Toys Account!
            </h1>
            <p className="text-right">
              <span> Already have an account? </span>
              <Link
                to="/login"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Login here
              </Link>
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your first and last name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              </div>
              <div className="flex items-center ">
                <input className="" type="checkbox" name="checked" required />
                <p>Terms and Conditons</p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
