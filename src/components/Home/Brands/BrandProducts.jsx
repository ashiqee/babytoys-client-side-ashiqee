import { Link, useLoaderData } from "react-router-dom";
import BrandProductCard from "./BrandProductCard";

import Brands from "./Brands";

import BrandSlider from "./BrandSlider";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const BrandProducts = () => {
  const [loading, setLoading] = useState(true);
  const [brands, setBrand] = useState();
  const [dataBrand, setDataBrand] = useState();
  const brandProduct = useLoaderData();

  useEffect(() => {
    fetch(`http://localhost:5000/brand/`)
      .then((res) => res.json())
      .then((data) => {
        const filterData = data.filter((b) => b.brandName === dataBrand);
        if (filterData.length >= 1) {
          setLoading(false);
        }

        setBrand(filterData);
      });
  }, [dataBrand]);

  useEffect(() => {
    brandProduct?.map((p) => {
      console.log("setData");
      setDataBrand(p?.brand);
    });
  }, []);

  return (
    <div>
      {/* card  */}
      {loading ? (
        <span className="loading  loading-ball loading-xs"></span>
      ) : (
        <div className="lg:max-w-screen-2xl md:max-w-screen-lg max-w-lg mx-auto">
          {brandProduct.length < 1 ? (
            <>
              <div className="text-center p-24">
                <h2 className="text-3xl text-rose-700">
                  This Brand Product Not Available
                </h2>
              </div>
              <h3 className="text-2xl p-10 text-center bg-yellow-100 text-black">
                Please Shop Other Brands Products{" "}
              </h3>
              <Brands />
            </>
          ) : (
            <div>
              {brands.map((brand) => (
                <BrandSlider key={brand._id} brand={brand} />
              ))}

              <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
                {brandProduct.map((product) => (
                  <BrandProductCard key={product._id} toys={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BrandProducts;
