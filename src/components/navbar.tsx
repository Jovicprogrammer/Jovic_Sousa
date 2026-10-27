
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Agenor } from "../app/fonts"

export default function Navbar() {

    return (

        <nav className={`fixed bg-blue-700 z-[500] left-0 right-0 mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-center p-2 rounded mt-155 ${Agenor.className}}`}>

            <div className="flex gap-6 items-center justify-center h-auto text-2xl">
                <Link href="/" className="hover:opacity-60 hover:text-shadow-white transition text-shadow-md text-shadow-blue-950">Início</Link>
                <Link href="/Eu" className="hover:opacity-60 hover:text-shadow-white transition text-shadow-md text-shadow-blue-950 ">Eu</Link>
                <Link href="/OQueEuFaco" className="hover:opacity-60 hover:text-shadow-white  transition text-shadow-md text-shadow-blue-950">O Que Eu Faço</Link>
                <Link href="/Favoritos" className="hover:opacity-60 hover:text-shadow-white transition text-shadow-md text-shadow-blue-950">Favoritos</Link>
                <Link href="/Playlist" className="hover:opacity-60 hover:text-shadow-white  transition text-shadow-md text-shadow-blue-950">Playlist</Link>
                
            </div>
        </nav>

    )

}