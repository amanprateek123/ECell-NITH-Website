import React,{useState,useEffect} from 'react'
import './Authority.scss'

export default function Authority() {
    const [auth,setAuth] = useState([])

    useEffect(()=>{
        fetch('/api/auth').then(res=>res.json()).then(res=>
            {
                setAuth(res)
            })
    },[])
    console.log(auth)
    return (
        auth.length>0?<div className="auth" >
        <h2>Authority</h2>
        <div className="faculty" >
            <div className="div" data-aos="flip-left" data-aos-duration="1500" >
                <img src={auth[0].image} />
                <div>
                <h4>{auth[0].name}</h4>
                <p style={{color:'skyblue',fontWeight:'bold'}} >{auth[0].designation}</p>
                <p className="para" >{auth[0].description}</p>
                </div>
            </div>
            <div className="div" data-aos="flip-left" data-aos-duration="1500" >
                <img src={auth[1].image} />
                <div>
                <h4>{auth[1].name}</h4>
                <p style={{color:'skyblue',fontWeight:'bold'}} >{auth[1].designation}</p>
                <p className="para">{auth[1].description}</p>
                </div>
            </div>
        </div>
    </div>:null
    )
}
