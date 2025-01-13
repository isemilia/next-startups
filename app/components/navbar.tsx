import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <header className={'px-5 py-3 bg-white shadow-sm'}>
            <nav className="flex justify-between items-center">
                <Link href={'/'}>
                    <Image src={'/logo.png'} alt={'logo'} width={144} height={30}/>
                </Link>
                <div className="flex items-center gap-5"></div>
            </nav>
        </header>
    )
}

export default Navbar
