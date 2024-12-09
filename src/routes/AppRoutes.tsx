import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../utils/PrivateRoutes';
import HospitalManagementLanding from '@/pages/home/Home';
import Login from '@/pages/login/Login';
import RegisterProvider from '@/pages/register/ProviderRegister/RegisterProvider';
import ChooseType from '@/pages/register/ChooseType';
import About from '@/pages/about/About';
import Pricing from '@/pages/pricing/Pricing';
import Careers from '@/pages/careers/Careers';
import Dashboard from '@/pages/dashboard/Dashboard';
import Patient from '@/pages/patient/Patient';
import Pharmacy from '@/pages/pharmacy/Pharmacy';
import PageNotFound from '@/pages/not_found/PageNotFound';
import Requests from '@/pages/requests/Requests';
import PricingDashboard from '@/pages/pricing_dashboard/PricingDashboard';
import Institutions from '@/pages/institutions/Institutions';
import Transactions from '@/pages/transactions/Transactions';
import Billing from '@/pages/billing/Billing';
import Inventory from '@/pages/inventory/Inventory';
import HealthCareCenter from '@/pages/healthcare_centers/HealthCareCenter';
import Unauthorized from '@/utils/Unauthorized';
import Employee from '@/pages/employee/Employee';
import Contact from '@/pages/contact/Contact';

import InventoryOverview from '@/pages/pharmacy/overview/InventoryOverview';
import BillingOverview from '@/pages/pharmacy/overview/BillingOverview';
import TransactionOverview from '@/pages/pharmacy/overview/TransactionOverview';
import SettingOverview from '@/pages/pharmacy/overview/SettingOverview';
import EmployeeOverview from '@/pages/pharmacy/overview/EmployeeOverview';
import Services from '@/pages/services/Services';

const AppRoutes = () => {
  return (
    <div className="">
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HospitalManagementLanding />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register_provider" element={<RegisterProvider />} />
            <Route path="/choose" element={<ChooseType />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/careers" element={<Careers />} />
            <Route
              path="/hospital-management"
              element={
                <PrivateRoute roles={['SUPER_ADMIN', 'PROVIDER_ADMIN', 'HOSPITAL_ADMIN', 'PHARMACY_ADMIN', 'DEPARTMENT_ADMIN']}>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/employees"
              element={
                <PrivateRoute roles={['SUPER_ADMIN', 'PROVIDER_ADMIN', 'HOSPITAL_ADMIN', 'PHARMACY_ADMIN', 'DEPARTMENT_ADMIN']}>
                  <Employee />
                </PrivateRoute>
              }
            />
            <Route
              path="/patients"
              element={
                <PrivateRoute roles={['SUPER_ADMIN', 'HOSPITAL_ADMIN', 'DOCTOR', 'NURSE', 'FRONT_DESK_STAFF', 'PHARMACIST']}>
                  <Patient />
                </PrivateRoute>
              }
            />
            <Route
              path="/pharmacy"
              element={
                <PrivateRoute roles={['PROVIDER_ADMIN']}>
                  <Pharmacy />
                </PrivateRoute>
              }
            />
            <Route
              path="/requests"
              element={
                <PrivateRoute roles={['SUPER_ADMIN']}>
                  <Requests />
                </PrivateRoute>
              }
            />
            <Route
              path="/pricing-dashboard"
              element={
                <PrivateRoute roles={['SUPER_ADMIN']}>
                  <PricingDashboard />
                </PrivateRoute>
              }
            />

            <Route
              path="/institutions"
              element={
                <PrivateRoute roles={['PROVIDER_ADMIN']}>
                  <Institutions />
                </PrivateRoute>
              }
            />

            <Route
              path="/transactions"
              element={
                <PrivateRoute roles={['PROVIDER_ADMIN', 'PHARMACY_ADMIN', 'PHARMACIST', 'SALES_PERSON']}>
                  <Transactions />
                </PrivateRoute>
              }
            />

            <Route
              path="billing"
              element={
                <PrivateRoute roles={['PROVIDER_ADMIN', 'PHARMACY_ADMIN']}>
                  <Billing />
                </PrivateRoute>
              }
            />

            <Route
              path="inventory"
              element={
                <PrivateRoute roles={['PROVIDER_ADMIN', 'PHARMACY_ADMIN', 'PHARMACIST']}>
                  <Inventory />
                </PrivateRoute>
              }
            />

            <Route
              path="/health-care"
              element={
                <PrivateRoute roles={['PATIENT']}>
                  <HealthCareCenter />
                </PrivateRoute>
              }
            />

            <Route
              path="/pharmacy/:id/overview/employee"
              element={
                <PrivateRoute roles={['PROVIDER_ADMIN']}>
                  <EmployeeOverview />
                </PrivateRoute>
              }
            />
            <Route
              path="/pharmacy/:id/overview/inventory"
              element={
                <PrivateRoute roles={['PROVIDER_ADMIN']}>
                  <InventoryOverview />
                </PrivateRoute>
              }
            />
            <Route
              path="/pharmacy/:id/overview/billing"
              element={
                <PrivateRoute roles={['PROVIDER_ADMIN']}>
                  <BillingOverview />
                </PrivateRoute>
              }
            />
            <Route
              path="/pharmacy/:id/overview/transaction"
              element={
                <PrivateRoute roles={['PROVIDER_ADMIN']}>
                  <TransactionOverview />
                </PrivateRoute>
              }
            />

            <Route
              path="/pharmacy/:id/overview/settings"
              element={
                <PrivateRoute roles={['PROVIDER_ADMIN']}>
                  <SettingOverview />
                </PrivateRoute>
              }
            />

            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default AppRoutes;
