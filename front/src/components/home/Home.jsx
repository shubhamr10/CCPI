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
                <div className="col-sm-12 align-center">
                    <div className="h1 center">Latest News</div>
                </div>
                <div className="col-sm-12">
                 <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            News #1 : IGNOU releases exam form : GLOBAL
                        </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">The testing should not be too generic containing only definitions. You should give all the test case
                            designs, reports and results of test cases for unit, integrated, system testing etc. How debugged your
                            code is and what actions you have taken too improve the code, must, be explained. Good testing
                            can be measured by criteria such as correctness, reliability, user friendliness, maintainability,
                            efficiency and portability of software. 
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            News #1 : IGNOU releases exam form : GLOBAL
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">The testing should not be too generic containing only definitions. You should give all the test case
                            designs, reports and results of test cases for unit, integrated, system testing etc. How debugged your
                            code is and what actions you have taken too improve the code, must, be explained. Good testing
                            can be measured by criteria such as correctness, reliability, user friendliness, maintainability,
                            efficiency and portability of software. </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            News #1 : IGNOU releases exam form : GLOBAL
                        </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">The testing should not be too generic containing only definitions. You should give all the test case
                            designs, reports and results of test cases for unit, integrated, system testing etc. How debugged your
                            code is and what actions you have taken too improve the code, must, be explained. Good testing
                            can be measured by criteria such as correctness, reliability, user friendliness, maintainability,
                            efficiency and portability of software. </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-12 align-center">
                    <div className="h1 center">Latest Announcements</div>
                </div>
                <div className="col-sm-12">
                 <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Announcement #1 : IGNOU releases exam form : GLOBAL
                        </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">The testing should not be too generic containing only definitions. You should give all the test case
                            designs, reports and results of test cases for unit, integrated, system testing etc. How debugged your
                            code is and what actions you have taken too improve the code, must, be explained. Good testing
                            can be measured by criteria such as correctness, reliability, user friendliness, maintainability,
                            efficiency and portability of software. 
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Announcement #1 : IGNOU releases exam form : GLOBAL
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">The testing should not be too generic containing only definitions. You should give all the test case
                            designs, reports and results of test cases for unit, integrated, system testing etc. How debugged your
                            code is and what actions you have taken too improve the code, must, be explained. Good testing
                            can be measured by criteria such as correctness, reliability, user friendliness, maintainability,
                            efficiency and portability of software. </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Announcement #1 : IGNOU releases exam form : GLOBAL
                        </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">The testing should not be too generic containing only definitions. You should give all the test case
                            designs, reports and results of test cases for unit, integrated, system testing etc. How debugged your
                            code is and what actions you have taken too improve the code, must, be explained. Good testing
                            can be measured by criteria such as correctness, reliability, user friendliness, maintainability,
                            efficiency and portability of software. </div>
                        </div>
                    </div>
                    </div>
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