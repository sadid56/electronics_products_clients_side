const Contact = () => {
    return ( 
        <div>
            <h3 className="text-3xl font-bold text-center my-10">Contact Us</h3>
        <div className=" p-5 border rounded-md">
            
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row-reverse gap-24">
            {/* conatct form */}
            <div className=" relative -top-10   p-10" data-aos="fade-left">
            <h1 className="text-3xl font-bold uppercase  my-5 ">Any Question to contact us</h1>
            <div className="flex items-center gap-3">
            <input type="text" placeholder="Name" className="input input-bordered input-info w-full max-w-xs" />
            <input type="email" placeholder="Email" className="input input-bordered input-info w-full max-w-xs" />
                    
            </div>
            <input type="text" placeholder="Subject" className="input input-bordered input-info w-full mt-3" /><br />
            <textarea className="textarea textarea-info mt-3 w-full" placeholder="Message"></textarea>

            <button className="bg-[#1fabe0] px-4 py-2 font-semibold rounded-md text-white hover:bg-[#29d8f0]">Sent Message</button>


            </div>
            <div className="flex-1 space-y-4 px-5" data-aos="fade-right">
                
                <div className="flex items-center gap-5">
                <i class="fa-solid fa-location-dot text-4xl text-[#29d8f0]"></i>
                <div>
                    <h2 className="text-2xl font-semibold uppercase">Our Address</h2>
                    <p className="font-medium text-gray-400">Mirpur 10</p>
                    <p className="font-medium text-gray-400">Dhaka</p>
                </div>
                </div>
                <div className="flex items-center gap-5">
                <i class="fa-solid fa-phone text-4xl text-[#29d8f0]"></i>
                <div>
                    <h2 className="text-2xl font-semibold uppercase">Phone number</h2>
                    <p className="font-medium text-gray-400">Mobile: 01739 859756</p>
                    <p className="font-medium text-gray-400">Hotline: 4636 546</p>
                </div>
                </div>
                <div className="flex items-center gap-5">
                <i class="fa-regular fa-envelope text-4xl text-[#29d8f0]"></i>
                <div>
                    <h2 className="text-2xl font-semibold uppercase">Email</h2>
                    <p className="font-medium text-gray-400">brand@gmail.com</p>
                </div>
                </div>

                
            </div>
        </div>
      
    </div>
        </div>
     );
}
 
export default Contact;