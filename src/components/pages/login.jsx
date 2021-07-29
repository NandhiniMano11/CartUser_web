import React, { Component } from 'react';
import HeaderThree from '../common/headers/header-three';
import FooterTwo from '../common/footers/footer-two';
import Breadcrumb from '../common/breadcrumb';
import '../common/index.scss';

class Login extends Component {
  componentDidMount() {
    document
      .getElementById('color')
      .setAttribute('href', `${process.env.PUBLIC_URL}/assets/css/color15.css`);
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Breadcrumb title={'Login'} />

        {/*Login section*/}
        <section className='login-page section-b-space'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <h3>Login</h3>
                <div className='theme-card'>
                  <form className='theme-form'>
                    <div className='form-group'>
                      <label htmlFor='email'>Email</label>
                      <input
                        type='text'
                        className='form-control'
                        id='email'
                        placeholder='Email'
                        required=''
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='review'>Password</label>
                      <input
                        type='password'
                        className='form-control'
                        id='review'
                        placeholder='Enter your password'
                        required=''
                      />
                    </div>
                    <a href='#' className='btn btn-solid'>
                      Login
                    </a>
                  </form>
                </div>
              </div>
              <div className='col-lg-6 right-login'>
                <h3>New Customer</h3>
                <div className='theme-card authentication-right'>
                  <h6 className='title-font'>Create A Account</h6>
                  <p>
                    Sign up for a free account at our store. Registration is
                    quick and easy. It allows you to be able to order from our
                    shop. To start shopping click register.
                  </p>
                  <a href='pages/buyerRegister' className='btn btn-solid s4'>
                    Buyer
                  </a>

                  <a href='pages/register' className='btn btn-solid'>
                    Seller
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
