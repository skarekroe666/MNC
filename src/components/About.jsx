import React from 'react';
import drink1 from '../../src/assets/drink1.jpg';
import drink2 from '../../src/assets/drink2.jpg';
import drink3 from '../../src/assets/drink3.jpg';
import drink4 from '../../src/assets/drink4.jpg';
import drink5 from '../../src/assets/drink5.jpg';
import energy1 from '../../src/assets/energy1.jpg';
import energy2 from '../../src/assets/energy2.jpg';
import energy3 from '../../src/assets/energy3.jpg';
import supp1 from '../../src/assets/supp1.jpg';
import supp2 from '../../src/assets/supp2.jpg';
import supp3 from '../../src/assets/supp3.jpg';
import supp4 from '../../src/assets/supp4.jpg';
import supp5 from '../../src/assets/supp5.jpg';
import supp6 from '../../src/assets/supp6.jpg';
import supp7 from '../../src/assets/supp7.jpg';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const About = () => {
    return (
        <div className='border-t-2 border-b-2 border-gray-200 mx-4 sm:mx-10'>
            <h1 className="text-neutral-700 text-center font-bold text-3xl sm:text-5xl my-10">Our Products</h1>

            <div className="max-w-screen-lg mx-auto flex flex-col items-center my-8">
                {/* Drink images */}
                <h3 className="text-neutral-700 text-center font-bold text-2xl sm:text-3xl">Nutrition drinks</h3>
                <div className="w-full flex justify-center mt-8 border px-4 py-6 sm:px-5 sm:py-8 rounded-lg shadow-md">
                    <Carousel>
                        <CarouselContent className="flex justify-center">
                            {[drink1, drink2, drink3, drink4, drink5].map((drink, index) => (
                                <CarouselItem key={index}>
                                    <img src={drink} alt={`Drink ${index + 1}`} className="h-48 w-48 sm:h-[400px] sm:w-[400px] mx-auto rounded-lg" />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-0" />
                        <CarouselNext className="absolute right-0" />
                    </Carousel>
                </div>

                {/* Energy images */}
                <h3 className="text-neutral-700 text-center font-bold text-2xl sm:text-3xl mt-8">Energy drinks</h3>
                <div className="w-full flex justify-center mt-8 border px-4 py-6 sm:px-5 sm:py-8 rounded-lg shadow-md">
                    <Carousel>
                        <CarouselContent className="flex justify-center">
                            {[energy1, energy2, energy3].map((energy, index) => (
                                <CarouselItem key={index}>
                                    <img src={energy} alt={`Energy ${index + 1}`} className="h-48 w-48 sm:h-[400px] sm:w-[400px] mx-auto rounded-lg" />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-0" />
                        <CarouselNext className="absolute right-0" />
                    </Carousel>
                </div>

                {/* Supplements images */}
                <h3 className="text-neutral-700 text-center font-bold text-2xl sm:text-3xl mt-8">Supplements</h3>
                <div className="w-full flex justify-center mt-8 border px-4 py-6 sm:px-5 sm:py-8 rounded-lg shadow-md">
                    <Carousel>
                        <CarouselContent className="flex justify-center">
                            {[supp1, supp2, supp3, supp4, supp5, supp6, supp7].map((supp, index) => (
                                <CarouselItem key={index}>
                                    <img src={supp} alt={`Supplement ${index + 1}`} className="h-48 w-48 sm:h-[400px] sm:w-[400px] mx-auto rounded-lg" />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-0" />
                        <CarouselNext className="absolute right-0" />
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default About;