import React,{useEffect} from 'react'
import { useState } from 'react'
import './Initiatives.scss'
import CircularProgress from '@material-ui/core/CircularProgress';

function typedArrayToURL(typedArray, mimeType) {
    return URL.createObjectURL(new Blob([typedArray], {type: mimeType}))
  }

export default function Initiatives() {
    const [event,setEvent] = useState([])

    useEffect(()=>{
        fetch('/initiative').then(res=>res.json()).then(res=>{
               setEvent(res)
             })
    },[])

    let url = ''
   function hi(arr){
      const STRING_CHAR = event.length?arr.image.data.reduce((data, byte)=> {
      return data + String.fromCharCode(byte);
      }, ''):null
      let base64String = btoa(STRING_CHAR);
      url= ('data:image/jpg;base64,' + base64String)
      return url
   }

    return (
       event.length? <div>
           <p className='heads'>Our Initiatives</p>
           <div className='containers container'>
           <div className="b-1 box">
             <div className="cont" style={{backgroundImage:`url(${hi(event[0])})`}} >
                <div className="desc">
                <p className="text" >{event[0].eventName}</p>
                <span>
                    {event[0].description}
                </span>
                </div>
             </div>
          </div>
          {event.slice(1).map(item=>(
              <div className="b2 box" key={item._id} >
              <div style={{backgroundImage:`url(${hi(item)})`}} >
               
               </div>
           </div>
          ))}
          
        </div>
        </div>:<div className="spin">
                <CircularProgress/>
              </div>
    )
}
