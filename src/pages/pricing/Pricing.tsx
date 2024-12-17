import React, { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Linkedin, Mail, MapPin, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
  { name: 'Pricing', href: '/pricing' },
];

const links = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/universe-clinic-0bba26341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: Linkedin,
  },
  {
    name: 'Google map location',
    href: 'https://maps.app.goo.gl/KsKYwJeCarNmaZAr9',
    icon: MapPin,
  },
];

const pricingPlans = [
  {
    name: 'Basic Plan',
    price: 'Ethiopian Birr',
    features: ['Access to primary care services', 'Routine check-ups', 'Basic laboratory tests', '24/7 telehealth support'],
  },
  {
    name: 'Standard Plan',
    price: 'Ethiopian Birr',
    features: ['All Basic Plan features', 'Specialist consultations', 'Advanced laboratory tests', 'Health education programs'],
  },
  {
    name: 'Premium Plan',
    price: 'Ethiopian Birr',
    features: [
      'All Standard Plan features',
      'Comprehensive wellness assessments',
      'Nutrition and diet planning',
      'Personalized health coaching',
    ],
  },
];

export default function PricingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Universe Internal Medicine Specialty Clinic</span>
              <img className="h-10 w-10 rounded-full object-cover" src="../asset/png/universe-Logo-1.png" alt="Universe Clinic" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map(item => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="/login">
              <Button variant="default" loading={false} style={{ backgroundColor: 'rgb(8, 24, 94)' }}>
                Sign In <span aria-hidden="true"></span>
              </Button>
            </Link>
          </div>
        </nav>
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Universe Internal Medicine Specialty Clinic</span>
                <img className="h-10 w-10 rounded-full object-cover" src="../asset/png/universe-Logo-1.png" alt="Universe Clinic Logo" />
              </a>
              <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map(item => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main className="isolate">
        {/* Hero section */}
        <div className="relative pt-14">
          <div className="py-10 sm:py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-6xl text-center">
                <div className="relative pt-6 text-white py-6 rounded-lg" style={{ backgroundColor: 'rgb(8, 24, 94)' }}>
                  <div className="text-center">
                    <h1 className="text-5xl font-bold">Affordable Healthcare Plans</h1>
                  </div>
                </div>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  At Universe Internal Medicine Specialty Clinic, we believe in transparent pricing to make healthcare accessible to all.
                  Explore our plans and find the right fit for your health needs.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    to="/about"
                    className="rounded-md px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm"
                    style={{ backgroundColor: 'rgb(8, 24, 94)' }}
                  >
                    Learn more about us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Plans section */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-primary">Choose Your Plan</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple and Clear Pricing</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our pricing plans are designed to provide comprehensive care while being budget-friendly.
              </p>
            </div>
            <div className="mt-20 max-w-lg sm:mt-24 lg:mt-32 lg:max-w-none">
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                {pricingPlans.map(plan => (
                  <div key={plan.name} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold leading-7 text-gray-900">{plan.name}</h3>
                    <p className="text-xl font-bold text-gray-900">{plan.price}</p>
                    <h4 className="mt-4 font-semibold leading-7 text-gray-800">Features</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {plan.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    <br />
                    <a
                      href="mailto:universeclinic2023@gmail.com"
                      className="mt-4 inline-block rounded-md px-4 py-2 text-base font-semibold leading-7 text-white"
                      style={{ backgroundColor: 'rgb(8, 24, 94)' }}
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer section */}
        <footer className="text-white" style={{ backgroundColor: 'rgb(8, 24, 94)' }}>
          <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="mb-4 lg:mb-0">
                <a href="/" className="flex items-center">
                  <img className="h-10 w-10 rounded-full object-cover" src="../asset/png/universe-Logo-1.png" alt="Universe Clinic Logo" />
                  <span className="ml-3 text-xl font-bold">Universe Internal Medicine Specialty Clinic</span>
                </a>
              </div>
              <div className="flex space-x-4">
                {links.map(link => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank" // Ensures the link opens in a new tab
                    rel="noopener noreferrer" // Adds security
                    className="text-white hover:text-gray-300"
                  >
                    <link.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
                <a href="mailto:universeclinic2023@gmail.com" className="text-white hover:text-gray-300">
                  <Mail className="h-6 w-6" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm">© 2024 Universe Internal Medicine Specialty Clinic. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
