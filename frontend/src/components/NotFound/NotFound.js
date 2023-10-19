import React from 'react';
// import { useNavigate } from 'react-router';
// import { Link } from 'react-router-dom';
import './notFound.css';

const NotFound = () => {
  // const navigate = useNavigate();
  React.useEffect(() => {
    document.title = `Page Not Found`;
  }, []);

  return (
    <div className="message">
      <h2>404</h2>
      <h1>Page Not Found</h1>
      <p>The specified file was not found on this website. Please check the URL for mistakes and try again.</p>
      <h3>Why am I seeing this?</h3>
      <p> Please the check the endpoint you searched .</p>
    </div>
  );
};

export default NotFound;