import { useMutation, useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { DELETE_MODEL, GET_MODELS, UPDATE_MODEL } from '../../graphql/models'
import { editModelModalState } from '../../store/models'
import { useHistory } from "react-router-dom";

const EditModel = () => {
    const history = useHistory();
    const { modelId } = useParams<any>();
    const [name, setName] = useState("")
    const [updateModelMutation] = useMutation(UPDATE_MODEL);
    const [deleteModelMutation] = useMutation(DELETE_MODEL);

    const [editModelModal, setEditModelModal] = useRecoilState(editModelModalState)
    const handleModalClose = () => {
        setEditModelModal(false)
    }
    const handleEditModel = () => {
        updateModelMutation({
            variables: {
                name,
                id: modelId
            },
            refetchQueries: [{ query: GET_MODELS }],
        }).then((res: any) => {
            setEditModelModal(false)
            console.log(res)
        }).catch((error: any) => {
                console.log(error);
            });
    }
    const handleDeleteModel = () => {
        deleteModelMutation({
            variables: {
                id: modelId
            },
            refetchQueries: [{ query: GET_MODELS }],
        }).then((res: any) => {
            setEditModelModal(false)
            console.log("DELETED:", res)
            history.replace("/models");
        })
            .catch((error: any) => {
                setEditModelModal(false)
                console.log(error);
            });
    }
    const { loading, error, data } = useQuery(GET_MODELS, {
        variables: {
            id: modelId,
        },
    });
    useEffect(() => {
        if (data) {
            if (data.models.length > 0) setName(data.models[0].name)
        }
    }, [setName, data])
    if (error) return <p>Error :( {error.message}</p>;
    if (loading) return null;
    if (data) console.log(data)
    if (!editModelModal) return (null)
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
                                        value={name}
                                        onChange={e => { setName(e.target.value) }}
                                        placeholder="Name"
                                    />
                                </div>

                            </div>
                            <div className="d-flex justify-content-end w-100">
                                <button onClick={handleDeleteModel} className="btn btn-light-danger btn-fixed-height font-weight-bold px-2 px-lg-5 mr-2">
                                    <span className="d-none d-md-inline"> Delete Model</span>
                                </button>
                                <button onClick={handleEditModel} className="btn btn-primary btn-fixed-height font-weight-bold px-2 px-lg-5 mr-2">
                                    <span className="d-none d-md-inline"> Update Model</span>
                                </button>
                            </div>
                        </div>
                        <div className="separator separator-dashed mt-5 mb-5"></div>
                        <div className="row">
                            <div className="col-xl-12">

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
