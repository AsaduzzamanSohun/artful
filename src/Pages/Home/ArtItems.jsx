// import { MdDelete, MdEdit } from "react-icons/md";
// import { MdArrowForward } from "react-icons/md";
// import { RiStarSFill } from "react-icons/ri";
import { useLoaderData } from "react-router-dom";
import ArtItemCard from "../../Components/ArtItemCard";




const ArtItems = () => {

    const loadedItems = useLoaderData();

    return (
        <div className="max-w-[1536px] mx-auto my-20">

            <h1 className="text-4xl text-center">This Art Item Section</h1>

            <div className="flex justify-center items-center">

                <div className="grid md:grid-cols-2 xl:grid-cols-3 xl:gap-4">

                    {
                        loadedItems.slice(0, 6).map(item => <ArtItemCard
                            key={item._id}
                            item={item}>
                        </ArtItemCard>)
                    }

                </div>

            </div>

        </div>
    );
};

export default ArtItems;