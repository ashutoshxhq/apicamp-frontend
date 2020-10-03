import React from 'react'
import Edit from '../../icons/Edit'
import Save from '../../icons/Save'

const ModelSubheader = () => {
    return (
        <div className="subheader py-3 py-lg-8 subheader-transparent" id="kt_subheader">
            <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                <div className="d-flex align-items-center mr-1">
                    <div className="d-flex align-items-baseline flex-wrap mr-5">
                        <h2 className="d-flex align-items-center text-dark font-weight-bold my-1 mr-3">Dashboard</h2>
                    </div>
                </div>
                <div className="d-flex align-items-center flex-wrap">
                    <button className="btn btn-secondary btn-fixed-height font-weight-bold px-2 px-lg-5 mr-2">
                        <Edit />
                        <span className="d-none d-md-inline"> Edit Model</span>
                    </button>
                    <button className="btn btn-success btn-fixed-height font-weight-bold px-2 px-lg-5 mr-2" disabled>
                        <Save />
                        <span className="d-none d-md-inline"> Save Model</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModelSubheader
