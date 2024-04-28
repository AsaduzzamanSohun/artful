import { useState } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Swal from "sweetalert2";
import Loader from "../../Components/Loader";

const AddArts = () => {

    const [loading, setLoading] = useState(false);

    if (loading) return <Loader></Loader>

    const handleAddItem = e => {
        setLoading(true)
        e.preventDefault();
        const form = e.target;

        const image = form.image.value;
        const name = form.name.value;
        const subcategory = form.subcategory.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const process_time = form.process_time.value;
        const status = form.status.value;
        const email = form.email.value;
        const username = form.username.value;

        const items = { image, name, subcategory, description, price, rating, customization, process_time, status, email, username }

        console.log(items);

        fetch('https://artful-server.vercel.app/crafts', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(items)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setLoading(false)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Item has been successfully added",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    form.reset();
                }
            })

    }


    return (
        <div>
            <div className="max-w-[1320px] mx-auto pb-20 xl:pb-28 font-rubik text-indigo-700">
                <div className="p-10">
                    <Link to='/' className="text-3xl flex items-center gap-4 ">
                        Back to home
                    </Link>
                </div>

                <div className="bg-indigo-50 py-16   p-3">
                    <div className="text-center xl:my-8 ">
                        <h1 className="text-[24px] xl:text-[45px] font-bold mb-4">Add New Paint an Drawing</h1>
                        <p className="max-w-[932px] h-8 mx-auto xl:text-lg  xl:leading-loose">
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed once, initially
                                    'Where Imagination Meets the Canvas',
                                    1000,

                                ]}
                                speed={50}
                                cursor={false}
                            />
                        </p>


                    </div>


                    <div className="max-w-[1096px] mx-auto p-3">

                        <form onSubmit={handleAddItem}>

                            <div className="grid grid-cols-1 gap-6 py-4">

                                <div>
                                    <label className="text-base font-semibold">Image URL</label>
                                    <input
                                        className="w-full px-4 py-3 focus:outline-indigo-700 
                                      mt-3 "
                                        type="url"
                                        name="image"
                                        placeholder="Enter image url"
                                        required />
                                </div>

                            </div>



                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">

                                <div>
                                    <label className="text-base font-semibold">Item Name</label>
                                    <input
                                        className="w-full px-4 py-3 focus:outline-indigo-700 
                                      mt-3 "
                                        type="text"
                                        name="name"
                                        placeholder="Enter item name"
                                        required />
                                </div>
                                <div>
                                    <label className="text-base font-semibold">Subcategory Name</label>
                                    <input
                                        className="w-full px-4 py-3 focus:outline-indigo-700 
                                      mt-3 "
                                        type="text"
                                        name="subcategory"
                                        placeholder="Enter subcategory name"
                                        required />
                                </div>

                            </div>



                            <div className="grid grid-cols-1 py-4">

                                <div>
                                    <label className="text-base font-semibold">Short Description</label>
                                    <input
                                        className="w-full px-4 py-3 focus:outline-indigo-700 
                                      mt-3 "
                                        type="text"
                                        name="description"
                                        placeholder="Enter short description"
                                        required />
                                </div>


                            </div>



                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">

                                <div>
                                    <label className="text-base font-semibold">Price</label>
                                    <input
                                        className="w-full px-4 py-3 focus:outline-indigo-700 
                                      mt-3 "
                                        type="text"
                                        name="price"
                                        placeholder="Enter price"
                                        required />
                                </div>
                                <div>
                                    <label className="text-base font-semibold">Rating</label>
                                    <input
                                        className="w-full px-4 py-3 focus:outline-indigo-700 
                                      mt-3 "
                                        type="text"
                                        name="rating"
                                        placeholder="Enter rating"
                                        required />
                                </div>

                            </div>



                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">

                                <div>
                                    <label className="text-base font-semibold">Customization</label>
                                    <input
                                        className="w-full px-4 py-3 focus:outline-indigo-700 
                                      mt-3 "
                                        type="text"
                                        name="customization"
                                        placeholder="Yes/No"
                                        required />
                                </div>
                                <div>
                                    <label className="text-base font-semibold">Process Time</label>
                                    <input
                                        className="w-full px-4 py-3 focus:outline-indigo-700 
                                      mt-3 "
                                        type="number"
                                        name="process_time"
                                        placeholder="Enter process time"
                                        required />
                                </div>

                            </div>



                            <div className="grid grid-cols-1 py-4">

                                <div>
                                    <label className="text-base font-semibold">Stock Status</label>
                                    <input
                                        className="w-full px-4 py-3 focus:outline-indigo-700 
                                      mt-3 "
                                        type="text"
                                        name="status"
                                        placeholder="Enter status"
                                        required />
                                </div>

                            </div>



                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">

                                <div>
                                    <label className="text-base font-semibold">User Email</label>
                                    <input
                                        className="w-full px-4 py-3 focus:outline-indigo-700 
                                      mt-3 "
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email "
                                        required />
                                </div>
                                <div>
                                    <label className="text-base font-semibold">User Name</label>
                                    <input
                                        className="w-full px-4 py-3 focus:outline-indigo-700 
                                      mt-3 "
                                        type="text"
                                        name="username"
                                        placeholder="Enter your user name"
                                        required />
                                </div>

                            </div>


                            <div className=" py-4">

                                <div>
                                    <input
                                        className="w-full bg-indigo-700 font-semibold text-indigo-200   py-2 mt-3 border-2 hover:bg-transparent hover:text-indigo-700 duration-500 hover:border-2
                                        hover:border-indigo-700"
                                        type="submit"
                                    />
                                </div>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>

    );
};

export default AddArts;