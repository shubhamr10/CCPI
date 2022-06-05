import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {logout} from "../../actions/auth.actions";
import PropTypes from "prop-types";
import LogoSm from '../../assets/img/Logo_sml.png';

const NavBar = () => {
    const currentPath = window.location.pathname;
    console.log(currentPath)
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#007BFF'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/home">
                    &emsp;<img src={LogoSm} alt="logo-ignou"  height={"32"} width={"74"}/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggle-content" aria-controls="navbar-toggle-content" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={"collapse navbar-collapse"} id={"navbar-toggle-content"}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="/home" className={`nav-link nav-bar-white-content ${currentPath == '/home' ? 'nav-link-active-page' : '' }`}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a  className={`nav-link nav-bar-white-content ${currentPath == '/create-user' ? 'nav-link-active-page' : '' }`} href="/create-user">Create User</a>
                        </li>
                        <li className="nav-item">
                            <a  className={`nav-link nav-bar-white-content ${currentPath == '/news' ? 'nav-link-active-page' : '' }`} href="/news">News</a>
                        </li>
                        <li className="nav-item">
                            <a  className={`nav-link nav-bar-white-content ${currentPath == '/announcements' ? 'nav-link-active-page' : '' }`} href="/announcements">Announcements</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

NavBar.propTypes = {}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { logout })(NavBar);