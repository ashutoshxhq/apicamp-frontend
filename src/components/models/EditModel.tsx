import React from 'react'
import { useRecoilState } from 'recoil'
import AddPage from '../../icons/AddPage'
import { editModelModalState } from '../../store/models'

const EditModel = () => {
    const [editModelModal, setEditModelModal] = useRecoilState(editModelModalState)
    const handleModalClose = () => {
        setEditModelModal(false)
    }
    return (
        <>
        <div className={editModelModal ? "modal fade show model-show" : "modal fade"} style={{ width: "30%", height: "fit-content", margin: "10% 35%" }}>
            <div className="modal-content" >
                <div className="modal-body">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="form-group">
                                <label>Model Name</label>
                                <input
                                    type="text"
                                    className="form-control form-control-solid form-control-lg"
                                    name="name"
                                    placeholder="Name"
                                />
                            </div>
                            
                        </div>
                        <div className="d-flex justify-content-end w-100">
                            <button onClick={()=>{}} className="btn btn-primary btn-fixed-height font-weight-bold px-2 px-lg-5 mr-2">
                                <AddPage />
                                <span className="d-none d-md-inline"> Add Model</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        {editModelModal ? <div onClick={handleModalClose} className="modal-backdrop fade show"></div> : null}
    </>
    )
}

export default EditModel
