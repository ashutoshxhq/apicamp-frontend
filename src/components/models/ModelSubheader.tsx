import React from 'react'
import Edit from '../../icons/Edit'

const ModelSubheader = () => {
    return (
        <div className="subheader py-2 py-lg-6 subheader-solid" id="kt_subheader">
            <div className="container d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                <div className="d-flex align-items-center flex-wrap mr-2">
                    <h5 className="text-dark font-weight-bold mt-2 mb-2 mr-5">Users Table</h5>
                    <div className="subheader-separator subheader-separator-ver mt-2 mb-2 mr-4 bg-gray-200"></div>
                    <span className="text-muted font-weight-bold mr-4">24 Records</span>

                </div>
                <div className="d-flex align-items-center flex-wrap">
                    <button className="btn btn-secondary btn-fixed-height font-weight-bold px-2 px-lg-5 mr-2">
                        <Edit />
                        <span className="d-none d-md-inline"> Edit Model</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModelSubheader
