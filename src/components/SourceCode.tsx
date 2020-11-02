import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { generateServiceSourceCodeState } from '../store/service'


const SourceCode = () => {
    const [percent, setPercent] = useState(20)
    const [loading, setLoading] = useState(true)
    const [generateServiceSourceCode, setGenerateServiceSourceCode] = useRecoilState(generateServiceSourceCodeState)
    const handleModelClose = () => {
        setGenerateServiceSourceCode({ ...generateServiceSourceCode, modalState: false })
    }
    useEffect(() => {
        setTimeout(() => {
            if (loading) {
                setPercent(60)
            }
        }, 300);

        Axios.post("http://localhost:8000/services/generateCode", {
            "serviceId": "bebcaf8c-a0d7-4504-ae1c-4398071a0eb1"
        }).then(function (response) {
            setLoading(false)
            setPercent(100)
            console.log(response);
            setTimeout(() => {
                setGenerateServiceSourceCode({ ...generateServiceSourceCode, modalState: false })
                window.open(response.data.download);
            }, 1000);
        }).catch(function (error) {
            console.log(error);
        })

    }, [setPercent, percent, setGenerateServiceSourceCode, generateServiceSourceCode, loading, setLoading])

    return (
        <>
            <div className={generateServiceSourceCode.modalState ? "modal fade show model-show" : "modal fade"} style={{ width: "30%", height: "fit-content", margin: "10% 35%" }}>
                <div className="modal-content" >
                    <div className="modal-body">
                        <div className="row mb-6">
                            <div className="col-12 d-flex justify-content-center">
                                <h3>Generating Source Code...</h3>
                            </div>
                        </div>
                        <div className="progress" style={{ height: 20 }}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" style={{ width: percent + "%" }} aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                        <div className="row mt-8">
                            <div className="col-12 d-flex justify-content-center">
                                <blockquote className="blockquote d-flex">
                                    <p className="mb-0 font-size-lg mr-2">"Make it work, make it right, make it fast.</p>
                                    <footer className="blockquote-footer text-right">
                                        <cite title="Source Title">Kent Beck</cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                        <div className="separator separator-dashed mt-2 mb-5"></div>
                    </div>
                </div>
            </div>
            {generateServiceSourceCode.modalState ? <div onClick={handleModelClose} className="modal-backdrop fade show"></div> : null}
        </>

    )
}

export default SourceCode
