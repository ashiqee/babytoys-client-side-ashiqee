import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import "./brandSlider.css";

const BrandSlider = () => {
  return (
    <div>
      <div className="bg-blue-100 p-5">
        <div className="max-w-screen-2xl rounded-lg mx-auto">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <img
                className="max-h-[200px] rounded-lg md:min-h-[600px]  md:max-h-[600px]"
                src="https://thumbs.dreamstime.com/z/baby-kids-toys-frame-white-banner-background-many-colorful-educational-toys-top-view-flat-lay-baby-kids-toys-frame-244143378.jpg?w=992"
                alt=""
              />
              <div className="relative  right-52  md:right-72">
                <img
                  className="w-96 h-96"
                  src="https://i.pinimg.com/originals/8c/1d/ef/8c1def6c5ac57eb9e6624d87eb2ce818.gif"
                  alt=""
                />
                <h2 className="md:py-2 relative md:-right-24  text-white rounded-2xl w-28  px-2 bg-blue-400">
                  Shop Now
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  className="max-h-[200px] md:min-h-[600px]  md:max-h-[600px]"
                  src="https://img.genial.ly/5eaa95956fdd5064e137745f/0d72aeb2-95aa-4ddc-a12b-839bed347835.gif?genial&1681776000086"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-20 flex bg-opacity-50">
                {" "}
                <img
                  className="animate-bounce   max-h-[200px] md:min-h-[200px]  md:max-h-[600px]"
                  src="https://static.vecteezy.com/system/resources/previews/009/376/141/original/3d-basket-ball-illustration-png.png"
                  alt=""
                />
                <img
                  className="animate-spin hover:animate-bounce   max-h-[200px] md:min-h-[200px]  md:max-h-[600px]"
                  src="https://static.vecteezy.com/system/resources/previews/009/376/141/original/3d-basket-ball-illustration-png.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
