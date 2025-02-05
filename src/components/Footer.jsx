import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-white py-6">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
                    <p className="text-sm">&copy; {new Date().getFullYear()} MNC. All rights reserved.</p>
                    <nav className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
                        <a href="#" className="text-gray-400 hover:text-white">Contact</a>
                    </nav>
                </div>
            </footer>
        </div>
    )
}

export default Footer