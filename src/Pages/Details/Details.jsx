import { useLoaderData } from "react-router-dom";

const Details = () => {

    const details = useLoaderData();

    const { image, name, subcategory, description, price, rating, customization, process_time, status, email, username } = details

    // const params = useParams()
    // console.log('my: ', params);

    // const detail = loadedDetails.filter(detail => detail._id === params.id )
    // console.log('my details: ', detail);



    return (
        <div className="max-w-[1536px] mx-auto">

            <div className="min-h-[calc(100vh-112px-75.58px)]">
                <img src={image} alt="" />
                <p>{name}</p>
                <p>{subcategory}</p>
                <p>{description}</p>
                <p>{price}</p>
                <p>{rating}</p>
                <p>{customization}</p>
                <p>{process_time}</p>
                <p>{status}</p>
                <p>{email}</p>
                <p>{username}</p>

            </div>


        </div>
    );
};

export default Details;