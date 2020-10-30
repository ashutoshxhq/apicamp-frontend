import React from 'react'
import { useRecoilState } from 'recoil'
import { addRelationshipModalState, editRelationshipModalState } from '../../store/models'
import AddRelationship from './AddRelationship'
import Text from '../../icons/Text'
import { useMutation, useQuery } from '@apollo/client'
import { DELETE_RELATIONSHIP, GET_RELATIONSHIPS } from '../../graphql/models'
import { useParams } from 'react-router-dom'
import EditRelationship from './EditRelationship'
import Plus from '../../icons/Plus'

const ModelRelationships = () => {
    const { modelId } = useParams<any>();
    const [editRelationshipModal, setEditRelationshipModal] = useRecoilState(editRelationshipModalState)

    const [, setRelationshipModal] = useRecoilState(addRelationshipModalState)
    const [deleteRelationshipMutation] = useMutation(DELETE_RELATIONSHIP);

    const handleOpenAddRelationshipModel = () => {
        setRelationshipModal(true)
    }
    const handleOpenEditRelationshipModel = (relationship:any) =>{
        console.log(relationship)
        setEditRelationshipModal({modalState:true,id:relationship.id,data: relationship})
    }
    const handleDeleteRelationship = (id:any) =>{
        deleteRelationshipMutation({
            variables: {
                id
            },
            refetchQueries: [{ query: GET_RELATIONSHIPS, variables: {
                model_id: modelId,
            }, }],
        }).then((res:any) => {
            
        })
        .catch((error:any) => {
            console.log(error);
        });
    }
    const { loading, error, data } = useQuery(GET_RELATIONSHIPS, {
        variables: {
            model_id: modelId,
        },
    });
    if (error) return <p>Error :( {error.message}</p>;
    if (loading) return <p>Loading...</p>;
    console.log(editRelationshipModal)
    return (
        <div className="card card-custom mt-6">
            <div className="card-header border-0 py-5">
                <h3 className="card-title align-items-start flex-column">
                    <span className="card-label font-weight-bolder text-dark">Relationships</span>
                    <span className="text-muted mt-3 font-weight-bold font-size-sm">1 relationships</span>
                </h3>
                <div className="card-toolbar">
                    <button onClick={handleOpenAddRelationshipModel} className="btn btn-secondary btn-fixed-height font-weight-bold px-2 px-lg-5 mr-2">
                        <Plus />
                        <span className="d-none d-md-inline"> Create New Relationship</span>
                    </button>
                    <AddRelationship />
                    {editRelationshipModal.modalState?<EditRelationship/>:null}
                </div>
            </div>
            <div className="card-body pt-0">
                <div className="col-xl-12">



                    <div className="table-responsive">
                        <table
                            className="table table-head-custom table-vertical-center"
                            id="kt_advance_table_widget_1"
                        >
                            <thead>

                                <tr className="text-left">
                                    <th className="pl-0" style={{ width: "20px" }}>
                                        <label className="checkbox checkbox-lg checkbox-inline">
                                            <input type="checkbox" value="1" />
                                            <span></span>
                                        </label>
                                    </th>
                                    <th className="pr-0" style={{ width: "80px" }}>
                                        Name
            </th>
                                    <th style={{ minWidth: "150px" }}></th>


                                    <th className="text-left" style={{ minWidth: "150px" }}>Rlationship From</th>
                                    <th style={{ minWidth: "150px" }}>Relationship To</th>
                                    <th
                                        className="pr-0 text-right"
                                        style={{ minWidth: "150px" }}
                                    >
                                        action
                </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.relationships.map((relationship: any) => <tr key={relationship.id}>
                                    <td className="pl-0">
                                        <label className="checkbox checkbox-lg checkbox-inline">
                                            <input type="checkbox" value="1" />
                                            <span></span>
                                        </label>
                                    </td>
                                    <td className="pr-0">
                                        <div className="symbol symbol-50 symbol-light mt-1">
                                            <span className="symbol-label">
                                                <Text />
                                            </span>
                                        </div>
                                    </td>
                                    <td className="pl-0">
                                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                            {relationship.name}

                                        </span>
                                        <span className="text-muted font-weight-bold">
                                            type: {relationship.type}
                                        </span>
                                    </td>
                                    <td className="">
                                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                            field: {relationship.modelField.name }

                                        </span>
                                        <span className="text-muted font-weight-bold">
                                            model: {relationship.model.name}
                                        </span>

                                    </td>
                                    <td className="">
                                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                           field: {relationship.relationshipModelField.name}

                                        </span>
                                        <span className="text-muted font-weight-bold">
                                           model: {relationship.relationshipModel.name}
                                        </span>

                                    </td>


                                    <td className="pr-0 text-right">

                                        <button
                                            onClick={() => handleOpenEditRelationshipModel(relationship)}
                                            className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                                        >
                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xlinkHref="http://www.w3.org/1999/xlink"
                                                    width="24px"
                                                    height="24px"
                                                    viewBox="0 0 24 24"
                                                    version="1.1"
                                                >
                                                    <g
                                                        stroke="none"
                                                        strokeWidth="1"
                                                        fill="none"
                                                        fillRule="evenodd"
                                                    >
                                                        <rect x="0" y="0" width="24" height="24" />
                                                        <path
                                                            d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                                                            fill="#000000"
                                                            fillRule="nonzero"
                                                            transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)"
                                                        />
                                                        <path
                                                            d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                                                            fill="#000000"
                                                            fillRule="nonzero"
                                                            opacity="0.3"
                                                        />
                                                    </g>
                                                </svg>
                                            </span>
                                        </button>
                                        <button
                                            onClick={() => handleDeleteRelationship(relationship.id)}
                                            className="btn btn-icon btn-light btn-hover-primary btn-sm"
                                        >
                                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xlinkHref="http://www.w3.org/1999/xlink"
                                                    width="24px"
                                                    height="24px"
                                                    viewBox="0 0 24 24"
                                                    version="1.1"
                                                >
                                                    <g
                                                        stroke="none"
                                                        strokeWidth="1"
                                                        fill="none"
                                                        fillRule="evenodd"
                                                    >
                                                        <rect x="0" y="0" width="24" height="24" />
                                                        <path
                                                            d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                                                            fill="#000000"
                                                            fillRule="nonzero"
                                                        />
                                                        <path
                                                            d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                                                            fill="#000000"
                                                            opacity="0.3"
                                                        />
                                                    </g>
                                                </svg>
                                            </span>
                                        </button>
                                    </td>
                                </tr>)}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModelRelationships
