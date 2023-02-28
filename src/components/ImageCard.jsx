import React from 'react'
import Image from 'next/image'

const ImageCard = ({ imgUrl, imgAlt }) =>
{
    return (
        <div className=''>
            <Image src={ imgUrl } alt={ imgAlt } width={ 300 } height={ 300 } className="h-[160px] lg:h-[200px] 2xl:h-[240px] md:w-full rounded-md" />
        </div>
    )
}

export default ImageCard