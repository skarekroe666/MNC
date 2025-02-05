import React, { useState } from 'react'
import logo from '../../src/assets/logo.png'
import { Button } from "@/components/ui/button"

const Shop = () => {

    const [result, setResult] = useState("")

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key","68c74add-7d7c-4d40-a4b8-984ee3cedfbe");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        console.log(response)

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='flex flex-col items-center justify-center my-10 px-4'>
            <h1 className="text-neutral-700 text-center font-bold text-3xl sm:text-4xl md:text-5xl m-6 sm:m-10">Get in touch</h1>

            <form action="#" onSubmit={onSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 shadow-md border border-neutral-300 rounded-lg p-6 sm:p-9 w-full max-w-2xl">
                <div className="col-span-1">
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

                <div className="col-span-1">
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

                <div className="col-span-1 sm:col-span-2">
                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email: </label>

                    <input
                        type="email"
                        id="Email"
                        name="email"
                        className="mt-1 w-full p-2 border rounded-md border-gray-300 bg-white text-sm text-gray-700 shadow-xs"
                    />
                </div>
                <div className="col-span-1 sm:col-span-2">
                    <label htmlFor="Message" className="block text-sm font-medium text-gray-700"> Message: </label>

                    <textarea
                        id="Message"
                        name="message"
                        className="mt-1 w-full h-24 p-2 border rounded-md border-gray-300 bg-white text-sm text-gray-700 shadow-xs resize-none"
                    ></textarea>
                </div>

                <div className="col-span-1 sm:col-span-2 flex justify-center">
                    <Button variant="mayleen">Submit</Button>
                </div>
            </form>
            <span className="mt-4 text-sm text-gray-700">{result}</span>
        </div>
        
    )
}

export default Shop