import React,{useState,useEffect} from 'react'
import './Authority.scss'

export default function Authority() {
    const [auth,setAuth] = useState([])

    useEffect(()=>{
        fetch('/auth').then(res=>res.json()).then(res=>
            {
                setAuth(res)
            })
    },[])
    console.log(auth)
    return (
        <div>
            Authority
        </div>
    )
}
