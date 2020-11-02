import React from 'react'
import { useRecoilState } from 'recoil'
import CloudDownload from '../../icons/CloudDownload'
import { generateServiceSourceCodeState } from '../../store/service'

const ModelsOverview = () => {
    const [, setGenerateServiceSourceCode] = useRecoilState(generateServiceSourceCodeState)

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

                                <button onClick={() => { setGenerateServiceSourceCode({id:"", modalState:true})}} className="btn btn-primary btn-fixed-height font-weight-bold px-2 px-lg-5 mr-2">
                                    <CloudDownload />
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
