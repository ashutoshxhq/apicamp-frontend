import React from 'react'
import { useRecoilState } from 'recoil'
import { modelModeState } from '../../store/models'
import ModelData from './ModelData'
import ModelSchema from './ModelSchema'
import ModelSubheader from './ModelSubheader'

const Models = () => {
    const [modelMode, setModelMode] = useRecoilState(modelModeState)

    return (
        <div className="content d-flex flex-column flex-column-fluid">
            <div className="d-flex flex-column-fluid">
                <div className="container-fluid">
                    <ModelSubheader />
                    {modelMode === 0?<ModelData/>:<ModelSchema/>}
                </div>
            </div>
        </div>
    )
}

export default Models
