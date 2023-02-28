import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import commercialImg from '../assets/commercial.jpeg'

const CommercialSection = () =>
{
    return (
        <div className='flex flex-col md:flex-row justify-around px-4 items-center'>
            <div className='pb-6'>
                <Image src={ commercialImg } alt="commercial_image" height={ 300 } width={ 600 } className="rounded-xl" />
            </div>
            <div className='w-full md:w-1/2 px-10'>
                <div>
                    <h2 className='font-thin text-2xl pb-4'>Professionalism guaranteed!</h2>
                    <p className='font-thin text-lg pb-6'>When it comes to your commercial service you want the people that work for you to create a positive impression which is where our fully uniformed friendly and professional staff truly shine.</p>
                </div>
                <div>
                    <h2 className='font-thin text-2xl pb-4'>Experienced Team</h2>
                    <p className='font-thin text-lg pb-6'>Our highly experienced professionals are well versed in maintaining a wide range of corporate properties. We’re ready and able to give any corporate landscape the Summer Breeze professional touch and turn the environment around your business into a draw for more customers.</p>
                </div>

                <div>
                    <p className='font-thin text-lg'>
                        More <span><Link href="./commercial-lawn-care" className='text-blue-500 '>Commercial Lawn Care &#8594;</Link></span>
                    </p>

                </div>


            </div>
        </div>
    )
}

export default CommercialSection