import React, { useState } from 'react'
import {Button} from '@material-ui/core'
import './Card.scss'

export default function Card() {
    const para = "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
    const [len,setLen] = useState(150)
    let red = para.slice(0,len)
    const change = ()=>{
        if(len===150){
            setLen(para.length)
        }
        else{
            setLen(150)
        }
    }
    return (
        <div className="cards" >
            <h4>Title</h4>
            <div className="imgs" >
               <img src="https://bmmagazine.co.uk/wp-content/uploads/2017/01/blogging-e1484908296381.jpg"/>
            </div>
            <div>
            <h6> Sub-Title </h6>
            <p> {red} </p>
            <div className="btns" >
              <Button variant="contained" color="inherit" onClick={change} > {len===150?"Read More":"Show Less"} </Button>
            </div>
            </div>
        </div>
    )
}
