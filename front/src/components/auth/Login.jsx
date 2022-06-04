import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Logo from '../../assets/img/Logo_sml.png';
import {login} from '../../actions/auth.actions';

const Login = ({ isAuthenticated, login}) => {
    const [state, setState] = useState({
        email:'',
        password:''
    });
    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        });
    }
    const onSubmitForm = (e) => {
        e.preventDefault();
        const formData = {
            email:state.email,
            password:state.password
        };
        login(formData);
    }
    if(isAuthenticated){
        return <Navigate replace to={'/home'}/>
    }
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-sm'>
                <div className={'col-login-left'}>
                    <div><img src={Logo} alt="logo-ignou" className="img-fluid"/></div>
                    <div className={'login-image-banner-text'}>Welcome to CCPI</div>
                </div>
            </div>
            <div className={'col-sm'}>
                <div className={'login-form'}>
                    <form onSubmit={onSubmitForm}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" name={'email'} onChange={onChange} value={state.email} id={'email'} aria-describedby={'email-help'} className="form-control" required={true}/>
                            <div id="email-help" className={'form-text'}>We'll never share your email.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" name={'password'} onChange={onChange} id={'password'} value={state.password} className="form-control"  required={true}/>
                        </div>
                        <button type={'submit'} className="btn btn-primary">Login</button> &nbsp;
                        <button type={'reset'} className="btn btn-light">Reset</button>
                    </form>
                </div>
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

export default connect(mapStateToProps, { login })(Login);