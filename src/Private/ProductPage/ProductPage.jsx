import { useLoaderData, useParams } from "react-router-dom";
import BrandSlider from "../../shared/BrandSlider/BrandSlider";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductPage = () => {
  const sliderData = useLoaderData();
  const { id } = useParams();
  const int = parseInt(id);
  const [slider, setSlider] = useState(null);
  const [products, setProducts] = useState([])
  const [finalProduct, setFinalProduct] = useState([])

  useEffect(() => {
    const slider = sliderData?.find((slider) => slider.id === int);
    setSlider(slider);
  }, [sliderData, id]);

  //! get product from database
  useEffect(()=>{
    fetch('http://localhost:5000/products')
  .then(res => res.json())
  .then(data => setProducts(data))
  },[])



    useEffect(()=>{
          const filterProducts = products.filter(BrandName => BrandName?.brandName?.toLowerCase() === slider?.brand_name?.toLowerCase());
          setFinalProduct(filterProducts)
    },[])

  return (
    <div>
       <BrandSlider slider={slider}></BrandSlider>
       {/* product container */}
       <div>
         {
          finalProduct.map(product => <div>
            <p>{product?.name}</p>
          </div>)
         }
       </div>
    </div>
  );
};

export default ProductPage;
