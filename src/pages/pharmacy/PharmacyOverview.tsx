import React, { PropsWithChildren } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Layout from '../layout/Layout'
import { cn } from '@/lib/utils'
import { ArrowLeftRight, ChevronDown, Copy, EllipsisIcon, Link, Plus, QrCode, Settings, Store, User, Wallet } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'



const PharmacyOverview: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const { id } = useParams<{ id: string }>()

    const tabs = [
        { name: 'Employees', href: `/pharmacy/${id}/overview/employee`, icon: User },
        { name: 'Inventory', href: `/pharmacy/${id}/overview/inventory`, icon: Store },
        { name: 'Transaction', href: `/pharmacy/${id}/overview/transaction`, icon: ArrowLeftRight },
        { name: 'Billing', href: `/pharmacy/${id}/overview/billing`, icon: Wallet },
        { name: 'Setting', href: `/pharmacy/${id}/overview/settings`, icon: Settings },
    ]

    return (
        <Layout>
            <div>
                <div className="flex sm:flex-row sm:items-center md:justify-between justify-start sm:gap-y-0 mb-8">
                    <div className="min-w-0 flex-1">
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-lg sm:tracking-tight">
                            Pharmacy ABC
                        </h2>
                        <Badge variant='outline' >
                            <div className='flex gap-x-[4px] py-[1px]'>
                                <p>
                                    {"1b577a35-b2ee-40e7-bf28-e615ee49ed87".slice(0, 10)}
                                </p>
                                <Copy size={14} className='cursor-pointer' />
                            </div>
                        </Badge>
                    </div>

                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <div className='border border-gray-200 rounded-sm px-3 sm:hidden'>
                                    <EllipsisIcon />
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Deactivate</DropdownMenuItem>
                                <DropdownMenuItem>Public link</DropdownMenuItem>
                                <DropdownMenuItem>Generate QR</DropdownMenuItem>
                                
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div className='hidden sm:flex flex-wrap justify-start gap-x-2'>
                        <Button>
                            <div className='flex gap-x-2'>
                                <QrCode />
                                <p>Generate QR</p>
                            </div>
                        </Button>

                        <Button variant='outline'>
                            <div className='flex gap-x-2'>
                                <Link />
                                <p>Public Link</p>
                            </div>
                        </Button>

                        <Button variant='destructive'>
                            <div className='flex gap-x-2'>
                                <p>Deactivate</p>
                            </div>
                        </Button>
                    </div>

                </div>


                <div className="block">
                    <div className="border-b border-gray-200">
                        <nav className="-mb-px flex justify-between space-x-8 overflow-x-auto" aria-label="Tabs">
                            {tabs.map((tab) => (
                                <NavLink
                                    key={tab.name}
                                    to={tab.href}
                                    className={({ isActive }) => {
                                        return (
                                            cn(
                                                isActive
                                                    ? 'border-primary text-primary'
                                                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                                'group inline-flex items-center border-b-2 px-1 py-4 text-sm font-medium',
                                            )
                                        )
                                    }}

                                >
                                    <tab.icon
                                        className={cn(
                                            '-ml-0.5 mr-2 h-5 w-5',
                                        )}
                                        aria-hidden="true"
                                    />
                                    <span>{tab.name}</span>
                                </NavLink>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
            <div className='h-lvh mt-10'>
                {children}
            </div>
        </Layout>
    )
}

export default PharmacyOverview