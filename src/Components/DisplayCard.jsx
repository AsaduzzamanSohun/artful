import { Link } from "react-router-dom";
import PropTypes from 'prop-types'


const DisplayCard = ({ item }) => {

    const { image, subcategory, rating, username } = item;

    return (
        <div  data-aos="flip-up" className="m-4">
            <Link to='/all_arts'>

                <div className="max-w-96 border border-indigo-700  hover:scale-105 duration-1000 cursor-pointer">
                    <div className="relative">
                        <img className="w-full h-[396px] bg-contain" src={image} alt="" />
                        <h3 className="text-sm absolute bottom-0 px-2 bg-green-50 text-green-700">{subcategory}</h3>
                    </div>

                    <div className="p-2 bg-indigo-50 text-indigo-700 font-semibold">

                        <div className="flex justify-between items-center">
                            <div>

                                <p className="text-sm">{username}</p>

                            </div>
                            <div >

                                {rating === '5' ? <span className="text-amber-400 text-lg lg:text-xl px-2"> &#9733; &#9733; &#9733; &#9733; &#9733; </span> : ''}
                                {rating === '4' ? <span className="text-amber-400 text-lg lg:text-xl px-2"> &#9733; &#9733; &#9733; &#9733; </span> : ''}
                                {rating === '3' ? <span className="text-amber-400 text-lg lg:text-xl px-2 lg:px-3"> &#9733; &#9733; &#9733; </span> : ''}
                                {rating === '2' ? <span className="text-amber-400 text-lg lg:text-xl px-2"> &#9733; &#9733; </span> : ''}
                                {rating === '1' ? <span className="text-amber-400 text-lg lg:text-xl px-2"> &#9733; </span> : ''}

                            </div>
                        </div>
                    </div>
                </div>

            </Link>

        </div>

    );
};

export default DisplayCard;

DisplayCard.propTypes = {
    item: PropTypes.object
}