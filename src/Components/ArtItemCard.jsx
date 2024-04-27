import { MdArrowForward, MdDelete, MdEdit } from "react-icons/md";
import { RiStarSFill } from "react-icons/ri";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const ArtItemCard = ({ item, items, setItems }) => {


    const { _id, image, name, subcategory, description, price } = item;


    const handleDelete = _id => {

        Swal.fire({
            title: "Are you sure?",
            text: "Are you want to delete this item?!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {
                Swal.fire(
                    {
                        title: "Deleted!",
                        text: "Item has been deleted.",
                        icon: "success"
                    }
                );
                fetch(`http://localhost:5000/crafts/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        const remaining = items.filter(deleted => deleted._id !== _id)
                        setItems(remaining)

                    })



            }




        });



    }

    return (
        <div className="max-w-96 border m-4">
            <div className="relative">
                <img className="w-full h-[260px] bg-contain" src={image} alt="" />
                <span className="absolute bottom-0 bg-slate-600 text-sm text-white px-4 flex items-center">5 <RiStarSFill className="text-amber-400 text-xl" /></span>
            </div>

            <div className="p-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-sky-500 text-lg">{name}</h1>
                    <h2 className="text-green-400">${price}</h2>
                </div>

                <div className="border-b-2 my-4 py-4 space-y-2">
                    <h3 className="text-sm">{subcategory}</h3>
                    <p className="text-xs">
                        {description.slice(0, 52)}...
                    </p>
                </div>

                <div className="flex justify-between items-center">
                    <div className="space-x-3 flex items-center">
                        <span className="text-blue-500 text-lg bg-blue-100 p-2 rounded-full hover:scale-110 duration-700 cursor-pointer"><MdEdit /></span>
                        <span onClick={() => handleDelete(_id)} className="text-red-500 text-lg bg-red-100 p-2 rounded-full hover:scale-110 duration-700 cursor-pointer"><MdDelete></MdDelete></span>
                    </div>
                    <div className="flex">
                        <span className="text-indigo-500 text-lg bg-indigo-100 p-2 rounded-full hover:scale-110 duration-700 cursor-pointer"><MdArrowForward /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtItemCard;

ArtItemCard.propTypes = {
    item: PropTypes.object,
    items: PropTypes.array,
    setItems: PropTypes.func
}