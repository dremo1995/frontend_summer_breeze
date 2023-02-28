import React from 'react'
import { ServiceCard } from '.'

const DisplayServices = ({ services, nameStyle, descriptionStyle }) =>
{
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 '>
            { services.map((service) => (
                <ServiceCard
                    key={ service.serviceName }
                    serviceName={ service.serviceName }
                    description={ service.description }
                    nameStyle={ nameStyle }
                    descriptionStyle={ descriptionStyle }
                />
            )) }
        </div>
    )
}

export default DisplayServices