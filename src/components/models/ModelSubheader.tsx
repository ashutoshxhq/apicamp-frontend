import React from 'react'
import { NavLink } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import Edit from '../../icons/Edit'
import HardDrive from '../../icons/HardDrive'
import PenAndRuler from '../../icons/PenAndRuler'
import { editModelModalState } from '../../store/models'

const ModelSubheader = () => {
    const [, setEditModelModal] = useRecoilState(editModelModalState)
    return (
        <>
            <div className="subheader py-2 py-lg-6 subheader-solid" id="kt_subheader">
                <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                    <div className="d-flex align-items-center flex-wrap mr-2">
                        <h5 className="text-dark font-weight-bold mt-2 mb-2 mr-5">Models</h5>
                        <div className="subheader-separator subheader-separator-ver mt-2 mb-2 mr-4 bg-gray-200"></div>
                        <span className="text-muted font-weight-bold mr-4">Users</span>

                    </div>
                    <div className="d-flex justify-content-between align-items-center" style={{ height: 55 }}>
                        <NavLink to="/models/users/data" activeClassName="model-mode-active" className="model-mode text-muted mr-2 px-5 d-flex justify-content-center align-items-center" >
                            <HardDrive />
                            <span className="ml-3 font-weight-bolder mt-2" >Data Mode</span>
                        </NavLink>
                        <NavLink to="/models/users/schema" activeClassName="model-mode-active" className="model-mode  text-muted px-5 d-flex justify-content-center align-items-center" >
                            <PenAndRuler/>
                            <span className="ml-3 font-weight-bolder mt-2">Schema Mode</span>
                        </NavLink>
                    </div>
                    <div className="d-flex align-items-center flex-wrap">
                        <button onClick={() => setEditModelModal(true)} className="btn btn-secondary btn-fixed-height font-weight-bold px-2 px-lg-5 mr-2">
                            <Edit />
                            <span className="d-none d-md-inline"> Edit Model</span>
                        </button>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </>
    )
}

export default ModelSubheader
