
const Cover = ({ img, title }) => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("${img}")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5">The first and only Pencil Beam Proton Therapy centre in South Asia and Middle East
                        India's first and only JCI accredited Cancer hospital.
                        Ranked among the top cancer hospitals in the world by Newsweek USA
                        Fully integrated treatment suite that offers the most advanced treatment in surgical, radiation and medical oncology. True to the Apollo Pillars of Expertise and Excellence, the Centre brings together a powerful team of clinicians who are globally renowned in cancer care..</p>
                    <button className="btn btn-warning btn-outline border-0 border-b-4">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Cover;