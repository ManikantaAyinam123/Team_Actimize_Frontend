import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Approutes from './Approutes';
import LoginForm from './LoginForm';
import { onMessage } from 'firebase/messaging';
import { messaging } from './firebase';
import { loadNotificationsDetailsStart } from './redux/actions/loadNotificationsActions';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Firebase messaging setup
  useEffect(() => { 
    const unsubscribe = onMessage(messaging, (payload) => {
      console.log('Firebase message received:', payload); // Debugging
      dispatch(loadNotificationsDetailsStart());
    });
    return () => unsubscribe(); // Cleanup on unmount
  }, [dispatch]);

  // Token and role-based redirection
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const roles = localStorage.getItem('data');
    
    console.log('Stored Token:', storedToken); // Debugging
    console.log('Data Roles:', roles); // Debugging
    
    if (!storedToken) {
      console.log('No token found, redirecting to login'); // Debugging
      navigate('/login');
    } else if (storedToken && pathname === '/login') {
      setToken(storedToken);
      navigate('/');
    }
  }, [token, navigate, pathname]);

  if (!token) {
    return <LoginForm />;
  }
 
  return (
    <div className="App">
      <ToastContainer />
      <Approutes />
    </div>
  );
}

export default App;
