import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";
import NavBar from "../layout/NavBar";


const PrivateRoute = ({ children, auth: { isAuthenticated, loading } }) => {
    return !isAuthenticated && !loading  ?  <Navigate replace to={'/login'}/> : (
        <React.Fragment>
            <NavBar/>
            {children}
        </React.Fragment>
        );
}

PrivateRoute.propTypes = {
    auth:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {})(PrivateRoute);