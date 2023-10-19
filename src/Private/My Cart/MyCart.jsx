import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const MyCart = () => {
    const loadMyCartsData = useLoaderData()
    const [Mycarts, setMyCart] = useState(loadMyCartsData)

    // const { image, name, brandName, categorieName, price, rating} = loadMyCartData;

    //! delete item
    const handleDelete = (id)=>{
        fetch(`http://localhost:5000/myCart/${id}`,{
            method: 'delete'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
           if(data.deletedCount === 1){
            alert('delete success')
           }
           const remaining = loadMyCartsData.filter(cartsData => cartsData._id !== id);
           setMyCart(remaining)
        })
    }


    return ( 
        <div>
            <h2 className="text-center my-5 text-3xl font-semibold">My total cart: {Mycarts.length}</h2>
            <div className="grid grid-cols-2 gap-5">
                {
                    Mycarts.map(myCart => <div key={myCart._id} class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row gap-5 p-3">
                    <div className="flex-1 ">
                    <img class="object-cover w-full rounded md:h-60  " src={myCart?.image}/>
                    </div>
                    <div class="flex flex-1 flex-col justify-between leading-normal space-y-3">
                        <div className="flex justify-end">
                            <button onClick={()=>handleDelete(myCart._id)}><i class="fa-solid fa-trash text-xl text-red-400"></i></button>
                        </div>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{myCart?.name}</h5>
                        <p class="text-2xl font-semibold text-gray-600 ">Brand Name: {myCart?.brandName}</p>
                        <p className="text-xl font-semibold">CategorieName: {myCart?.categorieName}</p>
                        <p className="text-gray-400 font-medium"> {myCart?.description}</p>
                        <div className="flex items-center gap-4">
                        <p className="text-gray-400 font-medium">Price: ${myCart?.price}</p>
                        <p className="text-gray-400 font-medium">Rating: {myCart?.rating}</p>
                        </div>
                        
                    </div>
                </div>)
                }
            </div>
        </div>
     );
}
 
export default MyCart;