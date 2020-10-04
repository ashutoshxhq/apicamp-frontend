import React from 'react'
import { useRecoilState } from 'recoil'
import { addFieldModelState } from '../../store/models'

const AddField = () => {
    const [fieldModelState, setFieldModelState] = useRecoilState(addFieldModelState)
    const handleModelClose = () => {
        setFieldModelState(false)
    }
    return (
        <>
            <div className={fieldModelState ? "modal fade show model-show" : "modal fade"} style={{ width: "50%", height: "fit-content", margin:"10% 25%" }}>
                <div className="modal-content" style={{ height: 100 }}>
                    <div className="modal-body">
                        This is a demo model

                    </div>
                </div>
            </div>
            {fieldModelState ? <div onClick={handleModelClose} className="modal-backdrop fade show"></div> : null}

        </>
    )
}

export default AddField
