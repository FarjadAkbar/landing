"use client"
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons from react-icons

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="container flex justify-between items-center border-b border-gray-200 py-4 mx-auto">
            {/* Logo */}
            <div className="flex items-center">
                <Image
                    src="/logo.webp"
                    alt={process.env.NEXT_PUBLIC_APP_NAME as string}
                    width={50}
                    height={50}
                />
                <h1 className="hidden md:block text-2xl font-bold ml-4">{process.env.NEXT_PUBLIC_APP_NAME as string}</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-wrap items-center gap-8">
                <Link href="#about">About</Link>
                <Link href="#mission">Mission</Link>
                <Link href="#courses">Courses</Link>
                <Link href="#testimonial">Testimonial</Link>
                <Link href="#faq">Faq</Link>
                <Link href="#lead">
                    <Button>Get Started</Button>
                </Link>
            </nav>

            {/* Mobile Menu Toggle Button */}
            <button
                className="md:hidden focus:outline-none"
                onClick={toggleMenu}
            >
                {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>

            {/* Mobile Drawer Menu */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden z-50">
                    <nav className="flex flex-col items-center gap-4 p-4">
                        <Link href="#about" onClick={toggleMenu}>About</Link>
                        <Link href="#mission" onClick={toggleMenu}>Mission</Link>
                        <Link href="#courses" onClick={toggleMenu}>Courses</Link>
                        <Link href="#testimonial" onClick={toggleMenu}>Testimonial</Link>
                        <Link href="#faq" onClick={toggleMenu}>Faq</Link>
                        <Link href="#lead" onClick={toggleMenu}>
                            <Button className="w-full">Get Started</Button>
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
