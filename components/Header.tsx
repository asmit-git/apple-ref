import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { UserIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../redux/basketSlice';

function Header() {
    const session = false;
    const items = useSelector(selectBasketItems);

    return <header className='sticky top-0 z-30 flex w-full items-center justify-between bg-[#efecee] p-4'>
        <div className='flex items-center justify-center md:w-1/5'>
            <Link href="/">
                <div className='relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100'>
                    <Image src="https://rb.gy/vsvv2o" layout="fill" objectFit="contain" />
                </div>
            </Link>
        </div>
        <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
            <a className='headerLink'>product</a>
            <a className='headerLink'>Explore</a>
            <a className='headerLink'>Support</a>
            <a className='headerLink'>Business</a>
        </div>
        <div className='flex items-center justify-center gap-x-4 md:w-1/5'>
            <div className='headerIcon'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </div>
            <Link href="/checkout">
                <div className='relative cursor-pointer'>
                    {items.length > 0 && (
                        <span className='absolute -right-1 -top-1 z-50 flex h-4 w-4 item-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white'>
                            {items.length}
                        </span>
                    )}
                    <ShoppingBagIcon className='headerIcon' />
                </div>
            </Link>
            {session ?
                (
                    <Image
                        src={
                            "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                        }
                        alt=""
                        className="cursor-pointer rounded-full"
                        width={34}
                        height={34}
                    // onClick={()=>signOut())}
                    />) : (
                    <UserIcon
                        className='headerIcon'
                    // onClick={()=>signIn()}                    
                    />
                )}
        </div>
    </header>;
}

export default Header