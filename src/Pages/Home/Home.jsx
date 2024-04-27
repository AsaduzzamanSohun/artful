import ArtItems from "../../Components/ArtItems";
import Banner from "../../Components/Banner";
import Welcome from "../../Components/Welcome";

const Home = () => {
    return (
        <div className="font-poppins">

            <Banner></Banner>
            <Welcome></Welcome>
            <ArtItems></ArtItems>


        </div>
    );
};

export default Home;