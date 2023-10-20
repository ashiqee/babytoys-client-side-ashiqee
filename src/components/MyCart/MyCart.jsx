import { useContext, useEffect } from "react";

import { AuthContext } from "../Provider/AuthProvider";
import { useState } from "react";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const MyCart = () => {
  // const [userId, setUserId] = useState(null);
  const loadCartData = useLoaderData();
  const [cart, setCart] = useState(loadCartData);

  const { user } = useContext(AuthContext);

  // useEffect(() => {
  //   if (user) {
  //     fetch(`http://localhost:5000/cart/${user.uid}`)
  //       .then((res) => res.json())
  //       .then((data) => setCart(data));
  //   }
  // }, [user]);

  const handleDeleteFormCart = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure remove this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Deleted Confirm");
        fetch(`http://localhost:5000/cart/${_id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Remove!",
                " Your Cart Product has been remove.",
                "success"
              );
              const remaining = cart.filter((c) => c._id !== _id);
              setCart(remaining);
            }
          });
      }
    });
  };

  return (
    <>
      {cart.length < 1 ? (
        <>
          {" "}
          <div className="max-w-7xl mx-auto p-10">
            <h2 className="text-center text-2xl p-5">Cart is Empty</h2>
          </div>
        </>
      ) : (
        <>
          <div className="max-w-7xl mx-auto p-10">
            <h2 className="text-center text-2xl p-5">Product List in Cart</h2>
            <h2>{user.displayName} Cart:</h2>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              {cart ? (
                <>
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          <span className="sr-only">Image</span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Product
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Qty
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Action
                        </th>
                      </tr>
                    </thead>
                    {cart.map((cartList) => (
                      <tbody key={cartList._id}>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td className="w-32 p-4">
                            <img
                              src={cartList?.productImage}
                              alt="Apple Watch"
                            />
                          </td>
                          <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            {cartList?.productName}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                              <div>{cartList?.quantityStart}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            {cartList?.price}
                          </td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() => {
                                handleDeleteFormCart(cartList?.productId);
                              }}
                              className="font-medium text-red-600 dark:text-red-500 hover:underline">
                              Remove
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </>
              ) : (
                <> no add cart </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MyCart;
