import { useMutation, useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { GET_FIELDS, GET_MODELS, UPDATE_FIELD } from '../../graphql/models'
import { editFieldModalState } from '../../store/models'

const EditField = () => {
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
    const [editfieldModal, setEditFieldModal] = useRecoilState(editFieldModalState)
    const [name, setName] = useState("")
    const [type, setType] = useState("string")
    const [key, setKey] = useState("none")

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
                key: key
            },
            refetchQueries: [{
                query: GET_MODELS, variables: {
                    id: modelId,
                },
            }],
        }).then((res: any) => {
            setName("")
            setKey("none")
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
        setKey("none")
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
            setKey(data.fields[0].key)
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
                    <div className="row mb-6">
                        <div className="col-xl-12 text-center">
                            <h2>Edit Field</h2>
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
