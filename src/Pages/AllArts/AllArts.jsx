import { useLoaderData, useNavigation } from "react-router-dom";
import ArtItemCard from "../../Components/ArtItemCard";
import {  useEffect, useState } from "react";
import Loader from "../../Components/Loader";

const AllArts = () => {


    const navigation = useNavigation();
    const allLoadedItems = useLoaderData();
    const [items, setItems] = useState(allLoadedItems);

    useEffect(() => {
        document.title = "All Arts and Crafts - Artful"
    } , [])

    if(navigation.state === 'loading') return <Loader></Loader>

    // const { image, name, subcategory, description, price, rating, customization, process_time, status, email, username } = allLoadedItems;

    return (
        <div className="min-h-[calc(100vh-112px-75.58px)]">
            <div className="max-w-[1536px] mx-auto my-20">

                <h1 className="text-4xl text-center">This Art Item Section</h1>

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