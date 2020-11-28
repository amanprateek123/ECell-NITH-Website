import React, { useState,useEffect } from 'react'
import './News.scss'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default function News() {
    const [news,setNews] = useState([])
    useEffect(()=>{
        fetch('/news').then(res=>res.json()).then(res=>{
            setNews(res)
        })
    },[])

    console.log('a',news)
    return (
        <div className="news" >
            <h1>News</h1>
            {news.length>0?
                <div className="news_sec">
                <div className="imgs" >
                    <img src={news[news.length-1].img}/>
                </div>
                <div className="cont" >
                   <div className="marker" >
                      <h5 style={{color:'white',margin:'0',padding:'.2em'}}>E-Cell NITH</h5>
                   </div>
                   <div className="box">
                      <marquee direction="up" behaviour= 'scroll' height="100%" scrollamount={2}>
                         {news.map(itm=>(
                            <p>
                             <ChevronRightIcon style={{color:'skyblue'}} />
                             {itm.headline}
                             <span> 
                             <a href={itm.link} style={{marginLeft:'3px',color:'skyblue',cursor:'pointer'}} target="blank" >
                                Read more
                             </a>
                             </span>
                             <span> 
                                <img src="https://upsee.nic.in/WebInfo/Images/newicon.gif" style={{width:'2em'}} />
                             </span>
                            </p>))}                        
                      </marquee>
                   </div>
                </div>
            </div>:null}
        </div>
    )
}
