import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Hospital from "../Hospital/Hospital";
import Services from "../Services/Services";
import Details from "./Details";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Hospital | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Services></Services>
            <Hospital></Hospital>
            <Details></Details>
        </div>
    );
};

export default Home;