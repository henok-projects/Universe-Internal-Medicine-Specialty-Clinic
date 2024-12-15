import { CheckCircle, Mail, MapPin, Phone } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Button } from '../../components/ui/button';
import Navbar from '../constants/navbar/Navbar';
import { Ambulance, Check, ClipboardPlus, Cross, Hospital, Languages, Linkedin, Menu, Siren, SquareGanttChart, X } from 'lucide-react';

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

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    console.log(`Name: ${name}, Value: ${value}`);
    // Map `first-name` to `firstName` and `last-name` to `lastName`
    const fieldName = name === 'first-name' ? 'firstName' : name === 'last-name' ? 'lastName' : name;
    setFormData(prevFormData => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // Show success message optimistically
    setStatus('success'); // Display success message immediately
    try {
      // const response = await fetch('http://localhost:5000/api/contact', {
      const response = await fetch('universe-internal-medicine-specialty-clinic-backend-8bqtm7m41.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        setStatus('error'); // Update to error if the response fails
      }
    } catch (error) {
      console.error(error);
      setStatus('error'); // Handle network errors
    }

    // Reset the form fields
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  useEffect(() => {
    if (status) {
      const timeout = setTimeout(() => {
        setStatus(null); // Reset status after 20 seconds
      }, 20000);

      return () => clearTimeout(timeout); // Cleanup timeout
    }
  }, [status]);

  return (
    <div className="bg-white ">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 py-16 mt-8 sm:py-24 lg:px-8 ">
        <div className="relative bg-white shadow-xl">
          <h2 className="sr-only">Contact us</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 shadow-sm">
            {/* Contact information */}
            <div className="relative overflow-hidden px-6 py-10 sm:px-10 xl:p-12" style={{ backgroundColor: 'rgb(8, 24, 94)' }}>
              <div className="pointer-events-none absolute inset-0 sm:hidden" aria-hidden="true">
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={343}
                  height={388}
                  viewBox="0 0 343 388"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z" fill="url(#linear1)" fillOpacity=".1" />
                  <defs>
                    <linearGradient id="linear1" x1="254.553" y1="107.554" x2="961.66" y2="814.66" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/2 sm:block lg:hidden" aria-hidden="true">
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={359}
                  height={339}
                  viewBox="0 0 359 339"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <path d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z" fill="url(#linear2)" fillOpacity=".1" />
                  <defs>
                    <linearGradient id="linear2" x1="192.553" y1="28.553" x2="899.66" y2="735.66" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/2 lg:block" aria-hidden="true">
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={160}
                  height={678}
                  viewBox="0 0 160 678"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <path d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z" fill="url(#linear3)" fillOpacity=".1" />
                  <defs>
                    <linearGradient id="linear3" x1="192.553" y1="325.553" x2="899.66" y2="1032.66" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white">Contact information</h3>
              <p className="mt-6 max-w-3xl text-base text-indigo-50">You can find our contact information here</p>
              <dl className="mt-8 space-y-6">
                <dt>
                  <span className="sr-only">Telephone</span>
                </dt>
                <dd className="flex text-base text-indigo-50">
                  <Phone className="h-6 w-6 flex-shrink-0 text-indigo-200" aria-hidden="true" />
                  <span className="ml-3">0116390354</span>
                </dd>
                <dt>
                  <span className="sr-only">Email</span>
                </dt>
                <dd className="flex text-base text-indigo-50">
                  <Mail className="h-6 w-6 flex-shrink-0 text-indigo-200" aria-hidden="true" />
                  <span className="ml-3">universeclinic2023@gmail.com </span>
                </dd>
              </dl>
              <ul role="list" className="mt-8 flex space-x-12">
                <li>
                  <a
                    className="text-indigo-200 hover:text-indigo-100"
                    href="https://web.facebook.com/p/Universe-Internal-Medicine-Specialty-Clinic-100085633663763/?_rdc=1&_rdr#"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Follow us on Facebook"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="text-indigo-200 hover:text-indigo-100"
                    href="https://www.linkedin.com/in/gudeta-imana-2708a111b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Follow us on LinkedIn"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M4.98 3C3.24 3 2 4.24 2 5.98v12.04C2 19.76 3.24 21 4.98 21h14.04c1.74 0 3-1.24 3-3.02V5.98C22 4.24 20.76 3 19.02 3H4.98zM8.06 16H6.56v-6.12h1.5V16zM7.31 8.94C6.72 8.94 6.19 8.43 6.19 7.82c0-.6.52-1.12 1.12-1.12.6 0 1.12.52 1.12 1.12 0 .61-.52 1.12-1.12 1.12zm9.44 7.06h-1.5v-3.48c0-.96-.51-1.57-1.33-1.57-.66 0-1.04.45-1.21.89-.07.18-.1.43-.1.68v3.47h-1.5v-6.12h1.5v.83c.33-.51.92-.83 1.56-.83 1.21 0 2.02.83 2.02 2.34v3.79z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <li>
                    <a
                      className="text-indigo-200 hover:text-indigo-100"
                      href="https://www.tiktok.com/@universe.clinic"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Follow us on TikTok"
                    >
                      <span className="sr-only">TikTok</span>
                      <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.372 0 0 5.373 0 12c0 6.628 5.372 12 12 12s12-5.372 12-12c0-6.627-5.372-12-12-12zm6.075 9.75a3.456 3.456 0 01-2.812-1.451c.002 3.597.003 4.164.003 4.164s-.784-.098-1.492-.352v-4.875c-.358-.038-.718-.104-1.076-.19v6.612c0 .048-.01.093-.014.14a3.734 3.734 0 01-3.734-3.734 3.716 3.716 0 01.216-1.204v2.784a1.56 1.56 0 00-1.013-.372c-.862 0-1.561.7-1.561 1.561 0 .862.7 1.56 1.561 1.56a1.561 1.561 0 001.45-1.005 2.88 2.88 0 001.704.556c.062 0 .122-.005.183-.007a4.87 4.87 0 004.202-2.38c.816-1.404.814-3.06.813-3.258.623.425 1.387.662 2.219.662v-1.965h-.003z" />
                      </svg>
                    </a>
                  </li>
                </li>
              </ul>
            </div>

            {/* Contact form */}
            <div className="px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-lg font-medium text-gray-900">Send us a message</h3>
              <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="firstName"
                      id="first-name"
                      placeholder="First Name"
                      autoComplete="given-name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="lastName"
                      id="last-name"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      autoComplete="family-name"
                      className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      className="block w-full border rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                      Phone
                    </label>
                    <span id="phone-optional" className="text-sm text-gray-500">
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Phone (Optional)"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      aria-describedby="phone-optional"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
                    Subject
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="block w-full border rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                      Message
                    </label>
                    <span id="message-max" className="text-sm text-gray-500">
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      aria-describedby="message-max"
                      defaultValue={''}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <Button variant="default" style={{ backgroundColor: 'rgb(8, 24, 94)' }}>
                    Submit
                  </Button>
                  {status && <p>{status}</p>}
                </div>
              </form>
              {/* Success Message */}
              {status === 'success' && (
                <div className="mt-6 flex items-center bg-green-100 border border-green-300 text-green-800 rounded-md p-4">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mr-2" aria-hidden="true" />
                  <p>Your message has been sent successfully!</p>
                </div>
              )}

              {/* Error Message */}
              {status === 'error' && (
                <div className="mt-6 flex items-center bg-red-100 border border-red-300 text-red-800 rounded-md p-4">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mr-2 text-red-500" aria-hidden="true" />
                  <p>Something went wrong. Please try again.</p>
                </div>
              )}
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
    </div>
  );
}
