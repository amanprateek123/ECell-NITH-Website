import React, { useState } from 'react'
import './News.scss'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default function News() {
    return (
        <div className="news" >
            <h1>News</h1>
            <div className="news_sec">
                <div className="imgs" >
                    <img src="https://ecellnith.org/images/project.jpg"/>
                </div>
                <div className="cont" >
                   <div className="marker" >
                      <h5 style={{color:'white',margin:'0',padding:'.2em'}}>E-Cell NITH</h5>
                   </div>
                   <div className="box">
                      <marquee direction="up" behaviour= 'scroll' height="100%" scrollamount={2}>
                         <p> <ChevronRightIcon style={{color:'skyblue'}} /> Public Notice: Display of questions, marked responslege and Associated Hospitals, New Delhi.
                          <span> <a href="/initiatives" style={{marginLeft:'3px',color:'skyblue',cursor:'pointer'}} target="blank" >Read more</a> </span><span> <img src="https://upsee.nic.in/WebInfo/Images/newicon.gif" style={{width:'2em'}} /> </span></p>
                          <p><ChevronRightIcon style={{color:'skyblue'}} /> Public Notice: Display of questions, marked responslege and Associated Hospitals, New Delhi.
                           <span> <a href="/initiatives" style={{marginLeft:'3px',color:'skyblue',cursor:'pointer'}} target="blank" >Read more</a> </span><span> <img src="https://upsee.nic.in/WebInfo/Images/newicon.gif" style={{width:'2em'}} /> </span></p>
                           <p><ChevronRightIcon style={{color:'skyblue'}} /> Public Notice: Display of questions, marked responslege and Associated Hospitals, New Delhi.
                            <span> <a href="/initiatives" style={{marginLeft:'3px',color:'skyblue',cursor:'pointer'}} target="blank" >Read more</a> </span><span> <img src="https://upsee.nic.in/WebInfo/Images/newicon.gif" style={{width:'2em'}} /> </span></p>
                            <p><ChevronRightIcon style={{color:'skyblue'}} /> Public Notice: Display of questions, marked responslege and Associated Hospitals, New Delhi.
                             <span> <a href="/initiatives" style={{marginLeft:'3px',color:'skyblue',cursor:'pointer'}} target="blank" >Read more</a> </span><span> <img src="https://upsee.nic.in/WebInfo/Images/newicon.gif" style={{width:'2em'}} /> </span></p>                          
                      </marquee>
                   </div>
                </div>
            </div>
        </div>
    )
}
