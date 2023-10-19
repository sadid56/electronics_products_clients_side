const Banner = () => {
  return (
    <div>
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row-reverse">
         <div className="">
         <img 
            src="https://i.ibb.co/zXYB1Y5/pexels-nadine-ginzel-8864331-removebg-preview.png"
            className=""
          />
         </div>
          <div className="flex-1">
            <h1 className="text-5xl font-bold">The brand new Electronics products !!</h1>
            <p className="py-6">
              Our all product is a brand new and trusted seller, any product a similler price and best services in bangladesh.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
