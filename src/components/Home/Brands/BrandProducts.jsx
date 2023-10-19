import { useLoaderData } from "react-router-dom";
import BrandProductCard from "./BrandProductCard";

const BrandProducts = () => {
  const brandProduct = useLoaderData();

  return (
    <div className="lg:max-w-screen-2xl md:max-w-screen-lg mx-auto">
      {brandProduct.length}
      <div className="grid grid-cols-4">
        {brandProduct.map((product) => (
          <BrandProductCard key={product._id} toys={product} />
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;
