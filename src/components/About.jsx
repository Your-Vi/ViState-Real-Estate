import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion"


const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 1}}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='flex flex-col items-center justify-center mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
            <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold mb-2' >About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
            <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to Your Vision</p>
            <div className='flex flex-col md:flex-row item-center md:items-start md:gap-20'>
                <img className='w-full sm:w-1/2 max-w-lg' src={assets.brand_img} alt="" />
                <div className='flex flex-col items-center md:items-start mt-10 text-gray-700'>
                    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>10+</p>
                            <p>Years of Excellence</p>
                        </div>

                        <div>
                            <p className='text-4xl font-medium text-gray-800'>12+</p>
                            <p>Projects completed</p>
                        </div>

                        <div>
                            <p className='text-4xl font-medium text-gray-800'>20+</p>
                            <p>Mn. Sq. Ft. Delivered</p>
                        </div>

                        <div>
                            <p className='text-4xl font-medium text-gray-800'>25+</p>
                            <p>Ongoing Projects</p>
                        </div>

                    </div>

                    <p className='my-10 max-w-lg'>Hello , This is Vistate Company. Explore a world of real estate opportunities. From cozy apartments to luxurious villas, we offer a diverse range of properties tailored to your needs. Find your perfect match with our easy-to-use search tools and expert guidance.</p>
                    <button className='bg-blue-700 text-white px-8 py-3 rounded'>Learn More</button>

                </div>

            </div>

        </motion.div>
    )
}

export default About