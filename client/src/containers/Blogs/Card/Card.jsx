import React, { useState } from 'react'
import {Button} from '@material-ui/core'
import './Card.scss'

export default function Card() {
    const para = "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
    const [len,setLen] = useState(150)
    let red = para.slice(0,len)
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
              <Button variant="contained" color="inherit" onClick={()=>setLen(para.length)} > Read More </Button>
            </div>
            </div>
        </div>
    )
}
