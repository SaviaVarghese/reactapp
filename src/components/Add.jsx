import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {
    const [inputField,getData]=useState({
        "userid":"",
        "title":"",
        "message":""
    })

    const inputHandler=(event)=>{
        getData({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputField)
        axios.post("http://127.0.0.1:8000/bg/add/",inputField).then(
            (response)=>{
                alert(response.data.status)
            }
        )

    }
  return (
    <div>
                    <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Userid</label>
                            <input type="text" className="form-control" name='userid' value={inputField.userid} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Title</label>
                            <input type="text" className="form-control" name='title' value={inputField.title} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Message</label>
                            <input type="text" className="form-control" name='message' value={inputField.message} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                        </div>
                    </div>







                </div>
            </div>
        </div>
    </div>
  )
}

export default Add