import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { CREATE_FIELD, GET_MODELS } from '../../graphql/models'
import AddPage from '../../icons/AddPage'
import { addFieldModalState } from '../../store/models'

const AddField = () => {
    const { modelId } = useParams<any>();

    const [addfieldModal, setAddFieldModal] = useRecoilState(addFieldModalState)
    const [name, setName] = useState("")
    const [type, setType] = useState("string")
    const [defaultValue, setDefaultValue] = useState("")
    const [nullValue, setNullValue] = useState("NULL")
    const [createFieldMutation] = useMutation(CREATE_FIELD);
    const handleCreateField = () => {
        createFieldMutation({
            variables: {
                name,
                type,
                default: defaultValue,
                model_id: modelId,
                null_value: nullValue,
                key: "none"
            },
            refetchQueries: [{
                query: GET_MODELS, variables: {
                    id: modelId,
                },
            }],
        }).then((res: any) => {
            setAddFieldModal(false)
            setName("")
            setType("string")
            setDefaultValue("")
            setNullValue("NULL")
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
        setAddFieldModal(false)
    }
    return (
        <>
            <div className={addfieldModal ? "modal fade show model-show" : "modal fade"} style={{ width: "30%", height: "fit-content", margin: "10% 35%" }}>
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
                                <button onClick={handleCreateField} className="btn btn-primary btn-fixed-height font-weight-bold px-2 px-lg-5 mr-2">
                                    <AddPage />
                                    <span className="d-none d-md-inline"> Add Field</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {addfieldModal ? <div onClick={handleModelClose} className="modal-backdrop fade show"></div> : null}
        </>
    )
}

export default AddField
