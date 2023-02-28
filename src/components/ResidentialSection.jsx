import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import residentialImg from '../assets/residential.jpeg'

const ResidentialSection = () =>
{
    return (
        <div className='flex flex-col md:flex-row justify-around px-4 items-center'>
            <div className='pb-6'>
                <Image src={ residentialImg } alt="residential_image" height={ 300 } width={ 600 } className="rounded-xl" />
            </div>
            <div className='w-full md:w-1/2 px-10'>
                <div>
                    <h2 className='font-thin text-2xl pb-4'>Fast and Efficient!</h2>
                    <p className='font-thin text-lg pb-6'>At Summer Breeze we’re here to get your lawn work done in a timely, efficient manner. Great work takes time but at Summbreeze we’re focused on getting you the best residential lawn care and letting you get back to enjoying your gorgeously maintained lawn.</p>
                </div>
                <div>
                    <h2 className='font-thin text-2xl pb-4'>Over 20 years of excellence!</h2>
                    <p className='font-thin text-lg pb-6'>Ask any of our many customers over near two decades of service we are a well established reliable provider of top quality residential lawn care services in the area.</p>
                </div>

                <div>
                    <p className='font-thin text-lg'>
                        More <span><Link href="./residential-lawn-care" className='text-blue-500 '>Residential Lawn Care &#8594;</Link></span>
                    </p>

                </div>


            </div>
        </div>
    )
}

export default ResidentialSection