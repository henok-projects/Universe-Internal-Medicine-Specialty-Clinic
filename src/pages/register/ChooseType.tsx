import { Hospital, UserRoundPlus } from 'lucide-react'
import React from 'react'
import { Button } from '../../components/ui/button'
import Navbar from '../constants/navbar/Navbar'


const registerType = [
    {

        title: 'Health Provider',
        href: '/register_provider',
        icon: Hospital,
        description: "Are you a healthcare provider? For pharmacies and hospitals"
    },

    {
        title: 'Patient',
        href: '',
        icon: UserRoundPlus,
        description: "Seeking Healthcare? For individuals"
    },

]




const ChooseType: React.FC<{}> = () => {
    return (
        <>
           <Navbar />

            {/**Choose section */}
            <div className='flex flex-col h-lvh justify-center gap-10'>
                <div className='h-auto flex justify-center'>
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        How do you want to join?
                    </h2>
                </div>
                <div className='flex items-center justify-center w-full'>
                    <ul role="list" className="flex flex-wrap gap-10 justify-center">
                        {registerType.map((item) => (
                            <li key={item.title} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
                                <div key={item.title} className="group flex flex-col gap-2 relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50 min-w-[250px] max-w-[251px]">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-primary" aria-hidden="true" />
                                    </div>
                                    <a href={item.href} className="mt-6 block text-lg font-semibold text-primary">
                                        {item.title}
                                        <span className="absolute inset-0" />
                                    </a>
                                    <p className="mt-1 text-gray-600">{item.description}</p>

                                    <Button variant='default' size='sm'>
                                        Sign Up
                                    </Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}


export default ChooseType;