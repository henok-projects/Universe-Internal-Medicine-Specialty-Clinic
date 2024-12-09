import React from 'react';

import Navbar from '../constants/navbar/Navbar';
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

const stats = [
  { label: 'Patients treated every 24 hours', value: 'Healthcare Services' },
  { label: 'Access to care 24/7', value: 'Patient Support' },
];
const values = [
  {
    name: 'Compassionate Care',
    description: 'We provide compassionate care that prioritizes patient well-being at all times.',
  },
  {
    name: 'Loyalty to Customers',
    description: 'We are committed to building and maintaining strong relationships with our customers.',
  },
  {
    name: 'Respect and Motivation for Workforce',
    description:
      'We show appropriate respect and provide motivation to both skilled and non-skilled labor forces, recognizing their contribution to our success.',
  },
  {
    name: 'Service and Product Quality',
    description: 'We maintain high-quality service and products at all levels of our operations.',
  },
  {
    name: 'Transparency',
    description: 'We believe in clear, open, and transparent communication in everything we do.',
  },
  {
    name: 'Confidentiality',
    description: 'We ensure the confidentiality of all personal and sensitive information.',
  },
  {
    name: 'Collaborations (Local and International)',
    description: 'We foster strong collaborations with local and international partners for better outcomes.',
  },
  {
    name: 'Participatory Decisions in Patient Care',
    description: 'We involve patients in the decision-making process regarding their care for a collaborative approach.',
  },
  {
    name: 'Cost Reduction Strategy',
    description: 'We adopt and apply continuous strategies to reduce costs while maintaining high standards of care.',
  },
  {
    name: 'Stakeholder Relationships',
    description: 'We build and maintain smooth working relationships with other stakeholders and government institutions.',
  },
];

const links = [
  {
    name: 'LinkedIn',
    href: '#',
    icon: Linkedin,
  },
  {
    name: 'Gmail',
    href: '#',
    icon: Mail,
  },
  {
    name: 'Google map location',
    href: 'https://maps.app.goo.gl/KsKYwJeCarNmaZAr9',
    icon: MapPin,
  },
];

export default function About() {
  return (
    <div className="bg-white h-lvh">
      {/* Header */}
      <Navbar />

      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width={200} height={200} x="50%" y={-1} patternUnits="userSpaceOnUse">
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" strokeWidth={0} />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#0077ff] to-[#0077ff] opacity-30"
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    We are improving the health status of our community
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    <strong>Universe Internal Medicine Specialty Clinic </strong> is a second branch of Heran Clinic, which was established
                    at Ambo City,West Shoa, Oromia region in February 2021G.C. and is a well known and most valued private clinic in ambo
                    city for its comprehensive quality services and compassionate care.
                  </p>

                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    Universe Clinic was established to provide mainly preventive, diagnostic, curative, health promotive and rehabilitative
                    Internal Medicine care in Addis Ababa, Lemi Kura subcity, Woreda 03, Zone 05 at Straight 08 of Ayat- Bole Arabsa Main
                    Road in August 2022.
                  </p>

                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    Both Clinics have been established to create a good opportunity for the nearby communities to get an alternative quality
                    and holistic health care services at one spot at affordable costs by different experienced specialist/sub-specialist
                    physicians using modern diagnostic laboratories and imaging technologies and state of art pertaining to its vision and
                    missions.
                  </p>

                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    In additions,the establishment of the Clinics avoids unnecessary delay in diagnosis and treatment of patients which in
                    turn decreases unnecessary death and morbidity and increases patient satisfactions. Furthermore, the establishment of
                    the clinics decreases the high unemployment rate of health professionals and other professionals in the vicinity.
                  </p>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    In addition, Universe Clinics is passionate to make partnership with different governmental and non-governmental
                    organizations like Banks, Real States, agencies etc. to provide a high quality and timely medical care compassionately
                    to their staffs at affordable prices on postpaid agreements/deals.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="/asset/Images/universe-6.jpeg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="/asset/Images/universe-2.jpeg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/asset/Images/universe-3.jpeg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="/asset/Images/universe-4.jpeg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/asset/Images/universe-5.jpeg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our mission */}
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-4">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our mission</h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                  <strong>Heran Clinics</strong> is dedicated to mobilizing, coordinating, and organizing financial, human, and material
                  resources to ensure a cost-effective and efficient healthcare service system. We achieve this by leveraging modern
                  biomedical technologies and a team of caring, compassionate, and ethically skilled health professionals. Our goal is to
                  meet the community's healthcare demands, quality standards, and preferences for services and products.
                </p>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map(stat => (
                    <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                      <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                      <dd className="text-2xl font-normal tracking-tight text-gray-900">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">GOAL</h2>
            <div className="mt-1 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                  The main goal of our Clinics is improving the health status of our community through provision of quality, accessible and
                  affordable healthcare service as outpatient, emergency and in patient services.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl pb-8 px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-10 sm:text-4xl">Our values</h2>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map(value => (
              <div key={value.name}>
                <dt className="font-semibold text-gray-900">{value.name}</dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        {/* Footer section */}
        <footer className="bg-primary text-white">
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
