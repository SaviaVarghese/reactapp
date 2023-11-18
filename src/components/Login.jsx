import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Login = () => {

    const navigate=useNavigate()

    const[inputField,getData]=useState({
        "email":"",
        "password":""
    })

    const inputHandler=(event)=>{
        getData({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputField)
        if(inputField.email=="sav@gmail.com" && inputField.password=="123")
        {
            navigate("/add")
        }
        else
        {
            alert("invalid credentials")
        }
    }
  return (
    <div>
                <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                    <div class="card text-center">
  
                    <div class="card-body ">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Email id</label>
                            <input type="text" className="form-control" name='email' value={inputField.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Password</label>
                            <input type="password" name='password' id="" className="form-control" value={inputField.password} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                        </div>
  </div>
</div>
                       
                       
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Login