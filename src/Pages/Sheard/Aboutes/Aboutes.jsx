import { useEffect } from "react";
import { useState } from "react";
import About from "./About";
import SectionTital from "../../../Components/SectionTital/SectionTital";
const Aboutes = () => {
    const [raja, setRaja] = useState([]);
    useEffect(() => {
        fetch('aboute.json')
            .then(res => res.json())
            .then(data => setRaja(data))
    }, [])

    return (
        <div className="mt-10">
            <SectionTital 
            subHeading={'operation theatre'}
            >
            </SectionTital>
            <div className="grid grid:cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    raja.map(item => <About key={item._id} item={item}></About>)
                }
            </div>
        </div>
    );
};

export default Aboutes;