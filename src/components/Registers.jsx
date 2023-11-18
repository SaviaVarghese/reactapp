import axios from 'axios'
import React, { useState } from 'react'

const Registers = () => {
    const [inputField,getData]=useState({
        "name":"",
        "pic":"",
        "email":"",
        "password":""

    })

    
    
    const inputHandler=(event)=>{
        getData({...inputField,[event.target.name]:event.target.value})
    }

    
    
    
    const readValue=()=>{
        axios.post("http://127.0.0.1:8000/bg/useradd/",inputField).then(
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
                            <label htmlFor="" className="form-label">Username</label>
                            <input type="text" className="form-control" name='name' value={inputField.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Profile pic</label>
                            <input type="text" className="form-control" name='pic' value={inputField.pic} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">EMail id</label>
                            <input type="text" className="form-control" name='email' value={inputField.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Message</label>
                            <input type="text" className="form-control" name='password' value={inputField.password} onChange={inputHandler}/>
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

export default Registers