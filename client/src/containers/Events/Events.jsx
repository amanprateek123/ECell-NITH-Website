import React,{useState,useEffect} from 'react'
import './Events.scss'

export default function Events(props) {
    const [event,setEvent] = useState([])

    useEffect(()=>{
        fetch(`/initiatives?id=${props.match.params.id}`).then(res=>res.json()).then(res=>{
               setEvent(res)
             })
    },[])
    console.log(event)
    return (
        event.length>0?(
            <div className="events">
                 {event[0].eventName}
        </div>
        ):null
    )
}
