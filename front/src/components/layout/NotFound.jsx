import React, { Fragment } from 'react';

const NotFound = props => {
    return (
        <Fragment>
            <div className={'container-fluid container-full-height'}>
                <div className="row">
                    <div className="col-sm-12">
                        <i className="fa fa-ban fa-5x" aria-hidden="true"></i>
                        <h1 className="center mx-auto">This page do not exists</h1>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default NotFound