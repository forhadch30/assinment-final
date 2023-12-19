import { useEffect, useState } from "react";
import Service from "./Service";
import SectionTital from "../../../Components/SectionTital/SectionTital";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div>
                <SectionTital
                    heading="owner md forhad ahmed"
                    subHeading="HOSPITAL SERVICES"
                >
                </SectionTital>
            </div>
            <div className="grid grid:cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;