import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { CREATE_FIELD, GET_MODELS } from '../../graphql/models'
import AddPage from '../../icons/AddPage'
import { addFieldModalState } from '../../store/models'

const AddField = () => {
    const { modelId } = useParams<any>();
    const fieldTypes = [
        { value: 'uuid', title: 'UUID' },
        { value: 'string', title: 'String' },
        { value: 'string', title: 'Hashed String' },
        { value: 'bool', title: 'Boolean' },
        { value: 'int32', title: 'Integer (32)' },
        { value: 'int64', title: 'Integer (64)' },
        { value: 'uint32', title: 'Unsigned Integer (32)' },
        { value: 'uint64', title: 'Unsigned Integer (64)' },
        { value: 'double', title: 'Double' },
        { value: 'float', title: 'Float' },
      ];
    const [addfieldModal, setAddFieldModal] = useRecoilState(addFieldModalState)
    const [name, setName] = useState("")
    const [type, setType] = useState("string")
    const [defaultValue, setDefaultValue] = useState("")
    const [key, setKey] = useState("none")

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
                key: key
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
            setKey("none")
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
        setKey("none")
        setNullValue("NULL")
        setAddFieldModal(false)
    }
    console.log(name)
    return (
        <>
            <div className={addfieldModal ? "modal fade show model-show" : "modal fade"} style={{ width: "30%", height: "fit-content", margin: "10% 35%" }}>
                <div className="modal-content" >
                    <div className="modal-body">
                        <div className="row mb-6">
                        <div className="col-xl-12 text-center">
                            <h2>Add New Field</h2>
                        </div>

                        </div>
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
                                        onChange={e => { setName(e.target.value.replace(/\s+(.)/g,c => c.toUpperCase().replace(/\s+/g, '')).replace(/[&/\\#,+()$~%.'":*!?@^_\-=<>{}]/g, '')) }}
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
                                        {fieldTypes.map(fieldType =><option value={fieldType.value}>{fieldType.title}</option> )}
                                    </select>
                                </div>
                                
                                <div className="form-group px-2">
                                    <label>Value Type</label>
                                    <div className="radio-inline">
                                        <label className="radio">
                                            <input type="radio" checked={nullValue === "NULL"} onChange={e => { setNullValue(e.target.value) }} value="NULL" />
                                            <span></span>Null Value</label>
                                        <label className="radio">
                                            <input type="radio" checked={nullValue === "NOT_NULL"} onChange={e => { setNullValue(e.target.value) }} value="NOT_NULL" />
                                            <span></span>Not Null</label>

                                    </div>
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
                                <div className="form-group px-2">
                                    <label>Key Type</label>
                                    <div className="radio-inline">
                                        <label className="radio">
                                            <input type="radio" checked={key === "none"} onChange={e => { setKey(e.target.value) }} value="none" />
                                            <span></span>None</label>
                                        <label className="radio">
                                            <input type="radio" checked={key === "PRIMARY_KEY"} onChange={e => { setKey(e.target.value) }} value="PRIMARY_KEY" />
                                            <span></span>Primary Key</label>
                                        <label className="radio">
                                            <input type="radio" checked={key === "UNIQUE_KEY"} onChange={e => { setKey(e.target.value) }} value="UNIQUE_KEY" />
                                            <span></span>Unique Key</label>

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
