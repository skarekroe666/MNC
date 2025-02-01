import React from 'react'
import { Button } from "@/components/ui/button"
import logo from '../../src/assets/logo.png'
import { Mail } from 'lucide-react'

const Navbar = () => {
    
    return (
        <div className="m-3 flex justify-between items-center">
            {/* Logo */}
            <a href="">
                <img src={logo} alt="MNC" className="h-14" />
            </a>

            {/* Navigation */}
            <nav>
                <ul className="flex space-x-14">
                    {["Home", "About", "Shop", "Contact"].map((item, index) => (
                        <li
                            key={index}
                            className="relative text-neutral-700 text-lg font-medium cursor-pointer group transition-transform duration-300">
                            {item}
                            {/* Underline effect */}
                            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-neutral-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Button */}
            <Button variant="mayleen">
                Get in touch <Mail />
            </Button>
        </div>
    )
}

export default Navbar