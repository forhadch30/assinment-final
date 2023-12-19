import { useEffect, useState } from "react";
import Health from "../Health";
import SectionTital from "../../../../Components/SectionTital/SectionTital";
const Healths = () => {
    const [titles, setTitle] = useState([])
    useEffect(() => {
        fetch('healths.json')
            .then(res => res.json())
            .then(data => setTitle(data))
    }, [])
    return (
        <div>
            <SectionTital
                heading={'choose healthy foods '}
                subHeading={'BEST FOODS'}
            >
            </SectionTital>
            <div className="grid grid:cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    titles.map(title => <Health key={title._id} title={title}></Health>)
                }
            </div>
        </div>
    );
};

export default Healths;