
import React from 'react'
import { useRecoilState } from 'recoil'
import AddPage from '../../icons/AddPage'
import { addRelationshipModelState } from '../../store/models'

const AddRelationship = () => {
    const [relationshipModelState, setRelationshipModelState] = useRecoilState(addRelationshipModelState)
    const handleModelClose = () => {
        setRelationshipModelState(false)
    }
    return (
        <>
            <div className={relationshipModelState ? "modal fade show model-show" : "modal fade"} style={{ width: "30%", height: "fit-content", margin: "10% 35%" }}>
                <div className="modal-content" >
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="form-group">
                                    <label>Relationship Name</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-solid form-control-lg"
                                        name="name"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Relationship Type</label>
                                    <select

                                        className="form-control form-control-solid selectpicker"
                                        name="name"
                                        placeholder="Name"
                                    >
                                        <option value="string">Array</option>
                                        <option value="number">Object</option>


                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Relationship With Model</label>
                                    <select

                                        className="form-control form-control-solid selectpicker"
                                        name="name"
                                        placeholder="Name"
                                    >
                                        <option value="string">Users</option>
                                        <option value="number">Projects</option>
                                        <option value="number">Products</option>


                                    </select>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="form-group">
                                            <label>Model1 Fields</label>
                                            <select

                                                className="form-control form-control-solid selectpicker"
                                                name="name"
                                                placeholder="Name"
                                            >
                                                <option value="string">id</option>
                                                <option value="number">name</option>


                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="form-group">
                                            <label>Model2 Fields</label>
                                            <select

                                                className="form-control form-control-solid selectpicker"
                                                name="name"
                                                placeholder="Name"
                                            >
                                                <option value="string">id</option>
                                                <option value="number">user_id</option>


                                            </select>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="d-flex justify-content-end w-100">
                                <button onClick={() => { }} className="btn btn-primary btn-fixed-height font-weight-bold px-2 px-lg-5 mr-2">
                                    <AddPage />
                                    <span className="d-none d-md-inline"> Add Relationship</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {relationshipModelState ? <div onClick={handleModelClose} className="modal-backdrop fade show"></div> : null}
        </>
    )
}

export default AddRelationship
