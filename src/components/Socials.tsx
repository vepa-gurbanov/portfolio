import React from 'react';
import Link from "next/link";
import {RiFacebookLine, RiGithubLine, RiInstagramLine, RiTelegramLine, RiTwitterXLine, RiYoutubeLine} from "react-icons/ri";


type Props = {}

export default function Socials({}: Props) {
    return (
        <div className='flex items-center gap-x-5 text-lg'>
            <Link href={''} className='hover:text-accent transition-all duration-300'>
                <RiYoutubeLine />
            </Link>
            <Link href={''} className='hover:text-accent transition-all duration-300'>
                <RiInstagramLine />
            </Link>
            <Link href={''} className='hover:text-accent transition-all duration-300'>
                <RiFacebookLine />
            </Link>
            <Link href={''} className='hover:text-accent transition-all duration-300'>
                <RiGithubLine />
            </Link>
            <Link href={''} className='hover:text-accent transition-all duration-300'>
                <RiTwitterXLine />
            </Link>
            <Link href={''} className='hover:text-accent transition-all duration-300'>
                <RiTelegramLine />
            </Link>
        </div>
    );
}