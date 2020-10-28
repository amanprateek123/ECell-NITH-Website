import React from 'react'
import './High.scss'
import img from './eve.jpg'
import img1 from './eve1.jpg'
import img2 from './eve2.jpg'

export default function High() {
    return (
        <React.Fragment>
            <h1 className="high">Highlight Events</h1>
            <div className="highlight" >
               <div className="back" style={{backgroundImage:`url(${img})`}}  data-aos="zoom-in" data-aos-duration="1500" >
                  <div className="bg" >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem rerum praesentium eligendi
                        aliquid pariatur delectus repellat cumque porro neque ratione facilis mollitia, placeat magnam omnis
                        dolorum est reprehenderit nisi eum! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Perferendis, officiis? Eius of
                  </div>
               </div>
               <div className="back" style={{backgroundImage:`url(${img1})`}} data-aos="zoom-in" data-aos-duration="1500">
               <div className="bg" >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem rerum praesentium eligendi
                        aliquid pariatur delectus repellat cumque porro neque ratione facilis mollitia, placeat magnam omnis
                        dolorum est reprehenderit nisi eum! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Perferendis, officiis? Eius of
                  </div>
               </div>
               <div className="back" style={{backgroundImage:`url(${img2})`}} data-aos="zoom-in" data-aos-duration="1500">
               <div className="bg" >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem rerum praesentium eligendi
                        aliquid pariatur delectus repellat cumque porro neque ratione facilis mollitia, placeat magnam omnis
                        dolorum est reprehenderit nisi eum! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Perferendis, officiis? Eius of
                  </div>
               </div>
            </div>
        </React.Fragment>
    )
}
