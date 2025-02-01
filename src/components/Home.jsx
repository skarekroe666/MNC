import React from 'react'
import heroImg from '../../src/assets/jsImg.jpg'

const Home = () => {
    return (
        <div className="bg-transparent mx-8 flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100">
            <div className="md:w-1/2 flex justify-center">
                {/* Image */}
                <img src={heroImg} alt="Hero" className="max-w-full h-[500px] rounded-full shadow-lg" />
            </div>

            <div className="md:w-1/2 text-center md:text-left p-6">
                {/* About the company */}
                <p className="text-3xl text-gray-700 font-medium leading-relaxed">
                    Mayleen Nutricare Makes A Whole New Promise Of Enriching Lives By Transforming Lifestyle.
                    We Offer A Premium Range Of Mouthwatering Flavours Of Nutrition Protein Shakes,
                    Dietary Supplements, And Skin Care Products.
                </p>
            </div>
        </div>
    )
}

export default Home