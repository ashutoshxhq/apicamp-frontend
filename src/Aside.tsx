import React from 'react'
import Bookmark from './icons/Bookmark'
import Cloud from './icons/Cloud'
import Extensions from './icons/Extensions'
import Pantone from './icons/Pantone'
import Settings from './icons/Settings'
import User from './icons/User'
import Search from './icons/Search'
import PenAndRuler from './icons/PenAndRuler'
import { Link, NavLink } from 'react-router-dom'
import AddPage from './icons/AddPage'

const Aside = () => {
    return (
        <div className="aside aside-left d-flex aside-fixed" id="kt_aside">

            <div className="aside-primary d-flex flex-column align-items-center flex-row-auto" style={{ backgroundColor: "#272d35" }}>
                <div className="aside-brand d-flex flex-column align-items-center flex-column-auto py-5 py-lg-8">
                    <a href="index.html">
                        <img alt="Logo" src="/logo.svg" className="max-h-50px" />
                    </a>
                </div>

                <div className="aside-nav d-flex flex-column align-items-center flex-column-fluid py-5 scroll scroll-pull ps">
                    <ul className="nav flex-column" role="tablist">
                        <li className="nav-item mb-3" data-toggle="tooltip" data-placement="right" data-container="body" data-boundary="window" title="" data-original-title="Latest Projects">
                            <NavLink to="/models" className="nav-link btn btn-icon btn-clean btn-lg" data-toggle="tab" data-target="#kt_aside_tab_1" role="tab" aria-selected="true">
                                <PenAndRuler />
                            </NavLink>
                        </li>
                        <li className="nav-item mb-3" data-toggle="tooltip" data-placement="right" data-container="body" data-boundary="window" title="" data-original-title="Metronic Features">
                            <NavLink to="/functions" className="nav-link btn btn-icon btn-clean btn-lg " data-toggle="tab" data-target="#kt_aside_tab_2" role="tab" aria-selected="false">
                                <Pantone />
                            </NavLink>
                        </li>
                        <li className="nav-item mb-3" data-toggle="tooltip" data-placement="right" data-container="body" data-boundary="window" title="" data-original-title="Project Management">
                            <NavLink to="/storage" className="nav-link btn btn-icon btn-clean btn-lg" data-toggle="tab" data-target="#kt_aside_tab_4" role="tab">
                                <Cloud />
                            </NavLink>
                        </li>
                        <li className="nav-item mb-3" data-toggle="tooltip" data-placement="right" data-container="body" data-boundary="window" title="" data-original-title="Project Management">
                            <NavLink to="/extensions" className="nav-link btn btn-icon btn-clean btn-lg " data-toggle="tab" data-target="#kt_aside_tab_4" role="tab">
                                <Extensions />
                            </NavLink>
                        </li>
                        <li className="nav-item mb-3" data-toggle="tooltip" data-placement="right" data-container="body" data-boundary="window" title="" data-original-title="Finance &amp; Accounting">
                            <NavLink to="/settings" className="nav-link btn btn-icon btn-clean btn-lg" data-toggle="tab" data-target="#kt_aside_tab_6" role="tab">
                                <Settings />
                            </NavLink>
                        </li>
                    </ul>
                    <div className="ps__rail-x"><div className="ps__thumb-x"></div></div><div className="ps__rail-y" ><div className="ps__thumb-y"></div></div></div>
                <div className="aside-footer d-flex flex-column align-items-center flex-column-auto py-4 py-lg-10">

                    <a href="#//" className="btn btn-icon btn-clean btn-lg w-40px h-40px mb-5" id="kt_quick_user_toggle" data-toggle="tooltip" data-placement="right" data-container="body" data-boundary="window" title="" data-original-title="User Profile">
                        <span className="symbol symbol-30 symbol-lg-40">
                            <Search />
                        </span>
                    </a>
                    <a href="#//" className="btn btn-icon btn-clean btn-lg w-40px h-40px" id="kt_quick_user_toggle" data-toggle="tooltip" data-placement="right" data-container="body" data-boundary="window" title="" data-original-title="User Profile">
                        <span className="symbol symbol-30 symbol-lg-40">
                            <User />
                        </span>
                    </a>
                </div>
            </div>


            <div className="aside-secondary d-flex flex-row-fluid">
                <div className="aside-workspace scroll scroll-push my-2 ps d-flex justify-content-between flex-column">
                    <div className="tab-content">
                        <div className="tab-pane p-3 px-lg-7 py-lg-5 fade active show" id="kt_aside_tab_1">
                            <form className="p-2 p-lg-3">
                                <div className="d-flex">
                                    <div className="input-icon h-40px w-100">
                                        <input type="text" className="form-control form-control-lg form-control-solid h-40px" placeholder="Search..." id="generalSearch" />
                                        <span>
                                            <span className="svg-icon svg-icon-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                        <rect x="0" y="0" width="24" height="24"></rect>
                                                        <path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3"></path>
                                                        <path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fillRule="nonzero"></path>
                                                    </g>
                                                </svg>
                                            </span>
                                        </span>
                                    </div>


                                    <div className="dropdown" data-toggle="tooltip" title="" data-placement="left" data-original-title="Quick actions">
                                        <a href="#/" className="btn btn-icon btn-default ml-2 h-40px w-40px flex-shrink-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="svg-icon svg-icon-primary svg-icon-lg"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <rect x="0" y="0" width="24" height="24" />
                                                    <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
                                                    <path d="M11,11 L11,7 C11,6.44771525 11.4477153,6 12,6 C12.5522847,6 13,6.44771525 13,7 L13,11 L17,11 C17.5522847,11 18,11.4477153 18,12 C18,12.5522847 17.5522847,13 17,13 L13,13 L13,17 C13,17.5522847 12.5522847,18 12,18 C11.4477153,18 11,17.5522847 11,17 L11,13 L7,13 C6.44771525,13 6,12.5522847 6,12 C6,11.4477153 6.44771525,11 7,11 L11,11 Z" fill="#000000" />
                                                </g>
                                            </svg></span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-md dropdown-menu-right" >
                                            <ul className="navi navi-hover py-5">
                                                <li className="navi-item">
                                                    <a href="#/" className="navi-link">
                                                        <span className="navi-icon">
                                                            <i className="flaticon2-drop"></i>
                                                        </span>
                                                        <span className="navi-text">New Group</span>
                                                    </a>
                                                </li>
                                                <li className="navi-item">
                                                    <a href="#/" className="navi-link">
                                                        <span className="navi-icon">
                                                            <i className="flaticon2-list-3"></i>
                                                        </span>
                                                        <span className="navi-text">Contacts</span>
                                                    </a>
                                                </li>
                                                <li className="navi-item">
                                                    <a href="#/" className="navi-link">
                                                        <span className="navi-icon">
                                                            <i className="flaticon2-rocket-1"></i>
                                                        </span>
                                                        <span className="navi-text">Groups</span>
                                                        <span className="navi-link-badge">
                                                            <span className="label label-light-primary label-inline font-weight-bold">new</span>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li className="navi-item">
                                                    <a href="#/" className="navi-link">
                                                        <span className="navi-icon">
                                                            <i className="flaticon2-bell-2"></i>
                                                        </span>
                                                        <span className="navi-text">Calls</span>
                                                    </a>
                                                </li>
                                                <li className="navi-item">
                                                    <a href="#/" className="navi-link">
                                                        <span className="navi-icon">
                                                            <i className="flaticon2-gear"></i>
                                                        </span>
                                                        <span className="navi-text">Settings</span>
                                                    </a>
                                                </li>
                                                <li className="navi-separator my-3"></li>
                                                <li className="navi-item">
                                                    <a href="#/" className="navi-link">
                                                        <span className="navi-icon">
                                                            <i className="flaticon2-magnifier-tool"></i>
                                                        </span>
                                                        <span className="navi-text">Help</span>
                                                    </a>
                                                </li>
                                                <li className="navi-item">
                                                    <a href="#/" className="navi-link">
                                                        <span className="navi-icon">
                                                            <i className="flaticon2-bell-2"></i>
                                                        </span>
                                                        <span className="navi-text">Privacy</span>
                                                        <span className="navi-link-badge">
                                                            <span className="label label-light-danger label-rounded font-weight-bold">5</span>
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="separator separator-dashed mt-5 mb-5"></div>

                            <h3 className="p-2 p-lg-3 my-1 my-lg-3">Your Models</h3>
                            <div className="list list-hover">
                                <div className="list-item hoverable active p-2 p-lg-3 mb-2">
                                    <div className="d-flex align-items-center">
                                        <div className="symbol symbol-40 symbol-light mr-4">
                                            <span className="symbol-label bg-hover-white">
                                                <Bookmark />
                                            </span>
                                        </div>
                                        <div className="d-flex flex-column flex-grow-1 mr-2">
                                            <span className="text-dark-75 font-size-h6 mb-0">Users Table</span>
                                            <span className="text-muted font-weight-bold">4 fields</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="w-100 p-5">
                        <div className="separator separator-dashed mt-5 mb-5"></div>

                        <Link to="/models/id/schema" className="btn btn-primary btn-lg btn-block"> <AddPage /> <span> Create New Model</span> </Link>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Aside
