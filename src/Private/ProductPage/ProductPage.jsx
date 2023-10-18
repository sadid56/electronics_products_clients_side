import { useLoaderData, useParams } from "react-router-dom";
import BrandSlider from "../../shared/BrandSlider/BrandSlider";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProductPage = () => {
  const sliderData = useLoaderData();
  const { id } = useParams();
  const int = parseInt(id);
  console.log("id", id);
  const [slider, setSlider] = useState(null);

  useEffect(() => {
    const slider = sliderData?.find((slider) => slider.id === int);
    setSlider(slider);
  }, [sliderData, id]);

  console.log(slider);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <div className="hero min-h-[80vh]">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="flex-1">
              <img
                src={slider?.brand_slider_image[0]}
                className="max-w-md rounded-lg h-[400px] w-full"
              />
              </div>
              <div className="flex-1">
                <h1 className="text-5xl font-bold">{slider?.Brand_offer[0]}</h1>
                <p className="py-6 text-gray-400">
                  {slider?.Brand_details[0]}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
        <div className="hero min-h-[80vh]">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="flex-1">
              <img
                src={slider?.brand_slider_image[1]}
                className="max-w-md rounded-lg h-[400px] w-full"
              />
              </div>
              <div className="flex-1">
                <h1 className="text-5xl font-bold">{slider?.Brand_offer[1]}</h1>
                <p className="py-6 text-gray-400">
                  {slider?.Brand_details[1]}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
        <div className="hero min-h-[80vh]">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="flex-1">
              <img
                src={slider?.brand_slider_image[2]}
                className="max-w-md rounded-lg h-[400px] w-full"
              />
              </div>
              <div className="flex-1">
                <h1 className="text-5xl font-bold">{slider?.Brand_offer[2]}</h1>
                <p className="py-6 text-gray-400">
                  {slider?.Brand_details[2]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ProductPage;
