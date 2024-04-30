// import { MdDelete, MdEdit } from "react-icons/md";
// import { MdArrowForward } from "react-icons/md";
// import { RiStarSFill } from "react-icons/ri";
import { useLoaderData, useNavigation } from "react-router-dom";
import { useState } from "react";
import Loader from "../../Components/Loader";
import DisplayCard from "../../Components/DisplayCard";


const ArtItems = () => {

    const navigation = useNavigation();

    const loadedItems = useLoaderData();
    const [items, setItems] = useState(loadedItems)

    if (navigation.state === 'loading') return <Loader></Loader>




    return (
        <div className="max-w-[1536px] mx-auto mb-24">

            <h1 className="text-2xl text-center font-light mb-4 text-indigo-700">
                ---- This Art Item Section ----
            </h1>

            <div className="flex justify-center items-center">

                <div className="grid md:grid-cols-2 xl:grid-cols-3 xl:gap-4">

                    {
                        items.slice(0, 6).map(item => <DisplayCard
                            key={item._id}
                            item={item}
                            items={items}
                            setItems={setItems}>
                        </DisplayCard>)
                    }

                </div>

            </div>

        </div>
    );
};

export default ArtItems;