import { Link } from "react-router-dom";
const Health = ({ title }) => {
    const { image, price, name } = title;
    return (
        <div>
            <div className="card w-74 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{price}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary"><Link to="/login">Health</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Health;