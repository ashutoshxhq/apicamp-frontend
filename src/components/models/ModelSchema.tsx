import React from 'react'
import { useRecoilState } from 'recoil'
import AddPage from '../../icons/AddPage'
import Text from '../../icons/Text'
import ModelSubheader from './ModelSubheader'
import { addFieldModalState, addRelationshipModalState } from '../../store/models'
import AddField from './AddField'
import AddRelationship from './AddRelationship'
import { useMutation, useQuery } from '@apollo/client';
import { GET_MODELS, GET_FIELDS } from '../../graphql/models';
import { useParams } from 'react-router-dom'

const ModelSchema = () => {
    const { modelId } = useParams<any>();
    console.log(modelId)
    const [, setFieldModal] = useRecoilState(addFieldModalState)
    const [, setRelationshipModal] = useRecoilState(addRelationshipModalState)

    const handleOpenAddFieldModel = () => {
        setFieldModal(true)
    }
    const handleOpenAddRelationshipModel = () => {
        setRelationshipModal(true)
    }
    const { loading, error, data } = useQuery(GET_MODELS, {
        variables: {
            id: modelId,
        },
    });
    if (error) return <p>Error :( {error.message}</p>;
    if (loading) return <p>Loading...</p>;
    if (data) console.log(data)
    return (
        <>
            <div className="card card-custom">
                <div className="card-header border-0 py-5">
                    <h3 className="card-title align-items-start flex-column">
                        <span className="card-label font-weight-bolder text-dark">Model Fields</span>
                        <span className="text-muted mt-3 font-weight-bold font-size-sm">4 fields, 1 primary key and 0 unique key</span>
                    </h3>
                    <div className="card-toolbar">
                        <button onClick={handleOpenAddFieldModel} className="btn btn-primary btn-fixed-height font-weight-bold px-2 px-lg-5 mr-2">
                            <AddPage />
                            <span className="d-none d-md-inline"> Add New Field</span>
                        </button>
                        <AddField />
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
                                            Field
                      </th>
                                        <th style={{ minWidth: "150px" }}></th>


                                        <th className="text-left" style={{ minWidth: "150px" }}>null value</th>
                                        <th style={{ minWidth: "150px" }}>default</th>
                                        <th
                                            className="pr-0 text-right"
                                            style={{ minWidth: "150px" }}
                                        >
                                            action
                      </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr key="1">
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
                                                {"id"}

                                            </span>
                                            <span className="text-muted font-weight-bold">
                                                UUID, primary key
                            </span>
                                        </td>
                                        <td className="">
                                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                {"Not Null"}

                                            </span>
                                            <span className="text-muted font-weight-bold">
                                                value cannot be null
                            </span>

                                        </td>
                                        <td className="">
                                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                {"generateUUID()"}

                                            </span>
                                            <span className="text-muted font-weight-bold">
                                                generates new uuid
                            </span>

                                        </td>


                                        <td className="pr-0 text-right">

                                            <a
                                                href="#//"
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
                                            </a>
                                            <a
                                                href="#//"
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
                                            </a>
                                        </td>
                                    </tr>
                                    <tr key="2">
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
                                                {"name"}

                                            </span>
                                            <span className="text-muted font-weight-bold">
                                                string
                            </span>
                                        </td>
                                        <td className="">
                                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                {"Null"}

                                            </span>
                                            <span className="text-muted font-weight-bold">
                                                value can be null
                            </span>

                                        </td>
                                        <td className="">
                                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                {"Not Available"}

                                            </span>
                                            <span className="text-muted font-weight-bold">
                                                no default value provided
                            </span>

                                        </td>


                                        <td className="pr-0 text-right">

                                            <a
                                                href="#//"
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
                                            </a>
                                            <a
                                                href="#//"
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
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>

            <div className="card card-custom mt-6">
                <div className="card-header border-0 py-5">
                    <h3 className="card-title align-items-start flex-column">
                        <span className="card-label font-weight-bolder text-dark">Relationships</span>
                        <span className="text-muted mt-3 font-weight-bold font-size-sm">1 relationships</span>
                    </h3>
                    <div className="card-toolbar">
                        <button onClick={handleOpenAddRelationshipModel} className="btn btn-primary btn-fixed-height font-weight-bold px-2 px-lg-5 mr-2">
                            <AddPage />
                            <span className="d-none d-md-inline"> Create New Relationship</span>
                        </button>
                        <AddField />
                        <AddRelationship />
                    </div>
                </div>
                <div className="card-body pt-0"></div>
            </div>
        </>
    )
}

export default ModelSchema
