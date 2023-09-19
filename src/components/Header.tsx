import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Socials from "@/components/Socials";


type Props = {}

export default function Header({}: Props) {
    return (
        <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row justify-between items-center gap-y-6 py-8">
                {/*  logo  */}
                    <Link href={'/'}>
                        <Image
                            src={'/logo.svg'}
                            width={220}
                            height={48}
                            alt=''
                            priority={true}
                        />
                    </Link>
                {/*  socials  */}
                    <Socials />
                </div>
            </div>
        </header>
    );
}