import ArtItems from "./ArtItems";
import Banner from "../../Components/Banner";
import Welcome from "../../Components/Welcome";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Loader from "../../Components/Loader";
import Services from "../../Components/Services";
import SliderCard from "../../Components/SliderCard";
import { ScrollRestoration } from "react-router-dom";

const Home = () => {

    const { loading } = useContext(AuthContext)

    useEffect(() => {
        document.title = 'Home - Artful'
    }, []);

    ScrollRestoration('/');


    if (loading) return <Loader></Loader>



    return (
        <main className="font-poppins">

            <Banner></Banner>
            <Welcome></Welcome>
            <ArtItems></ArtItems>
            <Services></Services>
            <SliderCard></SliderCard>

        </main>
    );
};

export default Home;