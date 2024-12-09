import React from "react";
import Navbar from "../navbar/Navbar";
import { Button } from "@/components/ui/button";

interface Props{
    heading?: string
}

const  Newsletter: React.FC<Props> = ({heading = "Get notified when we're launching."}) => {
    return (
        <div className="bg-white py-16 sm:py-24">
            <Navbar />
            <div className="relative sm:py-16">
                <div aria-hidden="true" className="hidden sm:block">
                    <div className="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-gray-50" />
                    <svg className="absolute left-1/2 top-8 -ml-3" width={404} height={392} fill="none" viewBox="0 0 404 392">
                        <defs>
                            <pattern
                                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                       
                    </svg>
                </div>
                <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8">
                    <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-10 shadow-xl sm:px-12 sm:py-20">
                        <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
                        </div>
                        <div className="relative">
                            <div className="sm:text-center">
                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                    {heading}
                                </h2>
                                <p className="mx-auto mt-6 max-w-2xl text-lg text-indigo-200">
                                We're launching soon! Be the first to know when we go live.
                                </p>
                            </div>
                            <form action="#" className="mt-12 sm:mx-auto sm:flex sm:max-w-lg">
                                <div className="min-w-0 flex-1">
                                    <label htmlFor="cta-email" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="cta-email"
                                        type="email"
                                        className="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="mt-4 sm:ml-3 sm:mt-0">
                                    <Button variant='outline' className='py-6'>
                                        Notify me
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter