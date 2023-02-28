import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'
import landscaping1 from '../assets/landscaping-1.jpg'
import landscaping2 from '../assets/landscaping-4.jpg'
import landscaping3 from '../assets/landscaping-3.jpg'


const Banner = () =>
{
    return (
        <div className=''>
            <div className='relative w-full bg-slate-100 z-20  mx-auto'>
                <Carousel
                    autoPlay
                    infiniteLoop
                    showStatus={ false }
                    showIndicators={ false }
                    showThumbs={ false }
                    dynamicHeight={ false }
                    interval={ 4000 }
                >
                    <div className='h-30'>
                        <Image loading='lazy' src={ landscaping1 } className=" object-contain" alt='photo1' />
                    </div>
                    <div>
                        <Image loading='lazy' src={ landscaping2 } on className=" object-contain " alt='photo2' />
                    </div>
                    <div>
                        <Image loading='lazy' src={ landscaping3 } className=" object-contain " alt='photo3' />
                    </div>

                </Carousel>
            </div>
        </div>
    )
}

export default Banner