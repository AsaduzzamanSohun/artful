import { ScrollRestoration, useLoaderData, useNavigation } from "react-router-dom";
import ArtItemCard from "../../Components/ArtItemCard";
import {  useEffect, useState } from "react";
import Loader from "../../Components/Loader";

const AllArts = () => {

    ScrollRestoration('/');


    const navigation = useNavigation();
    const allLoadedItems = useLoaderData();
    const [items, setItems] = useState(allLoadedItems);

    useEffect(() => {
        document.title = "All Arts and Crafts - Artful"
    } , [])

    if(navigation.state === 'loading') return <Loader></Loader>

    // const { image, name, subcategory, description, price, rating, customization, process_time, status, email, username } = allLoadedItems;

    return (
        <div className="min-h-[calc(100vh-112px)]">
            <div className="max-w-[1536px] mx-auto py-32">

                <h1 className="text-5xl text-center my-8 text-indigo-700">All Art & Paintings</h1>

                <div className="flex justify-center items-center">

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 xl:gap-4">

                        {
                            items.map(item => <ArtItemCard
                                key={item._id}
                                item={item}
                                items={items}
                                setItems={setItems}>
                            </ArtItemCard>)
                        }

                    </div>

                </div>

            </div>
        </div>
    );
};

export default AllArts;