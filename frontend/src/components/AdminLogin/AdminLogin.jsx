import React, { useContext, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { StoreContext } from '../../context/StoreContext';
import './AdminLogin.css'; // Import the CSS file

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { url } = useContext(StoreContext);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(url + '/api/admin/login', { username, password });

            if (response.data.success) {
                localStorage.setItem('adminToken', response.data.token);
                toast.success('Login Successful!');
                window.location.href = 'http://localhost:5173/'; // Redirect to admin dashboard
            } else {
                toast.error('Invalid credentials');
            }
        } catch (error) {
            toast.error('Login failed');
            console.error('Login Error:', error.response?.data || error.message);
        }
    };

    return (
        <div className="admin-login-container">
            <div className="admin-login">
                <h2>Admin Login</h2>
                <form onSubmit={handleLogin}>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
