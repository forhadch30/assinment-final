import ReactiveButton from 'reactive-button';
const About = ({ item }) => {
    const { image, name, donor, } = item;
    const handleDetails = food => {
        console.log(food)
    }
    return (
        <div className="card w-74 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{donor}</p>
                <div className="card-actions">
                    <ReactiveButton onClick={() => handleDetails(item)} color="green outline" />
                </div>
            </div>
        </div>
    );
};

export default About;