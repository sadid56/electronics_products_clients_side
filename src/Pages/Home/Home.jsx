import Banner from "../../statics/Banner/Banner";
import BrandName from "../BrandName/BrandName";
import CustomarRivew from "../CustomarRivew/CustomarRiew";
import Contact from "../contact/Contact";

const Home = () => {
    return (  
        <div>
           <Banner/>
           <div className="max-w-6xl mx-auto">
           <BrandName/>
           <CustomarRivew/>
           <Contact></Contact>
           </div>
        </div>
     );
}
 
export default Home;