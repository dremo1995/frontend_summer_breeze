import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HiBars3 } from 'react-icons/hi2'
import { GrClose } from 'react-icons/gr'
import { MdOutlineGrass } from 'react-icons/md'
import { BsBuilding, BsHouseDoor } from 'react-icons/bs'
import { RiBillLine } from 'react-icons/ri'
import { TfiGallery } from 'react-icons/tfi'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import { useRouter } from 'next/router'

import summerBreezeLogo from '../assets/summer-breeze-logo.png'



const navHeaders = [
    { name: 'home', path: '/', component: <BsHouseDoor /> },
    { name: "residential lawn care", path: '/residential-lawn-care', component: <MdOutlineGrass /> },
    { name: "commercial lawn care", path: '/commercial-lawn-care', component: <BsBuilding /> },
    { name: 'rates', path: '/rates', component: <RiBillLine /> },
    { name: 'gallery', path: '/gallery', component: <TfiGallery /> },
]


const Header = () =>
{

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    const isMobile = useMediaQuery({ query: "(max-width:768px)" })

    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter()
    const activeLink = router.pathname

    useEffect(() =>
    {
        if (isMobile)
        {

        }

    }, [isMobile]);

    return (
        <div className='fixed z-30 bg-white pb-4 w-full top-0 py-4'>
            <div className='flex items-center justify-between  h-auto'>
                <div className='w-[300px] md:w-[400px] lg:w-[450px] pl-4'>
                    <Image alt='summer_breeze_logo' src={ summerBreezeLogo } className="object-cover" />
                </div>
                <div>

                    <div className='pl-6 hidden md:flex flex-wrap justify-center'>
                        { navHeaders.map((link) => (
                            <div key={ link.name } className={ `mx-4 my-2 ${activeLink === link.path && 'bg-green-700 px-2 rounded-md text-white'}` }>
                                <Link href={ link.path }>
                                    <div className='flex items-center justify-between mx-auto font-thin'><span className='pr-2'>{ link.component }</span>{ link.name.toUpperCase() }</div></Link>
                            </div>
                        )) }
                    </div>

                    { isMobile && (

                        <div>
                            <div className='flex flex-col px-2'>
                                { isOpen ? (<GrClose onClick={ () => setIsOpen(!isOpen) } className="w-6 h-6" />) : (<HiBars3 onClick={ () => setIsOpen(!isOpen) } className='w-8 h-8' />) }
                            </div>
                            { isOpen && (
                                <div>
                                    <motion.ol
                                        className='flex flex-col h-auto p-2 w-full bg-transparent bg-slate-300 z-10 absolute left-auto right-0 top-12 font-thin'
                                        variants={ container }
                                        initial="hidden"
                                        animate="show"
                                    >
                                        { navHeaders.map((navItem) => (
                                            <motion.li key={ navItem.name } variants={ item } className={ `mx-4 my-2  w-auto ${activeLink === navItem.path && 'bg-green-700 px-2 rounded-md text-white'}` }>
                                                <Link
                                                    href={ navItem.path }
                                                    onClick={ () =>
                                                    {
                                                        setIsOpen(false)
                                                    } }>
                                                    <div className='flex items-center'>
                                                        <span className='pr-2'>{ navItem.component }</span>{ navItem.name.toUpperCase() }
                                                    </div>
                                                </Link>
                                            </motion.li>
                                        )) }

                                    </motion.ol>
                                </div>
                            ) }
                        </div>
                    ) }

                </div>
            </div>

        </div >
    )
}

export default Header