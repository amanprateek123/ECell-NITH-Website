import React from 'react';
import classes from './Members.module.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

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
    const linkedin = props.team.LinkedinId

    return(
    <div className={classes.container1}>
    <div className={classes.pics}  style={{backgroundImage:`url(${props.team.image})`}} >
        <div className={classes.social} >
             {/* <a href='/' target="blank" ><FacebookIcon fontSize="inherit" style={{fontSize:'30px',cursor:'pointer',color:'white'}} /></a> */}
             <a href={linkedin} target="blank" ><LinkedInIcon fontSize="inherit" style={{fontSize:'30px',cursor:'pointer',color:'white'}} /></a>
             <a href={'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to='+`${props.team.email}`} target="blank" ><EmailIcon fontSize="inherit" style={{fontSize:'30px',cursor:'pointer',color:'white'}} /></a>
        </div>
    </div>
    <h2 className={classes.name}>{props.team.name}</h2>
    <h3 className={classes.post}>{props.team.post}</h3>
    
</div>
    )

};