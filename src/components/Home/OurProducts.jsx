import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import product1 from '../../assets/imgs/home/product1.png';
import product2 from '../../assets/imgs/home/product2.png';
import product3 from '../../assets/imgs/home/product3.png';
import product4 from '../../assets/imgs/home/product4.png';
import product5 from '../../assets/imgs/home/product5.png';
import product6 from '../../assets/imgs/home/product6.png';
import product7 from '../../assets/imgs/home/product7.png';

const products = [
    {
        title: "Live Shopping",
        description: "Boost conversions with live shopping—blend real-time product",
        image: product1,
        path: "/products/live-shopping",
    },
    {
        title: "Live Edutainment",
        description: "Make learning fun and interactive with live trivia, polls, and quizzes.",
        image: product2,
        path: "/products/live-edutainment",
    },
    {
        title: "Pixalive Grow",
        description: "Pixalive Grow helps you easily build, market, and manage your business.",
        image: product3,
        path: "/products/pixalive-work",
    },
    {
        title: "Interactive Webinars",
        description: "Host engaging webinars to connect with your audience.",
        image: product4,
        path: "/products/interactive-branching",
    },
    {
        title: "Interactive Shoppable",
        description: "Enhance your customers’ shopping journey with interactive shoppable videos.",
        image: product5,
        path: "/products/interactive-videos",
    },
    {
        title: "Social  Live  Streaming",
        description: "Make live streams more engaging with real-time features",
        image: product6,
        path: "/products/live-streaming",
    },
    {
        title: "Pixalive Commerce",
        description: "Launch your own multi-vendor marketplace with Pixalive’s powerful mobile app",
        image: product7,
        path: "/products/pixalive-commerce", // or a separate route if applicable
    },
];

const OurProducts = () => {
    const navigate = useNavigate();

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-12 bg-white h-[512px] max-w-[1280px] mx-auto mb-6">
            <div className="max-w-7xl mx-auto">
                <h4 className="text-black text-sm font-[20px]-medium mb-1">Our Products</h4>
                <h2 className="text-3xl sm:text-4xl font-normal mt-6 text-gray-900 mb-6">
                    A Solution For Every Need
                </h2>

                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={20}
                    slidesPerView={1.2}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    allowTouchMove={false}
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={index}>
                            <div
                                onClick={() => navigate(product.path)}
                                className="bg-white mt-6 cursor-pointer overflow-hidden border border-gray-300 p-3 hover:shadow-lg transition-shadow duration-300"
                                style={{ height: '350px' }}
                            >
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-48 w-full object-cover"
                                    loading="lazy"
                                />
                                <div className="p-4 overflow-hidden" style={{ height: 'calc(350px - 192px)' }}>
                                    <h3 className="text-lg font-normal text-black truncate">
                                        {product.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default OurProducts;
