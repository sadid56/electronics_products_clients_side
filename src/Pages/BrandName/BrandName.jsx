import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const BrandName = () => {
    const [brandeNames, setBrandeName] = useState([]);
    const navigate = useNavigate()
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBrandeName(data))
    },[])
    // const brandeNames = useLoaderData()
    return ( 
        <div>
            <h3 className="text-4xl font-bold text-center my-5">Our brands</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    brandeNames.map(brandeName => <div key={brandeName.id} onClick={()=>navigate(`/productPage/${brandeName.id}`)} className="card card-compact border-2 rounded-md">
                    <figure><img src={brandeName?.thumbnail} className="h-[300px] w-full rounded-md"/></figure>
                    <div className="card-body">
                      <h2 className="card-title text-4xl font-semibold">{brandeName?.brand_name}</h2>
                      
                    </div>
                  </div>)
                }
            </div>
        </div>
     );
}
 
export default BrandName;