import React, { useEffect, useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Register.module.css';
import useAuthTokenEffect from '../../utils/useAuthTokenEffect';
import axiosInstance from '../../utils/api';

const Register = () => {
  let navigate = useNavigate();

  useAuthTokenEffect(navigate);

  const [contactData, setContactData] = useState({
    address1: '',
    address2: '',
    email: '',
    phoneNumber: '',
    website: '',
    nameOfHospital: '',
    nameOfPharmacy: '',
    numberOfEmployee: '',
    userType: '',
    user: {
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
  });

  const [formValid, setFormValid] = useState(false);

  const validateForm = useCallback(() => {
    const { address1, address2, email, phoneNumber, website, userType, user, numberOfEmployee } = contactData;
    const isFormValid =
      address1 &&
      address2 &&
      email &&
      phoneNumber &&
      website &&
      userType &&
      user.email &&
      user.firstName &&
      user.lastName &&
      user.phoneNumber &&
      numberOfEmployee;
    setFormValid(isFormValid);
  }, [contactData]);

  useEffect(() => {
    // Check form validity whenever testResultData changes
    validateForm();
  }, [contactData, validateForm]);

  const handleChange = e => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  const handleUserChange = e => {
    const { name, value } = e.target;
    setContactData({ ...contactData, user: { ...contactData.user, [name]: value } });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      let endpoint = '';
      if (contactData.userType === 'Hospital') {
        endpoint = '/hospital/create';
        setContactData({ ...contactData, user: { ...contactData.user, role: '1' } });
      } else if (contactData.userType === 'Pharmacy') {
        endpoint = '/pharmacy/create';
        setContactData({ ...contactData, user: { ...contactData.user, role: '2' } });
      }

      const response = await axiosInstance.post(endpoint, {
        ...contactData,
      });
      if (response.status === 200) {
        // Handle success
        alert('Thanks for contacting us. You will receive email once your account will be approved from the admin');
        navigate('/');
        console.log('Contact details submitted successfully');
      } else {
        // Handle error
        alert('Failed to submit contact details');
        console.error('Failed to submit contact details');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  return (
    <div className={styles['registration-container']}>
      <div className={styles.navbar}>
        <div className={styles.logoContainer} onClick={() => (window.location.href = '/')}>
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="../asset/png/universe-Logo-1.png"
            alt="Universe Clinic Logo"
          />
        </div>
        <div className={`${styles.menuIcon} ${menuOpen ? styles.open : ''}`} onClick={handleToggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        <nav className={`${styles.navList} ${menuOpen ? styles.open : ''}`}>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/register">Contact Us</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
      </div>
      <form className={styles['registration-form']} onSubmit={handleSubmit}>
        {' '}
        {/* Apply CSS class */}
        <h1>Contact Us</h1>
        <label>
          Hospital/Pharmacy's Address:
          <input type="text" name="address1" value={contactData.address1} onChange={handleChange} />
        </label>
        <label>
          Country:
          <input type="text" name="address2" value={contactData.address2} onChange={handleChange} />
        </label>
        <label>
          Hospital/Pharmacy's Email:
          <input type="email" name="email" value={contactData.email} onChange={handleChange} />
        </label>
        <label>
          Hospital/Pharmacy's Phone Number:
          <input type="tel" name="phoneNumber" value={contactData.phoneNumber} onChange={handleChange} />
        </label>
        <label>
          Hospital/Pharmacy's Website:
          <input type="text" name="website" value={contactData.website} onChange={handleChange} />
        </label>
        <label>
          Type:
          <select name="userType" value={contactData.userType} onChange={handleChange}>
            <option value="">Select Type</option>
            <option value="Hospital">Hospital</option>
            <option value="Pharmacy">Pharmacy</option>
          </select>
        </label>
        {contactData.userType === 'Hospital' && (
          <>
            <label>
              Name of Hospital:
              <input type="text" name="nameOfHospital" value={contactData.nameOfHospital} onChange={handleChange} />
            </label>
          </>
        )}
        {contactData.userType === 'Pharmacy' && (
          <>
            <label>
              Name of Pharmacy:
              <input type="text" name="nameOfPharmacy" value={contactData.nameOfPharmacy} onChange={handleChange} />
            </label>
          </>
        )}
        <label>
          Number of Employee:
          <input type="text" name="numberOfEmployee" value={contactData.numberOfEmployee} onChange={handleChange} />
        </label>
        <label>
          Manager's First Name:
          <input type="text" name="firstName" value={contactData.user.firstName} onChange={handleUserChange} />
        </label>
        <label>
          Manager's Last Name:
          <input type="text" name="lastName" value={contactData.user.lastName} onChange={handleUserChange} />
        </label>
        <label>
          Manager's Email:
          <input type="email" name="email" value={contactData.user.email} onChange={handleUserChange} />
        </label>
        <label>
          Manager's Phone Number:
          <input type="tel" name="phoneNumber" value={contactData.user.phoneNumber} onChange={handleUserChange} />
        </label>
        <button type="submit" disabled={!formValid}>
          Submit
        </button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
