const testimonials = [
    {
        quote: "La plataforma me ayudó a establecerme en Barcelona sin problemas. Sin dudas la recomiendo!",
        name: "Lionel M.",
        image: "/images/lionel.png"
    },
    {
        quote: "Gracias a Emigrapp, todo mi proceso de emigración fue mucho más sencillo, menos estresante y más rápido.",
        name: "María L.",
        image: "/images/maria.png"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-16 pt-24 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Testimonios</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                           
                            <p className="italic text-gray-600 mb-4">"{testimonial.quote}"</p>
                            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
                            <p className="font-bold">{testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
