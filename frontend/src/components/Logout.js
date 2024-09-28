
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Logout() {
  const history = useHistory();

  useEffect(() => {
    // Clear the token from localStorage and redirect to login
    localStorage.removeItem('token');
    history.push('/login');
  }, [history]);

  return null; // No need to render anything
}

export default Logout;
