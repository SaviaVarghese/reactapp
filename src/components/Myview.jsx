import axios from 'axios'
import React, { useState } from 'react'

const Myview = () => {

    const[result,changeResult]=useState([])
    const [inputField,getData]=useState({
        "userid":""
    })

    const inputHandler=(event)=>{
        getData({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputField)
        axios.post("http://127.0.0.1:8000//bg/search/",inputField).then(
            (response)=>{
                changeResult(response.data)
            }
        )

    }
  return (
    <div>
                <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">User id</label>
                            <input type="text" className="form-control" name='userid' value={inputField.userid} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-dark" onClick={readValue}>Search</button>
                        </div>
                    </div>


                </div>
            </div>
<br />
           {result.map(
               (value,index)=>{
                return <div className="row g-3">
                <div className="col 12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div class="card" >
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">{value.title}</li>
                                <li class="list-group-item">{value.message}</li>
                                
                            </ul>
                            </div>
                                    </div>
                                    </div>
            }
           )}

           
        </div>
    </div>
  )
}

export default Myview