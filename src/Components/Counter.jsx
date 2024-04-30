import CountUp from 'react-countup';

const Counter = () => {
    return (
        <div className=' bg-indigo-100 lg:px-16 lg:py-10 text-indigo-700'>

            <div className='max-w-7xl mx-auto'>

                <div className='grid grid-cols-1 md:grid-cols-5 justify-items-center md:px-4 lg:px-0'>
                    <div className='lg:w-[270px] flex flex-col justify-center lg:gap-2 p-4'>

                        <CountUp
                            end={37883}
                            suffix='+'
                            enableScrollSpy={true}
                            duration={4}
                            className='text-4xl lg:text-6xl'>+</CountUp>

                        <p className='text-xs md:text-base'>
                            Collections worldwide sold
                        </p>
                    </div>

                    <vr className='w-[2px] bg-indigo-700' />

                    <div className='lg:w-[270px] flex flex-col justify-center lg:gap-2 p-4'>
                        <CountUp
                            end={124}
                            suffix='+'
                            duration={4}
                            className='text-4xl lg:text-6xl flex justify-center' />
                        <p className='text-xs md:text-base flex justify-center'>
                            Countries worldwide
                        </p>
                    </div>

                    <vr className='w-[2px] bg-indigo-700' />

                    <div className='lg:w-[270px] flex flex-col justify-center lg:gap-2 p-4'>
                        <CountUp
                            end={1038}
                            duration={4}
                            suffix='+'
                            className='text-4xl lg:text-6xl flex justify-center' />

                        <p className='text-xs md:text-base flex justify-center'>
                            Contributors and Artists
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Counter;