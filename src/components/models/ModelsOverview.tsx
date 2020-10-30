import React from 'react'
import Download from '../../icons/Download'

const ModelsOverview = () => {
    return (
        <div className="content d-flex flex-column flex-column-fluid">
            <div className="d-flex flex-column-fluid">
                <div className="container-fluid">
                    <div className="subheader py-2 py-lg-6 subheader-solid" id="kt_subheader">
                        <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                            <div className="d-flex align-items-center flex-wrap mr-2">
                                <h5 className="text-dark font-weight-bold mt-2 mb-2 mr-5">Models</h5>
                               
                            </div>
                            
                            <div className="d-flex align-items-center flex-wrap">
                                
                                <button onClick={() => { }} className="btn btn-secondary btn-fixed-height font-weight-bold px-2 px-lg-5 mr-2">
                                    <Download />
                                    <span className="d-none d-md-inline"> Source Code</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                    Models Overview
                </div>
            </div>
        </div>
    )
}

export default ModelsOverview
