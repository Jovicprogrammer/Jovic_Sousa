
import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {

    return (

        <nav className={`fixed bg-blue-700 z-[500] left-0 right-0 mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-center p-2 rounded mt-155 }`}>

            <div className="flex gap-6 items-center justify-center h-auto text-2xl">
                <Link href="/" className="hover:underline transition ">Início</Link>
                <Link href="/Eu" className="hover:underline transition ">Eu</Link>
                <Link href="/OQueEuFaco" className="hover:underline transition ">O Que Eu Faço</Link>
                <Link href="/Favoritos" className="hover:underline transition ">Favoritos</Link>
                <Link href="/Playlist" className="hover:underline transition">Playlist</Link>
                
            </div>
        </nav>

    )
    
}