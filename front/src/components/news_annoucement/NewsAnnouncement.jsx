import React, {Fragment, useState, useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { load_regional_centers } from "../../actions/center.action";

const CreateUser = ({ roles, load_regional_centers, regional_centers }) => {
    const [state, setState] = useState({
        full_name:'',
        address:'',
        role_id:'',
        email:'',
        study_center_id:'',
        programme_id:'',
        regional_center_id:'',
        semester:'',
        subjects:''
    });
    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        });
    }
    const onSubmitForm = (e) => {
        e.preventDefault();
    }
    useEffect(()=>{
        load_regional_centers()
    },[])
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="create-user-header">
                        <h1>Create New News/ Announcements</h1>
                    </div>
                    <div className="create-user-form-container">
                        <form className={'row g-3'}>
                            <div className="col-sm-3 input-label">
                                <label htmlFor="validation-full-name" className="form-label">Full name :</label>
                            </div>
                            <div className="col-sm-9">
                                <input type="text" name={'full_name'} onChange={onChange} className="form-control" value={state.full_name} id={'validation-full-name'}/>
                            </div>

                            <div className="col-sm-3 input-label">
                                <label htmlFor="validation-address" className="form-label">Address :</label>
                            </div>
                            <div className="col-sm-9">
                                <input type="text" name={'address'} onChange={onChange} className="form-control" value={state.address} id={'validation-address'}/>
                            </div>

                            <div className="col-sm-3 input-label">
                                <label htmlFor="validation-user-type" className="form-label">Information Type :</label>
                            </div>
                            <div className="col-sm-9">
                                <div className="form-check">
                                <input type="radio" name={'role_id'} id={`validation-role_id-1`} className="form-check-input" value={'News'}/>
                                <label htmlFor={`validation-role_id-${'1'}`} className="form-check-label">{'News'}</label>
                                </div>
                                
                                <div className="form-check">
                                <input type="radio" name={'role_id'} id={`validation-role_id-1`} className="form-check-input" value={'Annoucements'}/>
                                <label htmlFor={`validation-role_id-${'1'}`} className="form-check-label">{'Annoucements'}</label>
                                </div>
                            </div>

                            <div className="col-sm-3 input-label">
                                <label htmlFor="validation-user-type" className="form-label">Distribution Type :</label>
                            </div>
                            <div className="col-sm-9">
                                <div className="form-check">
                                <input type="radio" name={'role_id'} id={`validation-role_id-1`} className="form-check-input" value={'Global'}/>
                                <label htmlFor={`validation-role_id-${2}`} className="form-check-label">{'Global'}</label>
                                </div>

                                <div className="form-check">
                                <input type="radio" name={'role_id'} id={`validation-role_id-1`} className="form-check-input" value={'Programme based'}/>
                                <label htmlFor={`validation-role_id-${2}`} className="form-check-label">{'Programme based'}</label>
                                </div>
                            </div>

                            <div className="col-sm-3 input-label">
                                <label htmlFor="validation-email" className="form-label">Email :</label>
                            </div>
                            <div className="col-sm-9">
                                <input type="email" name={'email'} onChange={onChange} className="form-control" value={state.email} id={'validation-email'}/>
                            </div>

                            <div className="col-sm-3 input-label">
                                <label htmlFor="validation-regional_center_id" className="form-label">Regional Centre :</label>
                            </div>
                            <div className="col-sm-9">
                                
                                <select name="regional_center_id" id="regional_center_id" className="form-select">
                                    <option value="">Select Regional Center</option>
                                    {
                                        regional_centers.map(_rcs => <option key={_rcs._id} value={_rcs._id}  >{_rcs.center_name}</option>)
                                    }
                                </select>

                            </div>

                            <div className="col-sm-3 input-label">
                                <label htmlFor="validation-study_center_id" className="form-label">Study Centre :</label>
                            </div>

                            <div className="col-sm-9">
                            <select name="regional_center_id" id="regional_center_id" className="form-select">
                                    <option value="">Select Study Center</option>
                                    {
                                        regional_centers.map(_rcs => <option key={_rcs._id} value={_rcs._id}  >{_rcs.center_name}</option>)
                                    }
                                </select>
                            </div>

                            <div className="col-sm-3 input-label">
                                <label htmlFor="validation-email" className="form-label">Message :</label>
                            </div>
                            <div className="col-sm-9">
                                <textarea type="text" name={'subjects'} onChange={onChange} className="form-control" value={state.subjects} id={'validation-subjects'}/>
                            </div>

                            <div class="col-sm-3"></div>
                            <div className="col-sm-9">
                            <button class="btn btn-primary" type="submit">Create</button> &nbsp;
                                <button class="btn btn-primary" type="submit">Reset</button>
                                </div>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

CreateUser.propTypes = {
    roles: PropTypes.array.isRequired,
    load_regional_centers: PropTypes.func.isRequired,
    regional_centers:PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    roles: state.auth.roles,
    regional_centers:state.centres.regional_centres
})

export default connect(mapStateToProps, { load_regional_centers })(CreateUser);