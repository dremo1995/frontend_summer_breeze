import React from 'react'
import Link from 'next/link'

const FooterItem = ({ header, items }) =>
{
    return (
        <div>
            <h2 className='text-3xl font-thin pb-6'>{ header }</h2>
            <div className='flex flex-col font-thin'>
                { items.map((item) => (
                    <Link key={ item.name } href={ item.path } className="py-1">{ item.name.charAt(0).toUpperCase() + item.name.slice(1) }</Link>
                )) }
            </div>
        </div>
    )
}

export default FooterItem