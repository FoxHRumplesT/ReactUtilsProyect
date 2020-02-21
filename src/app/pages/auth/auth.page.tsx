import React from 'react';

import Login from './login/login';

const AuthPage = () => {
  return (
    <div className="app-content content">
      <div className="content-overlay"></div>
      <div className="header-navbar-shadow"></div>
      <div className="content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body">
          <Login></Login>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
