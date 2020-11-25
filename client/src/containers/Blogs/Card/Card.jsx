import React, { useState } from 'react'
import {Button} from '@material-ui/core'
import './Card.scss'

export default function Card(props) {
    let para = props.data.description
    const [len,setLen] = useState(200)
    let red = para.slice(0,len)
    const change = ()=>{
        if(len===200){
            setLen(para.length)
        }
        else{
            setLen(200)
        }
    }
    console.log(props)
    return (
        <div className="cards" >
            <h4>{props.data.title}</h4>
            <div className="imgs" >
               <img src={props.data.image}/>
            </div>
            <div>
            <h6> {props.data.sub} </h6>
            <p> {red} </p>
            <div className="btns" >
              <Button variant="contained" color="inherit" onClick={change} > {len===200?"Read More":"Show Less"} </Button>
            </div>
            </div>
        </div>
    )
}
