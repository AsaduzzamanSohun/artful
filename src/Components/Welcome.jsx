import { Typewriter } from 'react-simple-typewriter'

const Welcome = () => {
    return (
        <div className='text-3xl lg:text-5xl text-center py-24'>
            <Typewriter
            
                cursor={true}
                loop={true}
                words={
                    [
                        "Welcome to ArtFull!",
                        "Dive into creativity with us.",
                        "Discover captivating art for every taste.",
                        "Let's explore together!"
                    ]}
                    
                    >

            </Typewriter>

        </div>
    );
};

export default Welcome;