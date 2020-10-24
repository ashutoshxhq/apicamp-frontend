import { useMutation, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { GET_MODELS, GET_RELATIONSHIPS, UPDATE_RELATIONSHIP } from '../../graphql/models'
import { editRelationshipModalState } from '../../store/models'

const EditRelationship = () => {
    const { modelId } = useParams<any>();

    const [editRelationshipModal, setEditRelationshipModal] = useRecoilState(editRelationshipModalState)
    const [name, setName] = useState(editRelationshipModal.data.name)
    const [type, setType] = useState(editRelationshipModal.data.type)
    const [updateRelationshipMutation] = useMutation(UPDATE_RELATIONSHIP);
    const [relationshipModelId, setRelationshipModelId] = useState(editRelationshipModal.data.relationshipModel.id)
    const [relationshipFieldId, setRelationshipFieldId] = useState(editRelationshipModal.data.relationshipModelField.id)
    const [currentModelFieldId, setCurrentModelFieldId] = useState(editRelationshipModal.data.modelField.id)

    const handleModelClose = () => {
        setEditRelationshipModal({modalState:false,id:"", data:{}})
    }
    const handleEditRelationship = () => {
        updateRelationshipMutation({
            variables: {
                id:editRelationshipModal.id,
                name,
                type,
                model_id: modelId,
                relationship_model_field_id: relationshipFieldId,
                relationship_model_id: relationshipModelId,
                model_field_id: currentModelFieldId,
            },
            refetchQueries: [{
                query: GET_RELATIONSHIPS, variables: {
                    model_id: modelId,
                },
            }],
        }).then((res: any) => {
            setName("")
            setType("object")
            setCurrentModelFieldId("")
            setRelationshipFieldId("")
            setCurrentModelFieldId("")
            setEditRelationshipModal({modalState:false,id:"", data:{}})
        }).catch((error: any) => {
            console.log(error);
        });
    }
 console.log(editRelationshipModal)
    const { loading, error, data } = useQuery(GET_MODELS);
    if (error) return <p>Error :( {error.message}</p>;
    if (loading) return <p>Loading...</p>;
    return (
        <>
            <div className={editRelationshipModal.modalState ? "modal fade show model-show" : "modal fade"} style={{ width: "30%", height: "fit-content", margin: "10% 35%" }}>
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
                                        value={name}
                                        onChange={e => setName(e.target.value.replace(/\s+(.)/g,c => c.toUpperCase().replace(/\s+/g, '')).replace(/[&/\\#,+()$~%.'":*!?@^_\-=<>{}]/g, ''))}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Relationship Type</label>
                                    <select

                                        className="form-control form-control-solid selectpicker"
                                        name="name"
                                        placeholder="Name"
                                        value={type}
                                        onChange={e => setType(e.target.value)}
                                    >
                                        <option value="array">Array</option>
                                        <option value="object">Object</option>


                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Relationship With Model</label>
                                    <select

                                        className="form-control form-control-solid selectpicker"
                                        name="name"
                                        placeholder="Name"
                                        value={relationshipModelId}
                                        onChange={(e) => { 
                                            setRelationshipModelId(e.target.value)
                                            data.models.map((model: any) => {
                                                if (model.id === e.target.value) setRelationshipFieldId(model.fields[0]?.id)
                                                if (model.id === modelId) setCurrentModelFieldId(model.fields[0]?.id)
                                                return model
                                            })
                                        }}
                                    >
                                        {data.models.map((model: any) => <option key={model.id} value={model.id}>{model.name}</option>)}
                                    </select>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="form-group">
                                            <label>Current Model Fields</label>
                                            <select

                                                className="form-control form-control-solid selectpicker"
                                                name="name"
                                                placeholder="Name"
                                                value={currentModelFieldId}
                                                onChange={e => setCurrentModelFieldId(e.target.value)}
                                            >
                                                {data.models.map((model: any) => model.id === modelId ? model.fields.map((field: any) => <option key={field.id} value={field.id}>{field.name}</option>) : null)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="form-group">
                                            <label>Relationship Model Fields</label>
                                            <select

                                                className="form-control form-control-solid selectpicker"
                                                name="name"
                                                placeholder="Name"
                                                value={relationshipFieldId}
                                                onChange={e => setRelationshipFieldId(e.target.value)}
                                            >
                                                {data.models.map((model: any) => model.id === relationshipModelId ? model.fields.map((field: any) => <option key={field.id} value={field.id} >{field.name}</option>) : null)}

                                            </select>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="d-flex justify-content-end w-100">
                                <button onClick={handleEditRelationship} className="btn btn-primary btn-fixed-height font-weight-bold px-2 px-lg-5 mr-2">
                                    <span className="d-none d-md-inline"> Update Relationship</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {editRelationshipModal.modalState ? <div onClick={handleModelClose} className="modal-backdrop fade show"></div> : null}
        </>
    )
}

export default EditRelationship
