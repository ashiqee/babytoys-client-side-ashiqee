import { Link, useLoaderData } from "react-router-dom";
import BrandProductCard from "./BrandProductCard";

import Brands from "./Brands";
import PageHeader from "../../Shared/PageHeader";
import BrandSlider from "./BrandSlider";

const BrandProducts = () => {
  const brandProduct = useLoaderData();

  return (
    <div>
      {/* card  */}

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
            <BrandSlider />
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
              {brandProduct.map((product) => (
                <BrandProductCard key={product._id} toys={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandProducts;
