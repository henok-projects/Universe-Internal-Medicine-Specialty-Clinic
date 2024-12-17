import React, { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import {
  Ambulance,
  Check,
  ClipboardPlus,
  Cross,
  Hospital,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Siren,
  SquareGanttChart,
  X,
} from 'lucide-react';
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

const features = [
  {
    name: 'Attract More Patients',
    description: 'Grow your practice online. Our digital health platform attracts patients.',
    icon: Ambulance,
  },
  {
    name: 'Patient-Centric Care',
    description: 'Delight patients with easy scheduling, reminders & secure access.',
    icon: ClipboardPlus,
  },
  {
    name: 'Better Care',
    description: 'Expand care options (video, text, plans) & improve communication for better patient experience.',
    icon: Cross,
  },
  {
    name: 'Effortless Practice',
    description: 'Manage patients, billing, and operations using an all-in-one digital health platform.',
    icon: SquareGanttChart,
  },
  {
    name: 'Multiple Language Support',
    description: 'Patient interfaces available in 2 languages for easier access.',
    icon: Languages,
  },
  {
    name: 'Stellar Support',
    description: 'World-class helpdesk to support your clinic’s needs.',
    icon: Siren,
  },
];

const products = [
  {
    name: 'Drug Management',
    description: 'Organize medications, track refills, and ensure smooth care.',
  },
  {
    name: 'Employee Management',
    description: 'Streamline HR tasks and improve staff performance.',
  },
  {
    name: 'Centralized Hospital Management',
    description: 'Complete control over branches with our centralized system.',
  },
  {
    name: 'Schedule Appointments',
    description: 'Quickly schedule appointments with healthcare professionals.',
  },
  {
    name: 'Billing',
    description: 'Pay online and access billing history easily.',
  },
  {
    name: 'Medical Records',
    description: 'Securely record patient history and provide patient access to records.',
  },
  {
    name: 'Data Visualization',
    description: 'Gain insights into monthly and yearly clinic activities.',
  },
  {
    name: 'Report Generation',
    description: 'Generate and export reports in PDF, XLSX, and CSV formats.',
  },
];

export default function HospitalManagementLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Universe Internal Medicine Specialty Clinic</span>
              <img className="h-10 w-10 rounded-full object-cover" src="../asset/png/universe-Logo-1.png" alt="universe clinic" />
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
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0077ff] to-[#0077ff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="slider w-full h-screen md:h-[70vh] sm:h-[50vh] flex items-center justify-center relative">
            <div className="w-full h-full relative flex flex-col items-center justify-center pl-3 mt-10 pr-3">
              <img
                src="../asset/Images/img-5.jpeg"
                alt="Universe Clinic image"
                className="image w-full h-full object-cover rounded-2xl shadow-lg border border-gray-200"
              />
              <div className="content absolute bottom-4 left-4 bg-black bg-opacity-60 text-white p-4 md:p-6 rounded-lg max-w-[90%] md:max-w-[70%]">
                <hr className="mb-4 border-gray-500" />
              </div>
            </div>
          </div>
          <div className="py-10 sm:py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-6xl text-center">
                <div className="relative pt-6 text-white py-6 rounded-lg" style={{ backgroundColor: 'rgb(8, 24, 94)' }}>
                  <div className="text-center">
                    <h1 className="text-5xl font-bold">Your Trusted Partner in Healthcare</h1>
                  </div>
                </div>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                  At <strong>Universe Internal Medicine Specialty Clinic</strong>, we bridge the gap between patients and providers,
                  offering a comprehensive range of healthcare services designed to simplify your healthcare experience. We empower you with
                  a complete toolkit of medical solutions—delivered with compassion, expertise, and cutting-edge technology.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  As the second branch of the well-known <strong> Heran Clinic</strong> in Ambo City, Oromia, established in February 2021,
                  Universe Clinic brings the same standard of excellence to Addis Ababa. Our dedicated team, led by renowned doctors and
                  specialists, is committed to providing top-tier healthcare and fostering a collaborative environment for healthcare
                  professionals.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="/about"
                    className="rounded-md px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm"
                    style={{ backgroundColor: 'rgb(8, 24, 94)' }}
                  >
                    Learn more
                  </a>
                  <a href="/services" className="text-base font-semibold leading-7" style={{ color: 'rgb(8, 24, 94)' }}>
                    Our services <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features section */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-primary">Comprehensive Solutions for Clinics</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                We understand the unique challenges faced by medical facilities
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our digital health platform offers the tools you need to enhance patient care, streamline operations, and expand your
                services.
              </p>
            </div>
            <div className="mt-20 max-w-lg sm:mt-24 lg:mt-32 lg:max-w-none">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                {features.map(feature => (
                  <div key={feature.name} className="flex">
                    <feature.icon className="h-12 w-12 flex-none text-primary" aria-hidden="true" />
                    <div className="ml-4">
                      <h3 className="text-base font-semibold leading-7 text-gray-900">{feature.name}</h3>
                      <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                    </div>
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
