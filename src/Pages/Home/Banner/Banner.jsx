import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/joel-muniz-3k3l2brxmwQ-unsplash.jpg'
import img2 from '../../../assets/luann-hunt-X20g2GQsVdA-unsplash.jpg'
import img3 from '../../../assets/ffggd.png.png'
import img4 from '../../../assets/login/gorin.png'
import img5 from '../../../assets/login/banner.png'
import img6 from '../../../assets/login/banner.png'
const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img className='rounded-lg' src={img2} />
                    <h2 className='-my-40 text-white text-2xl font-bold text-yellow-300'>Blood Donation</h2>
                </div>
                <div>
                    <img className='rounded-lg' src={img3} />
                    <h2 className='-my-40 text-white text-2xl font-bold'>Blood Donation</h2>
                </div>
                <div>
                    <img className='rounded-lg' src={img5} />
                    <h2 className='-my-40 text-white text-2xl text-yellow-400 font-bold'>Blood Donation</h2>
                </div>
                <div>
                    <img className='rounded-lg' src={img4} />
                    <h2 className='-my-40 text-white text-2xl font-bold text-yellow-400'>Blood Donation</h2>
                </div>
                <div>
                    <img className='rounded-lg' src={img1} alt="" />
                    <h2 className='-my-40 text-white text-2xl font-bold text-yellow-400'>Blood Donation</h2>
                </div>
                <div>
                    <img className='rounded-lg' src={img6} alt="" />
                    <h1 className='text-2xl font-bold text-yellow-300 -mt-10'>Blood Donation</h1>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;