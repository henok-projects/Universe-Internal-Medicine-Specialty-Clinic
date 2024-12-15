import React, { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Linkedin, Mail, MapPin, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Pricing', href: '/pricing' },
  { name: 'Careers', href: '/careers' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Services', href: '/services' },
];

const links = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gudeta-imana-2708a111b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: Linkedin,
  },
  {
    name: 'Gmail',
    href: 'mailto:universeclinic2023@gmail.com',
    icon: Mail,
  },
  {
    name: 'Google map location',
    href: 'https://maps.app.goo.gl/KsKYwJeCarNmaZAr9',
    icon: MapPin,
  },
];

const jobListings = [
  {
    title: 'Internal Medicine Physician',
    location: 'Addis Ababa, Ethiopia',
    description: 'Join our dedicated team of healthcare professionals and provide high-quality medical care to patients.',
    responsibilities: [
      'Conduct patient evaluations and examinations.',
      'Diagnose and treat medical conditions.',
      'Collaborate with a team of healthcare providers.',
      'Provide education to patients on preventive care.',
    ],
    requirements: [
      'MD or DO degree.',
      'Board certification in Internal Medicine.',
      'Strong communication and interpersonal skills.',
      'Commitment to patient-centered care.',
    ],
  },
  {
    title: 'Registered Nurse',
    location: 'Addis Ababa, Ethiopia',
    description: 'We are seeking a compassionate and skilled Registered Nurse to provide excellent patient care.',
    responsibilities: [
      'Assist physicians in patient assessments and treatments.',
      'Administer medications and monitor patient progress.',
      'Educate patients and families about health conditions.',
      'Maintain accurate patient records and documentation.',
    ],
    requirements: [
      'Valid nursing license in Ethiopia.',
      'Experience in a clinical setting preferred.',
      'Excellent critical thinking and problem-solving skills.',
      'Ability to work collaboratively in a team environment.',
    ],
  },
];

export default function CareersPage() {
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
                    <h1 className="text-5xl font-bold">Join Our Team</h1>
                  </div>
                </div>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  At Universe Internal Medicine Specialty Clinic, we are committed to creating a collaborative and compassionate
                  environment. Explore our job opportunities and help us provide exceptional care to our patients.
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

        {/* Job Listings section */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-primary">Current Openings</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Explore the opportunities to make a difference
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We are looking for passionate individuals who are dedicated to improving patient care.
              </p>
            </div>
            <div className="mt-20 max-w-lg sm:mt-24 lg:mt-32 lg:max-w-none">
              <div className="grid grid-cols-1 gap-12">
                {jobListings.map(job => (
                  <div key={job.title} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold leading-7 text-gray-900">{job.title}</h3>
                    <p className="text-sm text-gray-500">{job.location}</p>
                    <p className="mt-2 text-base leading-7 text-gray-600">{job.description}</p>
                    <h4 className="mt-4 font-semibold leading-7 text-gray-800">Responsibilities</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {job.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                    <h4 className="mt-4 font-semibold leading-7 text-gray-800">Requirements</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                    <a
                      href="mailto:universeclinic2023@gmail.com"
                      className="mt-4 inline-block rounded-md px-4 py-2 text-base font-semibold leading-7 text-white"
                      style={{ backgroundColor: 'rgb(8, 24, 94)' }}
                    >
                      Apply Now
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
