import ArtItems from "./ArtItems";
import Banner from "../../Components/Banner";
import Welcome from "../../Components/Welcome";

const Home = () => {

    return (
        <main className="font-poppins">

            <Banner></Banner>
            <Welcome></Welcome>
            <ArtItems></ArtItems>


        </main>
    );
};

export default Home;