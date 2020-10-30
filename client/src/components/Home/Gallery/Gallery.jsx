import React from 'react'
import './Gallery.scss'
import img1 from './01.jpg'
import img2 from './02.jpg'
import img3 from './03.jpg'
import img4 from './04.jpg'

export default function Gallery() {
    return (
        <div>
             <h1 className="gal">Gallery</h1>
             <div className="gali" >
             <div className="itm" style={{backgroundImage:`url(${img1})`}}  data-aos="zoom-in" data-aos-duration="1500" >
             </div>
             <div className="itm" style={{backgroundImage:`url(${img2})`}}  data-aos="zoom-in" data-aos-duration="1500" >
             </div>
             <div className="itm" style={{backgroundImage:`url(${img3})`}}  data-aos="zoom-in" data-aos-duration="1500" >
             </div>
             <div className="itm" style={{backgroundImage:`url(${img4})`}}  data-aos="zoom-in" data-aos-duration="1500" >
             </div>
             
             </div>
        </div>
    )
}
