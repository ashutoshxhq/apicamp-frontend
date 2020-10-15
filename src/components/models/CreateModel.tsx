import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { CREATE_MODEL, GET_MODELS } from '../../graphql/models'
import AddPage from '../../icons/AddPage'
import { createModelModalState } from '../../store/models'

const CreateModel = () => {
    const [name, setName] = useState("")
    const [createModelModal, setCreateModelModal] = useRecoilState(createModelModalState)
    const [createModelMutation] = useMutation(CREATE_MODEL);

    const handleModalClose = () => {
        setName("")
        
        setCreateModelModal(false)
    }

    const handleCreateModel = () => {
        createModelMutation({
            variables: {
                name,
            },
            refetchQueries: [{ query: GET_MODELS }],
        }).then((res: any) => {
            setName("")
            setCreateModelModal(false)
            console.log(res)
        })
            .catch((error: any) => {

                console.log(error);
            });
    }
    return (
        <>
            <div className={createModelModal ? "modal fade show model-show" : "modal fade"} style={{ width: "30%", height: "fit-content", margin: "10% 35%" }}>
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
                                        value={name}
                                        onChange={e => { setName(e.target.value) }}
                                    />
                                </div>

                            </div>
                            <div className="d-flex justify-content-end w-100">
                                <button onClick={handleCreateModel} className="btn btn-primary btn-fixed-height font-weight-bold px-2 px-lg-5 mr-2">
                                    <AddPage />
                                    <span className="d-none d-md-inline"> Add Model</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {createModelModal ? <div onClick={handleModalClose} className="modal-backdrop fade show"></div> : null}
        </>
    )
}

export default CreateModel
