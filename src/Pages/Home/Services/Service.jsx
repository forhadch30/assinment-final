
const Service = ({ service }) => {
    const { image, price, name, donor, category, _id } = service;
    return (
        <div>
            <div className="card card-compact w-74 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{category}</p>
                    <p>{donor}</p>
                    <p>${price}</p>
                    <div className="card-actions">
                        <button className="btn btn-outline btn-primary">DETAILS</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;