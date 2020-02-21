import React from "react";

import "./app.css";
import AuthPage from './pages/auth/auth.page';

const  App = (): JSX.Element => {
  return (
    <div className="App">
      <AuthPage></AuthPage>
    </div>
  );
}

export default App;
