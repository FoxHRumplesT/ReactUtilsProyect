import React from 'react';

import loginBackground from '../../../../assets/img/login.png';

const Login = () => {
  return (
    <section className="row flexbox-container">
      <div className="col-xl-8 col-11 d-flex justify-content-center">
        <div className="card bg-authentication rounded-0 mb-0">
          <div className="row m-0">
            <div className="col-lg-6 d-lg-block d-none text-center align-self-center px-1 py-0">
              <img src={loginBackground} alt="branding logo" />
            </div>
            <div className="col-lg-6 col-12 p-0">
              <div className="card rounded-0 mb-0 px-2">
                <div className="card-header pb-1">
                  <div className="card-title">
                    <h4 className="mb-0">Login</h4>
                  </div>
                </div>
                <p className="px-2">
                  Welcome back, please login to your account.
                    </p>
                <div className="card-content">
                  <div className="card-body pt-1">
                    <form action="index.html">
                      <fieldset className="form-label-group form-group position-relative has-icon-left">
                        <input type="text" className="form-control" id="user-name" placeholder="Username" required />
                        <div className="form-control-position">
                          <i className="feather icon-user"></i>
                        </div>
                        <label htmlFor="user-name">Username</label>
                      </fieldset>

                      <fieldset className="form-label-group position-relative has-icon-left">
                        <input type="password" className="form-control" id="user-password" placeholder="Password"
                          required />
                        <div className="form-control-position">
                          <i className="feather icon-lock"></i>
                        </div>
                        <label htmlFor="user-password">Password</label>
                      </fieldset>
                      <div className="form-group d-flex justify-content-between align-items-center">
                        <div className="text-left">
                          <fieldset className="checkbox">
                            <div className="vs-checkbox-con vs-checkbox-primary">
                              <input type="checkbox" />
                              <span className="vs-checkbox">
                                <span className="vs-checkbox--check">
                                  <i className="vs-icon feather icon-check"></i>
                                </span>
                              </span>
                              <span className="">Remember me</span>
                            </div>
                          </fieldset>
                        </div>
                        <div className="text-right">
                          <a href="auth-forgot-password.html" className="card-link">Forgot Password?</a>
                        </div>
                      </div>
                      <a href="auth-register.html"
                        className="btn btn-outline-primary float-left btn-inline">Register</a>
                      <button type="submit" className="btn btn-primary float-right btn-inline">
                        Login
                          </button>
                    </form>
                  </div>
                </div>
                <div className="login-footer">
                  <div className="divider">
                    <div className="divider-text">OR</div>
                  </div>
                  <div className="footer-btn d-inline">
                    <button className="btn btn-facebook"><span className="fa fa-facebook"></span></button>
                    <button className="btn btn-twitter white"><span className="fa fa-twitter"></span></button>
                    <button className="btn btn-google"><span className="fa fa-google"></span></button>
                    <button className="btn btn-github"><span className="fa fa-github-alt"></span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;