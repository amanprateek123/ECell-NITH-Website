import React from 'react';
import classes from './Members.module.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
export default function members(props){
    function typedArrayToURL(typedArray, mimeType) {
        return URL.createObjectURL(new Blob([typedArray], {type: mimeType}))
      }
      let url = ''
    function hi(arr){
       const STRING_CHAR = props.team?arr.image.data.reduce((data, byte)=> {
       return data + String.fromCharCode(byte);
       }, ''):null
       let base64String = btoa(STRING_CHAR);
       url= ('data:image/jpg;base64,' + base64String)
       return url
    }

    return(
    <div className={classes.container1}>
    <div className={classes.pics}  style={{backgroundImage:`url(${hi(props.team)})`}} >
        <div className={classes.social} >
             <FacebookIcon fontSize="inherit" style={{fontSize:'30px',cursor:'pointer'}} />
             <LinkedInIcon fontSize="inherit" style={{fontSize:'30px',cursor:'pointer'}} />
        </div>
    </div>
    <h2 className={classes.name}>{props.team.name}</h2>
    <h3 className={classes.post}>{props.team.post}</h3>
    <p className={classes.email} >{props.team.email} </p>
    
</div>
    )

};