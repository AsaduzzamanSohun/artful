import { useContext, useEffect } from "react";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import ArtItemCard from "../../Components/ArtItemCard";

const MyArts = () => {

    ScrollRestoration('/');

    const { user } = useContext(AuthContext);
    const myItems = useLoaderData();

    useEffect(() => {
        document.title = 'My Arts and Crafts - Artful'
    }, []);


    console.log('my user: ', user);

    const myItem = myItems.filter(item => item.email === user.email);
    console.log('myItem: ', myItem);

    return (
        <div className="max-w-[1536px] mx-auto">



            <div className=" min-h-[calc(100vh-112px)] flex flex-col justify-center items-center">

                <h1 className="text-5xl text-center pt-40 mb-8 text-indigo-700">All Art & Paintings</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 mb-32">
                    {


                        myItem.map(item => <ArtItemCard
                            key={item._id}
                            item={item}></ArtItemCard>)


                    }
                </div>
                {/* {
                    user ?
                        <>{
                            myItem.map(item => <ArtItemCard
                                key={item._id}
                                item={item}></ArtItemCard>)
                        }
                        </>

                        :

                        <h1 className="text-5xl">Soon Will Be Added...</h1>

                } */}

            </div>
        </div>
    );
};

export default MyArts;