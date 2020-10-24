import React from 'react'
import Bookmark from './icons/Bookmark'
import Cloud from './icons/Cloud'
import Extensions from './icons/Extensions'
import Settings from './icons/Settings'
import { NavLink, useLocation } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { createModelModalState } from './store/models'
import CreateModel from './components/models/CreateModel'
import EditModel from './components/models/EditModel'
import PenAndRuler2X from './icons/PenAndRuler2x'
import { useQuery } from '@apollo/client'
import { GET_MODELS } from './graphql/models'
import Right from './icons/Right'
import Plus from './icons/Plus'
import Lock from './icons/Lock'

const Aside = () => {
    const location = useLocation();

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
                                <PenAndRuler2X />
                            </NavLink>
                        </li>
                        <li className="nav-item mb-3" data-toggle="tooltip" data-placement="right" data-container="body" data-boundary="window" title="" data-original-title="Metronic Features">
                            <NavLink to="/functions" className="nav-link btn btn-icon btn-clean btn-lg " data-toggle="tab" data-target="#kt_aside_tab_2" role="tab" aria-selected="false">
                                <Lock />
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
                
            </div>


            <div className="aside-secondary d-flex flex-row-fluid models-aside-background">
                <div className="aside-workspace  bg-white-gradient scroll scroll-push my-2 ps d-flex justify-content-between flex-column">
                    {location.pathname.split("/")[1] === "models" ? <ModelAside /> : null}
                    {location.pathname.split("/")[1] === "functions" ? <FunctionsAside /> : null}
                    {location.pathname.split("/")[1] === "storage" ? <StorageAside /> : null}
                    {location.pathname.split("/")[1] === "extensions" ? <ExtensionsAside /> : null}
                    {location.pathname.split("/")[1] === "settings" ? <SettingsAside /> : null}
                </div>
            </div>

        </div>
    )
}


const ModelAside = () => {

    const [, setCreateModelModal] = useRecoilState(createModelModalState)
    const { loading, error, data } = useQuery(GET_MODELS);
    if (error) return <p>Error :( {error.message}</p>;
    if (loading) return <p>Loading...</p>;

    return (
        <>
            <div className="tab-content" style={{overflowY:"scroll"}}>
                <div className="tab-pane  pb-0 p-3 px-lg-7 py-lg-5 fade active show" id="kt_aside_tab_1">
                   <div className="d-flex justify-content-between align-items-center">
                        <h3 className="p-2 p-lg-3 my-1 my-lg-3">Models</h3>
                        <button onClick={() => setCreateModelModal(true)} className="btn btn-circle btn-secondary btn-icon btn-fixed-height font-weight-bold px-2 px-lg-5 mr-2"><Plus/> </button>

                   </div>

                    <div className="separator separator-dashed mt-2 mb-5"></div>

                    <div className="list list-hover">
                        {data.models.map((model: any) => <NavLink key={model.id} activeClassName="model-active" to={"/models/" + model.id}>
                            <div className="list-item hoverable p-2 p-lg-3 mb-2">
                                <div className="d-flex align-items-center">
                                    <Bookmark />
                                    <div className="d-flex justify-content-between flex-grow-1 ml-2 mr-2">
                                        <span className="text-dark-75 font-size-h6 mb-0">{model.name}</span>
                                        <Right />

                                    </div>
                                </div>
                            </div>
                        </NavLink>)}

                    </div>
                    
                </div>
            </div>
            <div className="w-100 pb-5 px-5">
                <div className="separator separator-dashed mt-0 mb-5"></div>

                <button onClick={() => setCreateModelModal(true)} className="btn btn-primary btn-lg btn-block"><span> Create New Model</span> </button>
                <CreateModel />
                <EditModel />

            </div>
        </>
    );
}

const FunctionsAside = () => {
    return (<> Functions Works</>);
}

const ExtensionsAside = () => {
    return (<> Extensions Works</>);
}

const SettingsAside = () => {
    return (<> Settings Aside</>);
}

const StorageAside = () => {
    return (<> Storage Aside</>);
}


export default Aside
