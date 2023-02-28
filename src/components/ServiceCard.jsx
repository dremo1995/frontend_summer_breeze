import React from 'react'

const ServiceCard = ({ serviceName, description, nameStyle, descriptionStyle }) =>
{
    return (
        <div className='bg-white rounded-lg'>
            <div className='p-8'>
                <h2 className={ nameStyle }>{ serviceName }</h2>
                <p className={ descriptionStyle }>{ description }</p>
            </div>
        </div>
    )
}

export default ServiceCard