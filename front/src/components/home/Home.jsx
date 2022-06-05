import React from 'react';
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";


const Home = ({ isAuthenticated }) => {
    if(!isAuthenticated){
        return <Navigate replace to={'/'}/>
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">

                </div>
            </div>
        </div>
    )
};

Home.propTypes = {
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {})(Home);