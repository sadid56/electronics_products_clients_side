const Banner = () => {
  return (
    <div className="bg-[#176B87] ">
      <div className="hero max-w-6xl mx-auto">
        <div className="hero-content flex-col items-center lg:flex-row-reverse">
         <div className="flex-1">
         <img 
            src="https://i.ibb.co/7WtTbTQ/istockphoto-163141248-612x612-removebg-preview.png"
            className=""
          />
         </div>
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-white">The brand new <span className="text-[#132043]">Electronics products !!</span></h1>
            <p className="py-6 text-gray-400">
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
