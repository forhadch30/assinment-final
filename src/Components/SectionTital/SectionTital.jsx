const SectionTital = ({ heading, subHeading }) => {
    return (
        <div className="md:w-4/12 text-center mx-auto ">
            <p className="my-8 text-primary mb-5 text-xl">{subHeading}</p>
            <h2 className="text-3xl font-bold my-5 uppercase">{heading}</h2>
        </div>
    );
};

export default SectionTital;