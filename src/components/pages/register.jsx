import React, { Component, useState } from 'react';
import { _sellerregister } from '../../services/api/register';

import Breadcrumb from '../common/breadcrumb';

const Register = (props) => {
  const [formInfo, setformInfo] = useState({});
  const [regresult, setregresult] = useState({ error: false, message: '' });
  const [validation, setvalidation] = useState(false);

  const handleinputchange = (key, event) => {
    if (
      key === 'logo' ||
      key === 'tradeDocument' ||
      key === 'companyProfile' ||
      key === 'officePhoto'
    ) {
      setformInfo({ ...formInfo, [key]: [event.target.files] });
    } else {
      setformInfo({ ...formInfo, [key]: event.target.value });
    }
  };
  const submit = async (evt) => {
    evt.preventDefault();
    var data = new FormData();
    for (var key in formInfo) {
      if (
        key !== 'logo' ||
        key !== 'tradeDocument' ||
        key !== 'companyProfile' ||
        key !== 'officePhoto'
      ) {
        data.append(key, formInfo[key]);
      }
    }
    formInfo.logo.forEach((tag) => data.append('logo', tag));
    formInfo.tradeDocument.forEach((tag) => data.append('tradeDocument', tag));
    formInfo.companyProfile.forEach((tag) =>
      data.append('companyProfile', tag),
    );
    formInfo.officePhoto.forEach((tag) => data.append('officePhoto', tag));
    try {
      _sellerregister(data, function(error, response) {
        if (response !== null) {
          setregresult({ message: 'Successfully Register !' });
          props.history.push({ pathname: '/pages/login' });
        } else {
          setregresult({ error: true, message: 'Registeration failed !' });
          setTimeout(() => {
            setregresult({ error: false, message: '' });
          }, 10000);
        }
      });
      setTimeout(() => {
        setregresult({ error: false, message: '' });
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Breadcrumb title={'create account'} />

      {/*Regsiter section*/}
      <section className='register-page section-b-space'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h3>create account</h3>
              <div className='theme-card'>
                <form className='theme-form'>
                  {/* <a href='pages/register1' class='btn btn-solid'>
                    buyer
                  </a>{' '}
                  <a href='pages/register' class='btn btn-solid'>
                    seller
                  </a> */}
                  <br />
                  <br />
                  <div className='form-row'>
                    <div className='col-md-6'>
                      <label htmlFor='text'>First Name</label>
                      <input
                        type='text'
                        className='form-control'
                        id='name'
                        placeholder='First Name'
                        required
                        onChange={(e) => handleinputchange('name', e)}
                      />
                    </div>
                    <div className='col-md-6'>
                      <label htmlFor='companyName'>Company Name</label>
                      <input
                        type='text'
                        className='form-control'
                        id='companyName'
                        placeholder='Company Name'
                        required
                        onChange={(e) => handleinputchange('companyName', e)}
                      />
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='col-md-6'>
                      <label htmlFor='email'>Email</label>
                      <input
                        type='email'
                        className='form-control'
                        id='email'
                        placeholder='Email'
                        required
                        onChange={(e) => handleinputchange('email', e)}
                      />
                    </div>
                    <div className='col-md-6'>
                      <label htmlFor='mobile'>Mobile</label>
                      <input
                        type='text'
                        className='form-control'
                        id='mobile'
                        placeholder='Mobile'
                        required
                        onChange={(e) => handleinputchange('mobile', e)}
                      />
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='col-md-6'>
                      <label htmlFor='password'>Password</label>
                      <input
                        type='password'
                        className='form-control'
                        id='password'
                        placeholder='password'
                        required
                        onChange={(e) => handleinputchange('password', e)}
                      />
                    </div>
                    <div className='col-md-6'>
                      <label htmlFor='confirmpassword'>Confirm password</label>
                      <input
                        type='password'
                        className='form-control is-invalid'
                        id='password'
                        placeholder='password'
                        required
                        onChange={(e) =>
                          handleinputchange('confirmpassword', e)
                        }
                      />{' '}
                      <small id='passwordHelp' class='text-danger'>
                        {validation ? 'Confirm password does not match' : ''}
                      </small>
                    </div>
                  </div>

                  <div className='form-row'>
                    <div className='col-md-6'>
                      <label htmlFor='tradeDocument'>Trade document</label>
                      <input
                        type='file'
                        className='form-control'
                        id='tradeDocument'
                        placeholder='Upload Trade document'
                        required
                        onChange={(e) => handleinputchange('tradeDocument', e)}
                      />
                    </div>
                    <div className='col-md-6'>
                      <label htmlFor='companyProfile'>Company proof</label>
                      <input
                        type='file'
                        className='form-control'
                        id='companyProfile'
                        placeholder='Upload company logo'
                        required
                        onChange={(e) => handleinputchange('companyProfile', e)}
                      />
                    </div>{' '}
                  </div>
                  <div className='form-row'>
                    <div className='col-md-6'>
                      <label htmlFor='officePhoto'>Company logo</label>
                      <input
                        multiple
                        type='file'
                        className='form-control'
                        id='logo'
                        placeholder='Upload Company logo'
                        required
                        onChange={(e) => handleinputchange('logo', e)}
                      />
                    </div>
                    <div className='col-md-6'>
                      <label htmlFor='officePhoto'>Company photos</label>
                      <input
                        multiple
                        type='file'
                        className='form-control'
                        id='officePhoto'
                        placeholder='Upload Company photos'
                        required
                        onChange={(e) => handleinputchange('officePhoto', e)}
                      />
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='col-md-6'>
                      <label htmlFor='location'>Location</label>
                      <input
                        type='text'
                        className='form-control'
                        id='lname'
                        placeholder='Location'
                        required
                        onChange={(e) => handleinputchange('location', e)}
                      />
                    </div>
                    <div className='col-md-6'>
                      <label htmlFor='address'>Address</label>
                      <input
                        type='text'
                        className='form-control'
                        id='lname'
                        placeholder='Address'
                        required
                        onChange={(e) => handleinputchange('address', e)}
                      />
                    </div>
                  </div>
                  <button className='btn btn-solid' onClick={submit}>
                    Submit
                  </button>
                </form>
                <h4
                  class='text-center font-weight-bold'
                  style={{ color: regresult.error ? '#f44336' : '#90BE17' }}>
                  {regresult.message}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
