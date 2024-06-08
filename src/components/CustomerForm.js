


// src/components/CustomerForm.js
import React, { useState, useEffect } from 'react';
import axios from '../services/axiosConfig';
import {  useNavigate, useParams } from 'react-router-dom';
//import './CustomerForm.css';  // Import the CSS file

const CustomerForm = () => {
    const [customer, setCustomer] = useState({
      customerId:0,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: ''
    });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            axios.get(`/customers/${id}`)
                .then(response => setCustomer(response.data))
                .catch(error => console.error('There was an error!', error));
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

       

     //Add id also in the payload if it put

        if (id) {

          const customerData = {
            customerId:id,
            firstName: customer.firstName,
            lastName: customer.lastName,
            email: customer.email,
            phone: customer.phone,
            address: customer.address
          };
            axios.put(`/customers/${id}`, customerData)
                .then(() =>navigate('/customers'))
                .catch(error => console.error('There was an error!', error));
        } else {

          const customerData = {
            firstName: customer.firstName,
            lastName: customer.lastName,
            email: customer.email,
            phone: customer.phone,
            address: customer.address
          };
            axios.post('/customers', customerData)
                .then(() => navigate('/customers'))
                .catch(error => console.error('There was an error!', error));
        }

       // console.log('Customer data:', customerData);
    };

    return (
        <div className="container">
            <h1>{id ? 'Edit Customer' : 'Add Customer'}</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    value={customer.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                />
                <input
                    type="text"
                    name="lastName"
                    value={customer.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                />
                <input
                    type="email"
                    name="email"
                    value={customer.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input
                    type="number"
                    name="phone"
                    value={customer.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                />
                <input
                    type="text"
                    name="address"
                    value={customer.address}
                    onChange={handleChange}
                    placeholder="Address"
                />
               {/*  <input
                    type="text" multiline="true"
                    name="adReq"
                    value={customer.Adreq}
                    onChange={handleChange}
                    placeholder="Additional Requirements"
                /> */}
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default CustomerForm;



















/* import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const CustomerForm = ({ customers, addCustomer, updateCustomer }) => {
  const [customer, setCustomer] = useState({ id: '', firstName: '', lastName: '', email: '', phone: '', address: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const customerToEdit = customers.find(c => c.id === id);
      if (customerToEdit) {
        setCustomer(customerToEdit);
      }
    }
  }, [id, customers]);

  const handleChange = e => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (id) {
      updateCustomer(customer);
    } else {
      addCustomer(customer);
    }
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <h1>{id ? 'Edit Customer' : 'Add Customer'}</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            value={customer.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            value={customer.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={customer.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone</Label>
          <Input
            type="text"
            name="phone"
            id="phone"
            value={customer.phone}
            onChange={handleChange}
            placeholder="Phone"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input
            type="text"
            name="address"
            id="address"
            value={customer.address}
            onChange={handleChange}
            placeholder="Address"
            required
          />
        </FormGroup>
        <Button type="submit" color="primary">{id ? 'Update' : 'Add'}</Button>
      </Form>
    </div>
  );
};

export default CustomerForm; */