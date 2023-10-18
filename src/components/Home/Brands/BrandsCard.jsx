import { useNavigate } from "react-router-dom";

const BrandsCard = ({ brand }) => {
  const { img, brandName } = brand;
  const navigate = useNavigate();

  const handleBrand = (brandName) => {
    console.log(brandName);
  };

  return (
    <div
      onClick={() => handleBrand(brandName)}
      className="text-center px-2 hover:scale-125  mx-auto">
      <img src={img} alt="" />
      <h3 className="md:text-xl text-sm">{brandName}</h3>
    </div>
  );
};

export default BrandsCard;
