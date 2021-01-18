import React from 'react'
import './Accomplishments.scss';
function Accompolishments() {
    return (
        <div className="main">
            <h1 className="heading"> Accomplishments</h1>
            <div className="card-container">
                <div className="card" data-aos="flip-left" data-aos-duration="1500">
                    <h1>
                        1st one
                 </h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet tempore nulla reprehenderit blanditiis nemo alias, iure suscipit quo sunt unde.</p>

                </div>
                <div className="card" data-aos="flip-left" data-aos-duration="1500">
                    <h1>
                        02
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ex quis sit consequuntur nobis earum quod temporibus dolores mollitia saepe?
                    </p>

                </div>
                <div className="card" data-aos="flip-left" data-aos-duration="1500">
                    <h1>03 </h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsum reiciendis aperiam odio voluptatibus itaque quod adipisci natus quo nobis?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Accompolishments
