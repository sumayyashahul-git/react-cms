







/* import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; */

/* const App = () => {
  const [customers, setCustomers] = useState([
    { id: '1', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', phone: '1234567890', address: '123 Main St' },
    { id: '2', firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', phone: '0987654321', address: '456 Elm St' },
  ]);

  const addCustomer = customer => {
    customer.id = (customers.length + 1).toString();
    setCustomers([...customers, customer]);
  };

  const updateCustomer = updatedCustomer => {
    setCustomers(
      customers.map(customer =>
        customer.id === updatedCustomer.id ? updatedCustomer : customer
      )
    );
  };

  const deleteCustomer = id => {
    setCustomers(customers.filter(customer => customer.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerList customers={customers} deleteCustomer={deleteCustomer} />} />
        <Route path="/add" element={<CustomerForm customers={customers} addCustomer={addCustomer} />} />
        <Route path="/edit/:id" element={<CustomerForm customers={customers} updateCustomer={updateCustomer} />} />
      </Routes>
    </Router>
  );
};
 */
/*  import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';
import PrivateRoute from './privateRoute';

const App = () => {
    return (
      <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/" element={<PrivateRoute />}/>                                                         
                 <Route path="customers" element={<CustomerList />} />
                 <Route path="/add" element={<CustomerForm/>} />
                <Route path="/edit/:id" element={<CustomerForm/>} />
            </Routes>
        </Router> 
    );
};
 */

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';
import Login from './components/Login';
import PrivateRoute from './services/PrivateRoute';
import './App.css';


function App() {
    return (
        <Router>
            <div className="container-fluid">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route
                        path="/customers"
                        element={
                            <PrivateRoute>
                                <CustomerList />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/add"
                        element={
                            <PrivateRoute>
                                <CustomerForm />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/edit/:id"
                        element={
                            <PrivateRoute>
                                <CustomerForm />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;


