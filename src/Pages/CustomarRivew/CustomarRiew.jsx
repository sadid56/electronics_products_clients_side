import { useEffect, useState } from "react";
import { json, useLoaderData } from "react-router-dom";

const CustomarRivew = () => {
  const [reviws, setReviws] = useState([]);
  // const reviws = useLoaderData()
  // console.log(reviws);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviws(data));
  }, []);

  return (
    <div>
      <h3 className="text-4xl font-bold text-center my-10">Best Reviews</h3>
      <div className="grid grid-cols-3 gap-5">
        {reviws.map((reviw) => (
          <div className="card   border rounded-md p-3">
           <div className="flex items-center">
           <div className="avatar flex  flex-col">
              <div className="w-24 h-24 rounded-full">
                <img src={reviw?.author_image}/>
                
              </div>
              <h2 className="text-2xl font-semibold">{reviw?.author_name}</h2>
            </div>
            <div className="card-body items-center text-center">
              <p className="text-gray-500 font-medium">{reviw?.description}</p>
              <p className="text-gray-400 font-medium">{reviw?.date}</p>
            </div>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomarRivew;
