import React, { useState } from 'react'

import { ResidentialSection, CommercialSection } from '.';


const ServiceToggle = () =>
{
    const [toggle, setToggle] = useState('residential');


    return (
        <div className='py-10'>
            <div className='flex justify-center pb-6'>
                <div onClick={ () => setToggle('residential') } className={ `cursor-pointer ${toggle === 'residential' && 'bg-green-700 rounded-xl text-white'}` }>
                    <p className='px-4 text-md sm:text-2xl font-thin'>Residential Service</p>
                </div>
                <div onClick={ () => setToggle('commercial') } className={ `cursor-pointer ${toggle === 'commercial' && 'bg-green-700 rounded-xl text-white'}` }>
                    <p className='px-4 text-md sm:text-2xl font-thin'>Commercial Service</p>
                </div>
            </div>
            <div>
                { toggle === 'residential' ? (
                    <ResidentialSection />
                ) : (
                    <CommercialSection />
                ) }
            </div>
        </div>
    )
}

export default ServiceToggle