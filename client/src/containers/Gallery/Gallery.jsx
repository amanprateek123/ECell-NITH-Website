import React,{useEffect,useState} from 'react';
import './Gallery.scss';

function Galleries() {
   const [img,setImg] = useState()
   useEffect(()=>{
       fetch('/gallery').then(res=>res.json()).then(res=>
             {
                 console.log('res')
                 setImg(res)}
       )
   },[])
  return (
    <div>
      <p className='display-1 text-center text-primary mt-5'> Gallery</p>
      <div className='containers container'>
        <div className="b-1 box">Box1</div>
        <div className="b-2 box">box2</div>
        <div className="b-2 box">box3</div>
        <div className="b-2 box">box4</div>
        <div className="b-2 box">box5</div>
        <div className="b-2 box">box6</div>
        <div className="b-2 box">box7</div>
        <div className="b-2 box">box8</div>
        <div className="b-2 box">box9</div>
      </div>
    </div>
  );
};
export default Galleries;
