import { useMutation, useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { GET_FIELDS, GET_MODELS, UPDATE_FIELD } from '../../graphql/models'
import { editFieldModalState } from '../../store/models'

const EditField = () => {
    const { modelId } = useParams<any>();

    const [editfieldModal, setEditFieldModal] = useRecoilState(editFieldModalState)
    const [name, setName] = useState("")
    const [type, setType] = useState("string")
    const [defaultValue, setDefaultValue] = useState("")
    const [nullValue, setNullValue] = useState("NULL")
    const [updateFieldMutation] = useMutation(UPDATE_FIELD);
    const handleUpdateField = () => {
        updateFieldMutation({
            variables: {
                id: editfieldModal.id,
                name,
                type,
                default: defaultValue,
                null_value: nullValue,
                key: "none"
            },
            refetchQueries: [{
                query: GET_MODELS, variables: {
                    id: modelId,
                },
            }],
        }).then((res: any) => {
            setName("")
            setType("string")
            setDefaultValue("")
            setNullValue("NULL")
            setEditFieldModal({ id: "", modalState: false })
        })
            .catch((error: any) => {
                console.log(error);
            });
    }
    const handleModelClose = () => {
        setName("")
        setType("string")
        setDefaultValue("")
        setNullValue("NULL")
        setEditFieldModal({ id: "", modalState: false })
    }
    const { loading, error, data } = useQuery(GET_FIELDS, {
        variables: {
            id: editfieldModal.id,
        },
    });
    useEffect(() => {
        if (data) {
            setName(data.fields[0].name)
            setType(data.fields[0].type)
            setDefaultValue(data.fields[0].default)
            setNullValue(data.fields[0].null_value)
        }
    }, [setName, setNullValue, setDefaultValue, setType, data])
    if (error) return <p>Error :( {error.message}</p>;
    if (loading) return <p>Loading...</p>;
    return (
        <>
            <div className={editfieldModal.modalState ? "modal fade show model-show" : "modal fade"} style={{ width: "30%", height: "fit-content", margin: "10% 35%" }}>
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
                                        value={name}
                                        onChange={e => { setName(e.target.value) }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Field Type</label>
                                    <select

                                        className="form-control form-control-solid selectpicker"
                                        name="name"
                                        placeholder="Name"
                                        value={type}
                                        onChange={e => { setType(e.target.value) }}
                                    >
                                        <option value="string">String</option>
                                        <option value="number">Number</option>
                                        <option value="boolean">Boolean</option>
                                        <option value="uuid">UUID</option>
                                        <option value="hashed_string">Hashed String</option>
                                        <option value="encrypted_String">Encrypted String</option>

                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Default Value</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-solid form-control-lg"
                                        name="name"
                                        placeholder="Default"
                                        value={defaultValue}
                                        onChange={e => { setDefaultValue(e.target.value) }}
                                    />
                                </div>
                                <div className="form-group px-6">
                                    <label>Null Value</label>
                                    <div className="radio-inline">
                                        <label className="radio">
                                            <input type="radio" checked={nullValue === "NULL"} onChange={e => { setNullValue(e.target.value) }} value="NULL" />
                                            <span></span>Can Be Null</label>
                                        <label className="radio">
                                            <input type="radio" checked={nullValue === "NOT_NULL"} onChange={e => { setNullValue(e.target.value) }} value="NOT_NULL" />
                                            <span></span>Cannot Be Null</label>

                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end w-100">
                                <button onClick={handleUpdateField} className="btn btn-primary btn-fixed-height font-weight-bold px-2 px-lg-5 mr-2">
                                    <span className="d-none d-md-inline"> Update Field</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {editfieldModal.modalState ? <div onClick={handleModelClose} className="modal-backdrop fade show"></div> : null}
        </>
    )
}

export default EditField
