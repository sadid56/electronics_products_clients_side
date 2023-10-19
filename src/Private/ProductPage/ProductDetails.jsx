import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const loadedProduct = useLoaderData();
  const { image, name, brandName, categorieName, price, rating} = loadedProduct;

  const handleAddProduct = ()=>{
    fetch('http://localhost:5000/myCart',{
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
        alert('add success')
      }
    })
    .catch(error => {
      console.log('error', error);
    })
  }


  return (
    <div className="mt-10">
      <div className=" min-h-screen bg-base-200">
        <div className=" flex items-center gap-10">
          <div className="flex-1">
          <img
            src={image}
            className="w-full rounded-lg h-[400px]"
          />
          </div>
          <div className="flex-1 space-y-4 p-10">
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="text-3xl font-bold">Brane Name: {brandName}</p>
            <p className="text-2xl font-semibold text-gray-600">CategorieName: {categorieName}</p>
            <p className="font-medium text-gray-400">Price: ${price}</p>
            <p className="font-medium text-gray-400">Rating: {rating}</p>
            <button onClick={handleAddProduct} className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;