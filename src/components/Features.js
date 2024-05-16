import { FaUserTie, FaPassport, FaMapMarkedAlt, FaHome } from 'react-icons/fa';

const features = [
    {
        icon: FaUserTie,
        title: "Asesoramiento personalizado",
        description: "Recibe ayuda personalizada para tu proceso de emigración."
    },
    {
        icon: FaPassport,
        title: "Información sobre visas y permisos",
        description: "Mantente actualizado con la información más reciente."
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

const Features = () => {
    return (
        <section id="features" className="py-16 bg-gray-100 text-gray-800">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Características Principales</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                            <div className="text-blue-500 text-4xl mb-4">
                                <feature.icon />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-center">{feature.title}</h3>
                            <p className="text-gray-600 text-center">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
