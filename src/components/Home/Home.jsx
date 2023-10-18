import Products from "./Products/Products";
import Slider from "./Slider";
import MiniBanner from "./miniBanner";

const Home = () => {
  return (
    <div>
      <Slider />
      <MiniBanner />
      <div className="max-w-screen-2xl mx-auto">
        <Products />
      </div>
    </div>
  );
};

export default Home;
