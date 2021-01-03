import React,{useEffect,useState} from 'react';
import './Gallery.scss';
import CircularProgress from '@material-ui/core/CircularProgress';

function typedArrayToURL(typedArray, mimeType) {
  return URL.createObjectURL(new Blob([typedArray], {type: mimeType}))
}

export default function Galleries() {
   const [img,setImg] = useState([])
   useEffect(()=>{
       fetch('/api/gallery').then(res=>res.json()).then(res=>{
              console.log(res)
              setImg(res)
            })
   },[])
  //  let url = ''
  //  function hi(arr){
  //     const STRING_CHAR = img.length?arr.image.data.reduce((data, byte)=> {
  //     return data + String.fromCharCode(byte);
  //     }, ''):null
  //     let base64String = btoa(STRING_CHAR);
  //     url= ('data:image/jpg;base64,' + base64String)
  //     return url
  //  }
  return (
    img.length?<div className="gallery" >
      <p className='head'> Gallery</p>
      <div className='containers container'>
        <div className="b-1 box">
          <div style={{backgroundImage:`url(${img[0].image})`}}>
          </div>
        </div>
        {img.slice(1).map(i=>(
          <div className="b-2 box" key={i._id}>
          <div style={{backgroundImage:`url(${i.image})`}}>
              
              </div>
          </div>
        ))}
              </div>
    </div>:
    <div className="spin">
      <CircularProgress/>
    </div>
  );
};
