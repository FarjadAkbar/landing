"use client"
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function Footer() {
    return (
        <footer className="bg-primary text-white text-sm py-2 mt-10">
            <FloatingWhatsApp phoneNumber={process.env.NEXT_PUBLIC_WHATSAPP as string} accountName="Maryland Institute of Development" avatar="/apple-touch-icon.png" />
            <div className="container mx-auto flex flex-wrap gap-2 items-center md:justify-between justify-center">
                <p className="text-xs md:text-sm">© 2023 Maryland Institute of Development.</p>
                <div className="flex flex-wrap items-center gap-5">
                    <Link href="https://www.facebook.com/marylandinstitute/" passHref><FaFacebookF size={14} /></Link>
                    <Link href="https://www.instagram.com/marylandinstitute/" passHref><FaInstagram size={14} /></Link>
                    <Link href="https://www.youtube.com/@midonline" passHref><FaYoutube size={14} /></Link>
                </div>
            </div>
      </footer>
    )
}