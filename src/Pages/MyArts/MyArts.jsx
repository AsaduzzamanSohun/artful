import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import ArtItemCard from "../../Components/ArtItemCard";

const MyArts = () => {

    const { user } = useContext(AuthContext);
    const myItems = useLoaderData();

    useEffect(() => {
        document.title = 'My Arts and Crafts - Artful'
    } , []);


    console.log('my user: ', user);
    
    const myItem = myItems.filter(item => item.email === user.email);
    console.log('myItem: ', myItem);

    return (
        <div className="max-w-[1536px] mx-auto">
            <div className=" min-h-[calc(100vh-112px-75.58px)] flex justify-center items-center">
                {
                    user ?
                        <>{
                            myItem.map(item => <ArtItemCard
                                key={item._id}
                                item={item}></ArtItemCard>)
                        }
                        </>

                        :

                        <h1 className="text-5xl">Soon Will Be Added...</h1>

                }

            </div>
        </div>
    );
};

export default MyArts;