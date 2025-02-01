import React from 'react'
import logo from '../../src/assets/logo.png'
import { Button } from "@/components/ui/button"

const Shop = () => {
    return (
        <div className='flex flex-col items-center justify-center my-10'>
            <h1 className="text-neutral-700 text-center font-bold text-[50px] m-10">Get in touch</h1>

            <form action="#" className="mt-8 grid grid-cols-6 gap-6 border border-neutral-300 rounded-lg p-9">
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                        First Name:
                    </label>

                    <input
                        type="text"
                        id="FirstName"
                        name="first_name"
                        className="mt-1 p-2 border w-full rounded-md border-gray-300 bg-white text-sm text-gray-700 shadow-xs"
                    />
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                        Last Name:
                    </label>

                    <input
                        type="text"
                        id="LastName"
                        name="last_name"
                        className="mt-1 p-2 border w-full rounded-md border-gray-300 bg-white text-sm text-gray-700 shadow-xs"
                    />
                </div>

                <div className="col-span-6">
                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email: </label>

                    <input
                        type="email"
                        id="Email"
                        name="email"
                        className="mt-1 w-full p-2 border rounded-md border-gray-300 bg-white text-sm text-gray-700 shadow-xs"
                    />
                </div>
                <div className="col-span-6">
                    <label htmlFor="Message" className="block text-sm font-medium text-gray-700"> Message: </label>

                    <textarea
                        id="Message"
                        name="message"
                        className="mt-1 w-full h-[100px] p-2 border rounded-md border-gray-300 bg-white text-sm text-gray-700 shadow-xs resize-none"
                    ></textarea>
                </div>

                <Button variant="mayleen">Submit</Button>
            </form>
        </div>
    )
}

export default Shop