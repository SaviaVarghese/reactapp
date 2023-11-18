import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Views = () => {
    const [data,changeData]=useState([])

    const fetchData=()=>{
        axios.post("http://127.0.0.1:8000/bg/view/").then(
            (response)=>{
                changeData(response.data)
            }
        )
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
                            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            {data.map(
                                (value,i)=>{
                                    return <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <div class="card">
                                    
                                        <div class="card-body">
                                            <h5 class="card-title">{value.userid}</h5>
                                            <h5 class="card-title">{value.title}</h5>
                                            <p class="card-text">{value.message}</p>
    
                                        </div>
                                    </div>
                                </div>

                                }
                            )}
                        </div>

                        </div>     
                    </div>
                </div>

    </div>
  )
}

export default Views