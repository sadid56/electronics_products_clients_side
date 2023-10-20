
import Slider from "react-slick";

const BrandSlider = ({slider}) => {
    
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
  return (
    <div className="overflow-y-hidden">
      <Slider {...settings}>
        <div>
          <div className="hero min-h-[80vh] ">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="flex-1">
              <img
                src={slider?.brand_slider_image[0]}
                className="max-w-md rounded-lg h-[400px] w-full"
              />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl md:text-5xl font-bold">{slider?.Brand_offer[0]}</h1>
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
                <h1 className="text-3xl md:text-5xl font-bold">{slider?.Brand_offer[1]}</h1>
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
                <h1 className="text-3xl md:text-5xl font-bold">{slider?.Brand_offer[2]}</h1>
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

export default BrandSlider;

                  
