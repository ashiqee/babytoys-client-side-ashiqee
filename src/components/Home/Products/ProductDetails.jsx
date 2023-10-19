import { useState } from "react";
import Rating from "react-rating";

// import { FaBeer } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import PageHeader from "../../Shared/PageHeader";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
const ProductDetails = () => {
  const toyDetails = useLoaderData();
  const [quantityStart, setQuantity] = useState(1);

  const { user } = useContext(AuthContext);

  const {
    _id,
    productImage,
    productName,
    brand,
    price,
    description,
    category,
    rating,
  } = toyDetails;

  const handleAddToCart = (productId) => {
    //send cart data to server
    const userId = user.uid;

    const userCart = { productId, userId };

    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userCart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success",
            text: "Product Added to Cart Successfully",
            icon: "success",
            confirmButtonText: "Add more",
          });
        }
      });
  };

  return (
    <div>
      <PageHeader toyDetails={toyDetails} />
      <div className="max-w-7xl mx-auto">
        <a
          href="#"
          className="flex flex-col  bg-white gap-16 border-gray-200 rounded-lg shadow md:flex-row
         md:max-w-full mx-auto dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="object-fit min-h-[40vh] md:max-w-[60vh] mx-4  rounded-t-lg    rounded-lg"
            src={productImage}
            alt=""
          />
          <div className="flex flex-col border justify-items-start  p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {productName}
            </h5>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {brand}
            </h5>

            <div>
              <Rating />
              {/* <Rating
                stop={6}
                emptySymbol={[
                  "fa fa-star-o fa-2x low",
                  "fa fa-star-o fa-2x low",
                  "fa fa-star-o fa-2x medium",
                  "fa fa-star-o fa-2x medium",
                  "fa fa-star-o fa-2x high",
                  "fa fa-star-o fa-2x high",
                ]}
                fullSymbol={[
                  "fa fa-star fa-2x low",
                  "fa fa-star fa-2x low",
                  "fa fa-star fa-2x medium",
                  "fa fa-star fa-2x medium",
                  "fa fa-star fa-2x high",
                  "fa fa-star fa-2x high",
                ]}
              /> */}
            </div>

            <p className="mb-3 text-xl font-bold text-gray-700 dark:text-gray-400">
              ৳ {price}
            </p>

            <p className="mb-3 font-normal max-w-[40vh] text-gray-700 dark:text-gray-400">
              {description.slice(0, 100)}
            </p>

            <div className="flex items-center gap-10">
              <div>
                <label>Quantity</label>
                <div className="flex items-center rounded-lg justify-between border w-28">
                  <button
                    className="p-2 text-xl"
                    onClick={() =>
                      setQuantity((count) => {
                        if (count >= 0) {
                          return (count = 1);
                        }
                        count - 1;
                      })
                    }>
                    -
                  </button>
                  <h2 className="text-2xl">{quantityStart}</h2>
                  <button
                    className="p-2 text-xl"
                    onClick={() => setQuantity((count) => count + 1)}>
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => handleAddToCart(_id)}
                className="btn mt-6 bg-blue-300">
                {" "}
                Add Cart
              </button>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProductDetails;
