import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [cart, setCart] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetch(`http://localhost:5000/cart/${user?.uid}`)
      .then((res) => res.json())
      .then((data) => {
        setCart(data.length);
        let totalPrice = [];
        data?.map((b) => {
          const price = b.price;
          totalPrice.push(price);
        });

        console.log(totalPrice);
        let itemPrice = 0;
        totalPrice?.forEach((price) => {
          return (itemPrice += parseInt(price));
        });

        setTotalPrice(itemPrice);
      });
  }, [user]);

  const navMenu = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/add-product">Add Product</NavLink>
      </li>
      <li>
        <NavLink to={`/cart/${user?.uid}`}>My Cart</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className=" bg-base-200">
        <div className="max-w-screen-xl mx-auto navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navMenu}
              </ul>
            </div>

            <img
              className="w-12"
              src="https://i.pinimg.com/originals/c4/04/ea/c404ea576696ef88ef2c3c861e7b0acd.gif"
              alt=""
            />
            <Link to="/" className=" ml-2  text-3xl">
              Baby Toys
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navMenu}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <>
                <div>
                  <div className="flex gap-5">
                    <div className="dropdown z-50 dropdown-end">
                      <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                          <span className="badge badge-sm indicator-item">
                            {cart}
                          </span>
                        </div>
                      </label>
                      <div
                        tabIndex={0}
                        className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                          <span className="font-bold text-lg">
                            {cart} Items
                          </span>
                          <span className="text-info">
                            Subtotal: {totalPrice}
                          </span>
                          <div className="card-actions">
                            <Link
                              to={`/cart/${user?.uid}`}
                              className="btn btn-primary btn-block">
                              View cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown dropdown-end">
                      <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar">
                        <div className="w-12 rounded-full">
                          <img src={user?.photoURL} />
                        </div>
                      </label>
                      <ul
                        tabIndex={0}
                        className="menu menu-lg dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                          <div className=" avatar ">
                            <img
                              className="w-24 rounded-full"
                              src={user?.photoURL}
                            />
                          </div>
                          <a className="justify-between">
                            {user.displayName}
                            <span className="badge">New</span>
                          </a>
                        </li>
                        <li>
                          <Link to="/dashboard">Dashboard</Link>
                        </li>

                        <li>
                          <div
                            className=" btn text-center bg-blue-300"
                            onClick={handleLogOut}>
                            Logout
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="btn">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
