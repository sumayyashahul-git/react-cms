import React, { useState } from 'react';
import styled from 'styled-components';
import axios from '../services/axiosConfig';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

const LoginBox = styled.div`
  padding: 2rem;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 300px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
  &:hover {
    background-color: #0056b3;
  }
`;
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

   
    
    const baseURL= 'https://localhost:7145/api';
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const loginData = {
                username: email, // Ensure these values are correct
                password: password,
            };
        
            console.log('Login data:', loginData);
            //const response = await axios.post(baseURL+'/auth/login', { email, password });
            const response = await axios.post(baseURL+'/auth/login', loginData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
            localStorage.setItem('token', response.data.token);
           navigate('/customers');
        } catch (error) {
            setMessage('Invalid credentials');
            console.error('Login failed:', error);
        }
    };

    return (
        <Container>
        <LoginBox>
          <Title>Login</Title>
           
            <form   onSubmit={handleSubmit}>
              
                    {/* <label>Username:</label> */}
                    <Input className="form-control input-md"

                        type="text"
                placeholder="Your Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                    />
             
              
                    {/* <label>Password:</label> */}
                    <Input className="form-control input-md"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                
           
                    <Button type="submit">Login</Button>
              
                {message && <div>{message}</div>}
            </form>
         
      </LoginBox>
      </Container>
    );
};

export default Login;
