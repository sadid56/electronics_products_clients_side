import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const loadedProduct = useLoaderData();
  const { image, name, brandName, categorieName, price, rating} = loadedProduct;

  const handleAddProduct = ()=>{
    fetch('https://assignment10-server-side-a53vmkns1-sadids-projects.vercel.app/myCart',{
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(loadedProduct)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.acknowledged === true){
        Swal.fire({
          title: 'Add to cart success',
          text: 'You have added this cart',
          icon: 'success',
          confirmButtonText: 'ok'
        })
      }
    })
    .catch(error => {
      console.log('error', error);
    })
  }


  return (
    <div className="mt-10  bg-[#176B87] p-10">
      <div className="max-w-6xl mx-auto">
        <div className=" flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
          <img
            src={image}
            className="w-full rounded-lg h-[400px]"
          />
          </div>
          <div className="flex-1 space-y-4 p-10">
            <h1 className="text-5xl font-bold text-white">{name}</h1>
            <p className="text-3xl font-bold text-[#132043]">Brane Name: {brandName}</p>
            <p className="text-2xl font-semibold text-[#132043]">CategorieName: {categorieName}</p>
            <p className="font-medium text-gray-300">Price: ${price}</p>
            <p className="font-medium text-gray-300">Rating: {rating}</p>
            <button onClick={handleAddProduct} className="btn normal-case border-none text-white text-xl bg-gradient-to-r from-purple-500 to-pink-500">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
