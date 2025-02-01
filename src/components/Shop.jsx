import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Shop = () => {
    return (
        <div className='flex flex-col my-10'>
            <h1 className="text-neutral-700 text-center font-bold text-[50px] m-10">Shop</h1>


            <div className='flex justify-around h-full'>
                <Card className=' flex flex-col text-center items-center'>
                    <CardHeader>
                        <CardTitle>Contact</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Contact: +91 7507083138</p>
                        <p>Address: </p>
                        <p>Email: mnc@email.com</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default Shop