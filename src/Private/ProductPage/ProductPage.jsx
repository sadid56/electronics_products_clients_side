import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import BrandSlider from "../../shared/BrandSlider/BrandSlider";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductPage = () => {
  const sliderData = useLoaderData();
  const { id } = useParams();
  const int = parseInt(id);
  const navigate = useNavigate()
  const [slider, setSlider] = useState(null);
  const [products, setProducts] = useState([])
  const [finalProduct, setFinalProduct] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const slider = sliderData?.find((slider) => slider.id === int);
    setSlider(slider);
  }, [sliderData, id]);

  //! get product from database
  useEffect(()=>{
    fetch('https://assignment10-server-side-a53vmkns1-sadids-projects.vercel.app/products')
  .then(res => res.json())
  .then(data => {
    setProducts(data)
    setLoading(false)
  })
  .catch(error =>{
    console.log('error',error);
    setLoading(false)
  })
  
  },[])


    useEffect(()=>{
          if(!loading && slider && products.length > 0){
            const filterProducts = products.filter(BrandName => BrandName?.brandName?.toLowerCase() === slider?.brand_name?.toLowerCase());
          setFinalProduct(filterProducts)
          }
    },[slider, products, loading])

  return (
    <div>
       <BrandSlider slider={slider}></BrandSlider>
       {/* product container */}
       {
        loading ? <p>Loading...</p>
        :
        <div>
          <h2 className="text-4xl font-semibold text-center my-10">Our brand products</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
         {
          finalProduct.map(product => 
            <div key={product._id} class="flex flex-col items-center  border rounded-lg shadow md:flex-row md:max-w-xl">
                <img class="object-cover w-full  h-96 md:h-auto md:w-48 rounded-md" src={product?.image}/>
                <div class="flex flex-col justify-between p-4 leading-normal space-y-3">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product?.name}</h5>
                    <p class="text-2xl font-semibold text-gray-600 ">Brand Name: {product?.brandName}</p>
                    <p className="text-xl font-semibold">CategorieName: {product?.categorieName}</p>
                    <div className="flex items-center gap-4">
                    <p className="text-gray-400 font-medium">Price: ${product?.price}</p>
                    <p className="text-gray-400 font-medium">Rating: {product?.rating}</p>
                    </div>
                    <div className="flex items-center gap-3 mt-5">
                    <button onClick={()=>navigate(`/productDetails/${product._id}`)} className="btn btn-outline">Details</button>
                      <button onClick={()=>navigate(`/updateProduct/${product._id}`)} className="btn btn-outline"><i class="fa-solid fa-pen-nib"></i></button>
                     
                    </div>
                </div>
            </div>
            )
         }
       </div>
        </div>
       }
    </div>
  );
};

export default ProductPage;
