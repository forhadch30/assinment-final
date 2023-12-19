import SectionTital from "../../../Components/SectionTital/SectionTital";
import hospital from '../../../assets/national-cancer-institute-1c8sj2IO2I4-unsplash.jpg'
import './Hopital.css'
const Hospital = () => {
    return (
        <div className="hospital-category bg-fixed pt-10 my-20 ">
            <SectionTital
                heading="hospital home gorund"
                subHeading="HOSPITAILS RELETEDE WORK"
            ></SectionTital>
            <div className="md:flex bg-slate-500 bg-opacity-40 justify-center items-center py-20 px-36">
                <div>
                    <img className="rounded" src={hospital} alt="" />
                </div>
                <div className="md:ml-10 text-white">
                    <p>Dec 16, 1985</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Singapore, often referred to as India's "Silicon Valley," is increasingly gaining recognition as a significant hub for medical tourism. Boasting a robust healthcare infrastructure equipped with state-of-the-art medical facilities, the city is a magnet for international patients seeking high-quality, yet cost-effective medical treatments. Apollo Hospitals offers a wide range of specialized medical services, from cardiology and oncology to cosmetic , .!</p>
                    <button className="btn btn-outline btn-secondary border-0 border-b-4 mt-5 btn-outline border-0 border-b-4">Details Now</button>
                </div>
            </div>
        </div>
    );
};

export default Hospital;