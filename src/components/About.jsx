import React from 'react'
import drink1 from '../../src/assets/drink1.jpg'
import drink2 from '../../src/assets/drink2.jpg'
import drink3 from '../../src/assets/drink3.jpg'
import drink4 from '../../src/assets/drink4.jpg'
import drink5 from '../../src/assets/drink5.jpg'
import energy1 from '../../src/assets/energy1.jpg'
import energy2 from '../../src/assets/energy2.jpg'
import energy3 from '../../src/assets/energy3.jpg'
import supp1 from '../../src/assets/supp1.jpg'
import supp2 from '../../src/assets/supp2.jpg'
import supp3 from '../../src/assets/supp3.jpg'
import supp4 from '../../src/assets/supp4.jpg'
import supp5 from '../../src/assets/supp5.jpg'
import supp6 from '../../src/assets/supp6.jpg'
import supp7 from '../../src/assets/supp7.jpg'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const About = () => {
    return (
        <div className='border-t-2 border-b-2 border-gray-200 m-10'>
            <h1 className="text-neutral-700 text-center font-bold text-[50px] m-10">Our Products</h1>
            

            <div className="max-w-screen-lg mx-auto flex flex-col items-center my-8">
                {/* Drink images */}
                <h3 className="text-neutral-700 text-center font-bold text-[30px]">Nutrition drinks</h3>
                <div className="w-full flex justify-center mt-8 border px-5 py-8 rounded-lg shadow-md">
                    <Carousel>
                        <CarouselContent className="flex justify-center">
                            <CarouselItem>
                                <img src={drink1} alt="Drink 1" className="h-[400px] w-[400px] mx-auto rounded-lg" />
                            </CarouselItem>
                            <CarouselItem>
                                <img src={drink2} alt="Drink 2" className="h-[400px] w-[400px] mx-auto rounded-lg" />
                            </CarouselItem>
                            <CarouselItem>
                                <img src={drink3} alt="Drink 3" className="h-[400px] w-[400px] mx-auto rounded-lg" />
                            </CarouselItem>
                            <CarouselItem>
                                <img src={drink4} alt="Drink 4" className="h-[400px] w-[400px] mx-auto rounded-lg" />
                            </CarouselItem>
                            <CarouselItem>
                                <img src={drink5} alt="Drink 5" className="h-[400px] w-[400px] mx-auto rounded-lg" />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-0" />
                        <CarouselNext className="absolute right-0" />
                    </Carousel>
                </div>

                {/* Energy images */}
                <h3 className="text-neutral-700 text-center font-bold text-[30px] mt-8">Energy drinks</h3>
                <div className="w-full flex justify-center mt-8 border px-5 py-8 rounded-lg shadow-md">
                    <Carousel>
                        <CarouselContent className="flex justify-center">
                            <CarouselItem>
                                <img src={energy1} alt="Energy 1" className="h-[400px] w-[400px] mx-auto rounded-lg" />
                            </CarouselItem>
                            <CarouselItem>
                                <img src={energy2} alt="Energy 2" className="h-[400px] w-[400px] mx-auto rounded-lg" />
                            </CarouselItem>
                            <CarouselItem>
                                <img src={energy3} alt="Energy 3" className="h-[400px] w-[400px] mx-auto rounded-lg" />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-0" />
                        <CarouselNext className="absolute right-0" />
                    </Carousel>
                </div>

                {/* Supplements images */}
                <h3 className="text-neutral-700 text-center font-bold text-[30px] mt-8">Supplements</h3>
                <div className="w-full flex justify-center mt-8 border px-5 py-8 rounded-lg shadow-md">
                    <Carousel>
                        <CarouselContent className="flex justify-center">
                            <CarouselItem>
                                <img src={supp1} alt="Supplement 1" className="h-[400px] w-[400px] mx-auto rounded-lg" />
                            </CarouselItem>
                            <CarouselItem>
                                <img src={supp2} alt="Supplement 2" className="h-[400px] w-[400px] mx-auto rounded-lg" />
                            </CarouselItem>
                            <CarouselItem>
                                <img src={supp3} alt="Supplement 3" className="h-[400px] w-[400px] mx-auto rounded-lg" />
                            </CarouselItem>
                            <CarouselItem>
                                <img src={supp4} alt="Supplement 4" className="h-[400px] w-[400px] mx-auto rounded-lg" />
                            </CarouselItem>
                            <CarouselItem>
                                <img src={supp5} alt="Supplement 5" className="h-[400px] w-[400px] mx-auto rounded-lg" />
                            </CarouselItem>
                            <CarouselItem>
                                <img src={supp6} alt="Supplement 6" className="h-[400px] w-[400px] mx-auto rounded-lg" />
                            </CarouselItem>
                            <CarouselItem>
                                <img src={supp7} alt="Supplement 7" className="h-[400px] w-[400px] mx-auto rounded-lg" />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-0" />
                        <CarouselNext className="absolute right-0" />
                    </Carousel>
                </div>
            </div>
        </div>

    )
}

export default About