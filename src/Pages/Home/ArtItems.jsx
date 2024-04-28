// import { MdDelete, MdEdit } from "react-icons/md";
// import { MdArrowForward } from "react-icons/md";
// import { RiStarSFill } from "react-icons/ri";
import { useLoaderData, useNavigation } from "react-router-dom";
import ArtItemCard from "../../Components/ArtItemCard";
import { useState } from "react";
import Loader from "../../Components/Loader";


const ArtItems = () => {

    const navigation = useNavigation();

    const loadedItems = useLoaderData();
    const [items, setItems] = useState(loadedItems)

    if(navigation.state === 'loading') return <Loader></Loader>




    return (
        <div className="max-w-[1536px] mx-auto my-20">

            <h1 className="text-4xl text-center">This Art Item Section</h1>

            <div className="flex justify-center items-center">

                <div className="grid md:grid-cols-2 xl:grid-cols-3 xl:gap-4">

                    {
                        items.slice(0, 6).map(item => <ArtItemCard
                            key={item._id}
                            item={item}
                            items={items}
                            setItems={setItems}>
                        </ArtItemCard>)
                    }

                </div>

            </div>

        </div>
    );
};

export default ArtItems;