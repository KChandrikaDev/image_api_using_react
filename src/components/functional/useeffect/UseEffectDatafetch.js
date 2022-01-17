import React , {useState, useEffect}from 'react';
import axios from 'axios';


function UseEffectDatafetch() {
    const [data, setData]=useState([])
    const url = "https://api.unsplash.com";
    const key = "7885Ljx-T0IKKJuZZYbFqExiuqaon4whpEdEOO37YMY";
    useEffect(()=>{
     axios.get(`${url}/photos/?client_id=${key}`)
     .then((res)=>{
         console.log("res", res.data);
         setData(res.data)
     })
     .catch((err)=>{
         console.log("err",err)
     })

    },[])
    return (
        <div>
            {
                data.map((img, i)=>(
                    <img key={i} src={img.urls.small}/>
                ))
            }
        </div>
    )
}

export default UseEffectDatafetch
