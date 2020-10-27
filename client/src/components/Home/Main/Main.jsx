import React from 'react'
import Typography from '@material-ui/core/Typography';
import './Main.scss'
import { Button } from '@material-ui/core';

export default function Main() {
    function hello() {
        window.scroll({
          top: document.body.offsetHeight/2.5,
          left: 0, 
          behavior: 'smooth',
        });
      }
    return (
        <div>
        <div className="mainConts mainImg" >
        <div className="container mx-auto" >
          <p className="main_text" >NATIONAL INSTITUTE OF TECHNOLOGY, HAMIRPUR</p>
           <Typography variant="h2" className="typo" >ENTREPRENEURSHIP CELL</Typography>
           <div className="what">
              <img src="https://www.ecell.in/2020/images/bottom-arrow.png" alt="bottom"/>
              <p className="gets" onClick={hello} >What We Do?</p>
           </div>
        </div>
       </div>    
        </div>
    )
}
