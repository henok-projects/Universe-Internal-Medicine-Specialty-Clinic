import React, { PropsWithChildren, useState } from 'react';
import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems, Transition, TransitionChild } from '@headlessui/react';
import {
  AlignJustify,
  ArrowLeftRight,
  Bell,
  Building,
  ChevronDown,
  CircleDollarSign,
  ClipboardPlus,
  Hospital,
  LayoutDashboard,
  MailQuestion,
  Pill,
  Settings,
  User,
  WalletCards,
  Warehouse,
  X,
} from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

// Super Admin, Provider Admin, Hospital Admin, Pharmacy Admin, Department Admin, Doctor, Nurse, Front Desk Staff, Pharmacist, Sales Person, Patient
const navigation = [
  {
    name: 'Dashboard',
    href: '/hospital-management',
    icon: LayoutDashboard,
    roles: ['SUPER_ADMIN', 'PROVIDER_ADMIN', 'HOSPITAL_ADMIN', 'PHARMACY_ADMIN', 'DEPARTMENT_ADMIN'],
  },
  { name: 'Pharmacy', href: '/pharmacy', icon: Pill, roles: ['PROVIDER_ADMIN'] },
  { name: 'Requests', href: '/requests', icon: MailQuestion, roles: ['SUPER_ADMIN'] },
  {
    name: 'Employees',
    href: '/employees',
    icon: User,
    roles: ['SUPER_ADMIN', 'PROVIDER_ADMIN', 'HOSPITAL_ADMIN', 'PHARMACY_ADMIN', 'DEPARTMENT_ADMIN'],
  },
  {
    name: 'Patients',
    href: '/patients',
    icon: ClipboardPlus,
    roles: ['SUPER_ADMIN', 'HOSPITAL_ADMIN', 'DOCTOR', 'NURSE', 'FRONT_DESK_STAFF', 'PHARMACIST'],
  },
  { name: 'Pricing', href: '/pricing-dashboard', icon: CircleDollarSign, roles: ['SUPER_ADMIN'] },
  { name: 'Institution branchs', href: '/institutions', icon: Building, roles: ['PROVIDER_ADMIN'] },
  {
    name: 'Transaction',
    href: '/transactions',
    icon: ArrowLeftRight,
    roles: ['PROVIDER_ADMIN', 'PHARMACY_ADMIN', 'PHARMACIST', 'SALES_PERSON'],
  },
  { name: 'Billing', href: '/billing', icon: WalletCards, roles: ['PROVIDER_ADMIN', 'PHARMACY_ADMIN'] },
  { name: 'Inventory', href: '/inventory', icon: Warehouse, roles: ['PROVIDER_ADMIN', 'PHARMACY_ADMIN', 'PHARMACIST'] },
  { name: 'Healthcare Centers', href: '/health-care', icon: Hospital, roles: ['PATIENT'] },
];

const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = useNavigate();

  const { user, isLoggedIn } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <>
      <div>
        <Transition show={sidebarOpen}>
          <Dialog className="relative z-10 lg:hidden" onClose={setSidebarOpen}>
            <TransitionChild
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </TransitionChild>

            <div className="fixed inset-0 flex">
              <TransitionChild
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <TransitionChild
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <X className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </TransitionChild>
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-primary px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                      <img className="h-8 w-auto" src="/asset/Favicons/universe-Logo-1.png" alt="Your Company" />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map(item => {
                              if (item.roles.includes(user.role)) {
                                return (
                                  <li key={item.name}>
                                    <NavLink
                                      to={item.href}
                                      className={({ isActive }) => {
                                        return isActive
                                          ? 'bg-primary text-white group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                                          : 'text-indigo-200 hover:bg-primary hover:text-white group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6';
                                      }}
                                    >
                                      <item.icon className="text-primary group-hover:text-white h-6 w-6 shrink-0" />
                                      {item.name}
                                    </NavLink>
                                  </li>
                                );
                              }
                            })}
                          </ul>
                        </li>

                        <li className="mt-auto">
                          <a
                            href="#"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-primary hover:text-white"
                          >
                            <Settings className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white" aria-hidden="true" />
                            Settings
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-primary px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center justify-start">
              <img className="h-14 w-auto" src="/asset/Favicons/universe-Logo-1.png" alt="Your Company" />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map(item => {
                      if (item.roles.includes(user.role)) {
                        return (
                          <li key={item.name}>
                            <NavLink
                              to={item.href}
                              className={({ isActive }) => {
                                return isActive
                                  ? 'bg-blue-500 text-white group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                                  : 'text-indigo-200 hover:bg-primary hover:text-white group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6';
                              }}
                            >
                              <item.icon aria-hidden="true" />
                              {item.name}
                            </NavLink>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </li>

                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-blue-500 hover:text-white"
                  >
                    <Settings className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white" aria-hidden="true" />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
              <span className="sr-only">Open sidebar</span>
              <AlignJustify aria-hidden="true" />
            </button>

            {/* Separator */}
            <div className="h-6 w-px bg-gray-900/10 lg:hidden shadow-md" aria-hidden="true" />

            <div className="flex flex-1 justify-end gap-x-4 self-stretch lg:gap-x-6">
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">View notifications</span>
                  <Bell className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Separator */}
                <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <MenuButton className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                        {user.firstName}
                      </span>
                      <ChevronDown className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </MenuButton>
                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map(item => (
                        <MenuItem key={item.name}>
                          {({ focus }) => (
                            <a
                              onClick={item.name == 'Sign out' ? handleLogout : null}
                              className={classNames(
                                focus ? 'bg-gray-50' : '',
                                'block px-3 py-1 text-sm leading-6 text-gray-900 cursor-pointer'
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
