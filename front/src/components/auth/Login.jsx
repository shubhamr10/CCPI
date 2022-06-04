import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BannerImg from '../../assets/Login-banner.jpg';

const Login = ({ isAuthenticated}) => {
  return (
    <div className='container' style={{height:'100vh'}}>
        <div className='row  align-items-center my-auto h-100'>
            <div className="col p-1">
            <img src={BannerImg} className="img-fluid" alt="..." />
            </div>
            <div className="col ps-3">
                <h1>Welcome to CPI</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address or Enrollment no.</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enroll no. or email'/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {})(Login);