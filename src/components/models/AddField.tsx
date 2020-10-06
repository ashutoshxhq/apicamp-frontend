import React from 'react'
import { useRecoilState } from 'recoil'
import AddPage from '../../icons/AddPage'
import { addFieldModelState } from '../../store/models'

const AddField = () => {
    const [fieldModelState, setFieldModelState] = useRecoilState(addFieldModelState)
    const handleModelClose = () => {
        setFieldModelState(false)
    }
    return (
        <>
            <div className={fieldModelState ? "modal fade show model-show" : "modal fade"} style={{ width: "50%", height: "fit-content", margin: "10% 25%" }}>
                <div className="modal-content" >
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="form-group">
                                    <label>Field Name</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-solid form-control-lg"
                                        name="name"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Field Type</label>
                                    <select

                                        className="form-control form-control-solid selectpicker"
                                        name="name"
                                        placeholder="Name"
                                    >
                                        <option value="string">String</option>
                                        <option value="number">Number</option>
                                        <option value="boolean">Boolean</option>
                                        <option value="uuid">UUID</option>
                                        <option value="uuid">Hashed String</option>
                                        <option value="uuid">Encrypted String</option>

                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Default Value</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-solid form-control-lg"
                                        name="name"
                                        placeholder="Default"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Null Value</label>
                                    <div className="radio-inline">
                                        <label className="radio">
                                            <input type="radio" checked={true} name="radios3" />
                                            <span></span>Can Be Null</label>
                                        <label className="radio">
                                            <input type="radio" name="radios3" />
                                            <span></span>Cannot Be Null</label>

                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end w-100">
                                <button onClick={()=>{}} className="btn btn-primary btn-fixed-height font-weight-bold px-2 px-lg-5 mr-2">
                                    <AddPage />
                                    <span className="d-none d-md-inline"> Add Field</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {fieldModelState ? <div onClick={handleModelClose} className="modal-backdrop fade show"></div> : null}
        </>
    )
}

export default AddField
