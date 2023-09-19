'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import TopLeftImg from "@/components/TopLeftImg";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Transition from "@/components/Transition";
import React from "react";


const sora = Sora({
    subsets: ['latin'],
    variable: '--font-sora',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
    title: 'Vepa Gurbanov',
    description: 'Vepa\'s official website',
}

type Props = {
    children: React.ReactNode
}

export default function RootLayout({children}: Props) {
    const pathname = usePathname();
    return (
        <html lang="en">
        <body className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>

        <TopLeftImg />
        <Nav />
        <Header />

        <AnimatePresence>
            <motion.div key={pathname} className='h-full'>
                <Transition />
                {children}
            </motion.div>
        </AnimatePresence>

        </body>
        </html>
    )
}
