// src/components/CustomerList.js
import React, { useState, useEffect } from 'react';
import axios from '../services/axiosConfig';
import { Link } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get('/customers')
            .then(response => setCustomers(response.data))
            .catch(error => console.error('There was an error!', error));
    }, []);

    const deleteCustomer = (id) => {
        axios.delete(`/customers/${id}`)
            .then(() => setCustomers(customers.filter(customer => customer.customerId !== id)))
            .catch(error => console.error('There was an error!', error));
    };

    return (
        <div className="container-fluid">
            <h1>Customers Outline</h1>
         {/*    <Link to="/add">Add Customer</Link>
            <ul>
                {customers.map(customer => (
                    <li key={customer.customerId}>
                        {customer.firstName} {customer.lastName}  {customer.Email} {customer.lastName}
                        <div>
                            <Link to={`/edit/${customer.customerId}`}>Edit</Link>
                            <button onClick={() => deleteCustomer(customer.customerId)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul> */}
       <div className="d-flex justify-content-end mb-3">
      <Link to="/add">
      <Button color="success" className="mb-12 text-right">New Customer</Button>
      </Link>
      </div>
      <Table striped responsive table>
        <thead>
          <tr>
            <th className='center-align' >ID</th>
            <th  className='left-align'>Name</th>
            <th  className='left-align'>Email</th>
            <th  className='center-align'>Phone</th>
            <th  className='left-align'>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={customer.customerId}>
              <td data-label="#" className='center-align' >{index + 1}</td>
              <td data-label="Name" className='left-align'>{customer.firstName} {customer.lastName} </td>
              <td data-label="Email"  className='left-align'>{customer.email}</td>
              <td data-label="Phone"  className='center-align'>{customer.phone}</td>
              <td data-label="Address"  className='left-align'>{customer.address}</td>
              <td>
              
                <Link to={`/edit/${customer.customerId}`}> 
                <Button color="warning" className="me-2" >  <FontAwesomeIcon icon={faEdit} /></Button>
                </Link>
                
                <Button color="danger" onClick={() => deleteCustomer(customer.customerId)}><FontAwesomeIcon icon={faTrash} /></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
   
        </div>
    );
};

export default CustomerList;












































/* import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers = async () => {
        try {
            const response = await api.get('/customers');
            setCustomers(response.data);
        } catch (error) {
            console.error('Error fetching customers', error);
        }
    };

    return (
        <div>
            <h2>Customers</h2>
            <div className="d-flex justify-content-end mb-3">
      <Link to="/add">
        <Button color="success" className="mb-12 text-right">New Customer</Button>
      </Link>
      </div>
            <ul>
                {customers.map(customer => (
                    <li key={customer.customerId}>
                        {customer.firstName} {customer.lastName}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerList;
 */








/* import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'reactstrap';

const CustomerList = ({ customers, deleteCustomer }) => {
  return (
    <div className="container mt-5">
      <h1>Customer List</h1>
      <div className="d-flex justify-content-end mb-3">
      <Link to="/add">
        <Button color="success" className="mb-12 text-right">New Customer</Button>
      </Link>
      </div>
      <Table striped responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>sName</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td data-label="#">{customer.id}</td>
              <td data-label="Name">{customer.firstName} {customer.lastName} </td>
              <td data-label="Email">{customer.email}</td>
              <td data-label="Phone">{customer.phone}</td>
              <td data-label="Address">{customer.address}</td>
              <td>
                <Link to={`/edit/${customer.id}`}>
                  <Button color="warning" className="me-2" >Edit</Button>
                </Link>
                <Button color="danger" onClick={() => deleteCustomer(customer.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};



const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      axios.get('http://localhost:5000/api/customer')
          .then(response => {
              setCustomers(response.data);
              setLoading(false);
          })
          .catch(error => {
              console.error('There was an error fetching the customers!', error);
              setLoading(false);
          });
  }, []);

  const addCustomer = (customer) => {
      setCustomers([...customers, customer]);
  };

  if (loading) return <p>Loading...</p>;

  return (
      <div>
          <h1>Customer List</h1>
          <CustomerForm addCustomer={addCustomer} />
          {customers.map(customer => (
              <Customer key={customer.id} customer={customer} />
          ))}
      </div>
  );
};

export default CustomerList;
 */