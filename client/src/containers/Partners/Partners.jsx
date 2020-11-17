import React, { useState,useEffect } from 'react'
import './Partners.scss'

export default function Partners() {
    const [part,setPart] = useState([])
    useEffect(()=>{
        fetch('/partner').then(res=>res.json()).then(res=>{
               setPart(res)
             })
    },[])
    console.log(part)

    return (
        <div className="partner" >
           <p className='head1'>Partners</p>
           {part.length>0?(
            <div className="logo_part">
            {part.map(item=>(
                <div> 
                    <a href={item.link} target="blank" ><img src={item.imageURL} /></a>
                </div>
            ))}
        </div>
           ):null}
        </div>  
    )
}
