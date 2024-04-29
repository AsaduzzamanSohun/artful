import ArtItems from "./ArtItems";
import Banner from "../../Components/Banner";
import Welcome from "../../Components/Welcome";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Loader from "../../Components/Loader";

const Home = () => {

    const { loading } = useContext(AuthContext)

    useEffect(() => {
        document.title = 'Home - Artful'
    }, []);

    if (loading) return <Loader></Loader>



    return (
        <main className="font-poppins">

            <Banner></Banner>
            <Welcome></Welcome>
            <ArtItems></ArtItems>


        </main>
    );
};

export default Home;