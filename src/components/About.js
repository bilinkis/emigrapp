import Slider from 'react-slick';
import { FaUserTie, FaPassport, FaMapMarkedAlt, FaHome } from 'react-icons/fa';
import { PrevArrow, NextArrow } from './CustomArrows';

const features = [
    {
        icon: FaPassport,
        title: "Información sobre visas y permisos",
        description: "Mantente actualizado con la información más reciente."
    },
    {
        icon: FaUserTie,
        title: "Asesoramiento personalizado",
        description: "Recibe ayuda personalizada para tu proceso de emigración."
    },

    {
        icon: FaMapMarkedAlt,
        title: "Guías detalladas",
        description: "Accede a guías paso a paso para tu emigración."
    },
    {
        icon: FaHome,
        title: "Soporte en la búsqueda de empleo y alojamiento",
        description: "Encuentra trabajo y lugar para vivir en tu nuevo destino."
    }
];

const About = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section id="description" className="py-16 bg-white text-gray-800">
            <div className="container mx-auto text-center">


                <Slider {...settings}>
                    {features.map((feature, index) => (
                        <div key={index} className="px-4">
                            <div className="bg-white p-6 rounded-lg flex flex-col items-center transform transition-transform duration-300">
                                <div className="text-blue-500 text-4xl mb-4">
                                    <feature.icon />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-center">{feature.title}</h3>
                                <p className="text-gray-600 text-center">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default About;
