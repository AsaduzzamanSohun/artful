import 'animate.css';


const Services = () => {
    return (

        <div className="bg-indigo-100 py-8 md:py-20">

            
            <div data-aos="zoom-in-up" className="container mx-auto px-4 py-8 ">
                <h1 className="text-5xl mb-4 text-center text-indigo-700">Our Artistic Services</h1>
                <p className="text-lg text-center mb-12 text-indigo-700">Explore our range of artistic services crafted to inspire and delight.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4">Landscape Painting</h2>
                        <p className="text-gray-700">From majestic mountain views to serene forest landscapes, our paintings capture the beauty of nature.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4">Portrait Drawing</h2>
                        <p className="text-gray-700">Transforming faces into intricate pencil sketches, bold ink outlines, or vibrant acrylic portraits, we bring personalities to life on canvas.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4">Watercolour Painting</h2>
                        <p className="text-gray-700">Delicate florals and graceful animals come to life with translucent watercolors, capturing the essence of beauty and grace.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4">Oil Painting</h2>
                        <p className="text-gray-700">Whether realistic portraits or abstract masterpieces, our oil paintings evoke emotion and intrigue with every brushstroke.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4">Charcoal Sketching</h2>
                        <p className="text-gray-700">Dynamic figures and architectural wonders take shape through the expressive medium of charcoal, capturing movement and detail with precision.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4">Cartoon Drawing</h2>
                        <p className="text-gray-700">From comic strip adventures to superhero designs, our cartoons bring laughter and excitement to audiences of all ages.</p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Services;