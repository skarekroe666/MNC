import React from 'react'
import result1 from '../../src/assets/result1.jpg'
import result2 from '../../src/assets/result2.jpg'
import result3 from '../../src/assets/result3.jpg'
import result4 from '../../src/assets/result4.jpg'
import result5 from '../../src/assets/result5.jpg'
import result6 from '../../src/assets/result6.jpg'
import result7 from '../../src/assets/result7.jpg'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const Results = () => {
    return (
        <div className='border-b-2 border-gray-200 m-4 sm:m-6 md:m-10'>
            <h1 className="text-neutral-700 text-center font-bold text-3xl sm:text-4xl md:text-5xl m-4 sm:m-6 md:m-10">Results</h1>

            <div className="max-w-screen-lg mx-auto flex flex-col items-center my-4 sm:my-6 md:my-8">
                <div className="w-full flex justify-center mt-4 sm:mt-6 md:mt-8 border px-3 sm:px-4 md:px-5 py-4 sm:py-6 md:py-8 rounded-lg shadow-md">
                    <Carousel>
                        <CarouselContent className="flex justify-center">
                            <CarouselItem>
                                <img src={result1} alt="Result 1" className="h-40 sm:h-60 md:h-80 w-40 sm:w-60 md:w-80 mx-auto rounded-lg" />
                            </CarouselItem>
                            <CarouselItem>
                                <img src={result2} alt="Result 2" className="h-40 sm:h-60 md:h-80 w-40 sm:w-60 md:w-80 mx-auto rounded-lg" />
                            </CarouselItem>
                            <CarouselItem>
                                <img src={result3} alt="Result 3" className="h-40 sm:h-60 md:h-80 w-40 sm:w-60 md:w-80 mx-auto rounded-lg" />
                            </CarouselItem>
                            <CarouselItem>
                                <img src={result4} alt="Result 4" className="h-40 sm:h-60 md:h-80 w-40 sm:w-60 md:w-80 mx-auto rounded-lg" />
                            </CarouselItem>
                            <CarouselItem>
                                <img src={result5} alt="Result 5" className="h-40 sm:h-60 md:h-80 w-40 sm:w-60 md:w-80 mx-auto rounded-lg" />
                            </CarouselItem>
                            <CarouselItem>
                                <img src={result6} alt="Result 6" className="h-40 sm:h-60 md:h-80 w-40 sm:w-60 md:w-80 mx-auto rounded-lg" />
                            </CarouselItem>
                            <CarouselItem>
                                <img src={result7} alt="Result 7" className="h-40 sm:h-60 md:h-80 w-40 sm:w-60 md:w-80 mx-auto rounded-lg" />
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

export default Results