import React from 'react'
import { useRecoilState } from 'recoil'
import Edit from '../../icons/Edit'
import HardDrive from '../../icons/HardDrive'
import Left from '../../icons/Left'
import PenAndRuler from '../../icons/PenAndRuler'
import { editModelModalState, modelModeState } from '../../store/models'

const ModelSubheader = () => {
    const [, setEditModelModal] = useRecoilState(editModelModalState)
    const [modelMode, setModelMode] = useRecoilState(modelModeState)
    const handleModeChange = (mode:number) =>{
        setModelMode(mode)
    }
    return (
        <>
            <div className="subheader py-2 py-lg-6 subheader-solid" id="kt_subheader">
                <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                    <div className="d-flex align-items-center flex-wrap mr-2">
                    <button onClick={() => {}} className="btn btn-secondary btn-fixed-height font-weight-bold mr-2">
                            <Left />
                            <span className="d-none d-md-inline">Back</span>
                        </button>

                    </div>
                    <div className="d-flex justify-content-between align-items-center" style={{ height: 55 }}>
                        <div  onClick={()=>handleModeChange(0)} className={modelMode===0?"model-mode text-muted mr-2 px-5 d-flex justify-content-center align-items-center model-mode-active":"model-mode text-muted mr-2 px-5 d-flex justify-content-center align-items-center"} >
                            <HardDrive />
                            <span className="ml-3 font-weight-bolder mt-2" >Data Mode</span>
                        </div>
                        <div onClick={()=>handleModeChange(1)} className={modelMode===1?"model-mode text-muted mr-2 px-5 d-flex justify-content-center align-items-center model-mode-active":"model-mode text-muted mr-2 px-5 d-flex justify-content-center align-items-center"} >
                            <PenAndRuler/>
                            <span className="ml-3 font-weight-bolder mt-2">Schema Mode</span>
                        </div>
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
