import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MdOutlineGrass } from 'react-icons/md'
import { RiBillLine } from 'react-icons/ri'
import { TfiGallery } from 'react-icons/tfi'

import summerBreezeLogo from '../assets/summer-breeze-logo-white.png'
import { FooterItem } from '.'

const contactInfo = [
    { type: 'Mobile', contact: '(214) 649-9666' },
    { type: 'Office', contact: '(817) 539-0401' },
    // { type: 'Email', contact: 'info@summerbreezelawncare.com' }
]

const date = new Date
const year = date.getFullYear()

const Footer = () =>
{
    return (
        <footer className='bg-green-700 w-auto py-12 px-6 text-white flex flex-col '>
            <div className='pb-12 flex justify-around'>
                <div className='w-1/2'>
                    <h2 className='text-3xl font-thin pb-6'>About Summer Breeze</h2>
                    <p className='text-lg font-thin pr-6'>Summer Breeze is a full service lawn care company that is locally owned and operated in Mansfield Texas since 2003. We provide quality lawn care and landscaping to residential and commercial properties loctated throughout our service area. Our employees are skilled, friendly, uniformed professionals, using top quality commercial equipment</p>
                </div>
                <div className='flex flex-wrap justify-between w-1/2'>

                    <FooterItem
                        header="Navigation"
                        items={ [
                            { name: "Customer Satisfaction", path: '/customer-satisfaction', component: <MdOutlineGrass /> },
                            // { name: "commercial lawn care", path: '/commercial-lawn-care', component: <BsBuilding /> },
                            { name: 'rates', path: '/rates', component: <RiBillLine /> },
                            { name: 'gallery', path: '/gallery', component: <TfiGallery /> },
                        ] } />
                    <FooterItem
                        header="Lawn Care"
                        items={ [
                            { name: "Residential Lawn Care", path: '/residential-lawn-care', component: <MdOutlineGrass /> },
                            // { name: "commercial lawn care", path: '/commercial-lawn-care', component: <BsBuilding /> },
                            { name: 'Commercial Lawn Care', path: '/commercial-lawn-care', component: <RiBillLine /> },
                        ] } />

                    <div>
                        <h2 className='text-3xl font-thin pb-6'>Contact Us</h2>
                        <div className='flex flex-col flex-wrap font-thin'>
                            { contactInfo.map((item) => (
                                <p className='py-1' key={ item.type }>{ item.type }: <span className=''>{ item.contact }</span></p>
                            )) }
                            <div className='py-1'>
                                {/* TODO add email functionality */ }
                                <Link href='/contact'>Email Us</Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div>
                <div>
                    <Link href='/'> <Image alt='Summer Breeze Logo' src={ summerBreezeLogo } className="w-[450px] " /></Link>
                    <p>Copyright © { year } | All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer