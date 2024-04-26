import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
const AutoplaySlider = withAutoplay(AwesomeSlider);




const Slide = () => {
    return (
        <div>
            <AutoplaySlider
                className={'h-[640px]'}
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={3000}
                bullets={false}

            >
                <div data-src="https://i.ibb.co/1fw1GDb/slider-1-min.jpg" />
                <div data-src="https://i.ibb.co/qrgYTz6/slider-2-min.jpg" />
                <div data-src="https://i.ibb.co/0m7874H/slider-3-min.jpg" />
                <div data-src="https://i.ibb.co/QCwCQ2H/slider-4-min.jpg" />
                <div data-src="https://i.ibb.co/ZYbdRtc/slider-5-min.jpg" />
                <div data-src="https://i.ibb.co/fp2ryxB/slider-6-min.jpg" />
            </AutoplaySlider>


            <div className=''>

                <p className='text-7xl text-black absolute'>Hello</p>

            </div>

        </div>
    );
};

export default Slide;