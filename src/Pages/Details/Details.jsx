import { useLoaderData } from "react-router-dom";

const Details = () => {

    const details = useLoaderData();

    const { image, name, subcategory, description, price, rating, customization, process_time, status, email, username } = details

    // const params = useParams()
    // console.log('my: ', params);

    // const detail = loadedDetails.filter(detail => detail._id === params.id )
    // console.log('my details: ', detail);



    return (
        <div className="bg-gray-50">
            <div className="max-w-[1536px] mx-auto  font-rubik ">

                <div className="flex justify-center items-center min-h-[calc(100vh-112px-75.58px)]">
                    <div className="max-w-[720px] m-1">
                        <div className="relative">
                            <img className="w-full" src={image} alt="" />

                            {rating === '5' ? <span className="text-amber-400 text-lg lg:text-2xl bg-slate-600 bg-opacity-70 absolute bottom-0 px-2 lg:px-3"> &#9733; &#9733; &#9733; &#9733; &#9733; </span> : ''}
                            {rating === '4' ? <span className="text-amber-400 text-lg lg:text-2xl bg-slate-600 bg-opacity-70 absolute bottom-0 px-2 lg:px-3"> &#9733; &#9733; &#9733; &#9733; </span> : ''}
                            {rating === '3' ? <span className="text-amber-400 text-lg lg:text-2xl bg-slate-600 bg-opacity-70 absolute bottom-0 px-2 lg:px-3"> &#9733; &#9733; &#9733; </span> : ''}
                            {rating === '2' ? <span className="text-amber-400 text-lg lg:text-2xl bg-slate-600 bg-opacity-70 absolute bottom-0 px-2 lg:px-3"> &#9733; &#9733; </span> : ''}
                            {rating === '1' ? <span className="text-amber-400 text-lg lg:text-2xl bg-slate-600 bg-opacity-70 absolute bottom-0 px-2 lg:px-3"> &#9733; </span> : ''}

                            <p className="text-lg text-emerald-700 
        absolute bottom-0 
        right-0 px-3
        bg-emerald-50 bg-opacity-70">${price}</p>
                        </div>

                        <div className="px-3 border-x border-indigo-700 bg-slate-50">
                            <div className="py-2 border-indigo-700 bg-slate-50">
                                <p className="text-lg lg:text-2xl text-indigo-700 font-semibold">{name}</p>
                                <p className="text-sm lg:text-base text-indigo-600 ">- {subcategory}</p>

                                <div className="my-4">
                                    <p> {description}</p>
                                </div>


                            </div>

                            <div className="flex justify-between items-center text-xs md:text-sm font-semibold pb-1">
                                <p><span className="text-indigo-700">{email}</span> </p>
                                <p><span className="text-indigo-700">{username}</span> </p>
                            </div>
                        </div>



                        <div className="flex justify-between items-center font-medium md:text-sm py-3 border bg-indigo-50 text-indigo-700 border-indigo-700 px-1 md:px-3 text-xs">
                            <p>Customization: <span> {customization} </span></p>
                            <p>Processing Time: <span>{process_time} days</span></p>
                            <p>Available: {status}</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    );
};

export default Details;