import React from 'react'
import AddPage from '../../icons/AddPage'
import Edit from '../../icons/Edit'
import Trash from '../../icons/Trash'
import ModelSubheader from './ModelSubheader'

const Model = () => {
    return (
        <div className="content d-flex flex-column flex-column-fluid">
            <ModelSubheader />
            <div className="d-flex flex-column-fluid">
                <div className="container-fluid">
                    <div className="card card-custom">
                        <div className="card-body">
                            <div className="col-xl-12">

                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <div className="d-flex align-items-baseline flex-wrap mr-5">
                                        <h3 className="d-flex align-items-center text-dark font-weight-bold my-1 mr-3">Model Fields</h3>
                                    </div>
                                    <div className="d-flex align-items-center flex-wrap">
                                        <button className="btn btn-primary btn-fixed-height font-weight-bold px-2 px-lg-5 mr-2">
                                            <AddPage />
                                            <span className="d-none d-md-inline"> Add New Field</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="separator separator-dashed mt-5 mb-5"></div>

                                <div className="d-flex bg-light-secondary align-items-center mb-10 mt-5 p-5" style={{ borderRadius: 8 }}>
                                    <div className="symbol symbol-40 symbol-light-primary mr-5">
                                        <span className="symbol-label">
                                            <span className="svg-icon svg-icon-xl svg-icon-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <rect x="0" y="0" width="24" height="24"></rect>
                                                        <path d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z" fill="#000000"></path>
                                                        <rect fill="#000000" opacity="0.3" transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519)" x="16.3255682" y="2.94551858" width="3" height="18" rx="1"></rect>
                                                    </g>
                                                </svg>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="d-flex justify-content-between w-100">
                                        <div className="d-flex justify-content-between flex-column font-weight-bold">
                                            <a href="#/" className="text-dark text-hover-primary font-size-lg">Name</a>
                                            <span className="text-muted">string, unique</span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <button className="btn btn-light-primary btn-circle btn-icon btn-fixed-height font-weight-bold px-2 px-lg-5 mr-2">
                                                <Edit />
                                            </button>
                                            <button className="btn btn-light-primary btn-circle btn-icon btn-fixed-height font-weight-bold px-2 px-lg-5 mr-2">
                                                <Trash />
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model
