import React from 'react'
import {useMutation} from 'react-query'
import { Paper, Button, Select, MenuItem, FormHelperText } from '@material-ui/core'
import { useState } from 'react'
import './Team.scss'

export default function Team() {
    let schema = {name:'',phone:'',email:'',post:'',linkedIn:''}
    const [team,setTeam] = useState(schema)
    const handler = (e)=>{
        setTeam({...team,[e.target.name]:e.target.value})
    }
    const [status,setStatus] = useState({})

   const postTeam = ()=>{
        const pic = document.getElementById('image').files
        var data = new FormData()
        data.append('teamImg',pic[0])
        data.append('team',JSON.stringify(team))
        return(
            fetch('/admin/team',{
                method:'POST',
                body: data
            }).then(res=>res.json()).then(res=>
                setStatus(res)
            ).catch(err => {
                console.log(err);
            })
        )
   }

   const [presentTeam,meta] = useMutation(postTeam)

    return (
        <Paper>
             <h3 className="p-2" style={{textAlign:'center'}}>Team</h3>
             <form encType="multipart/form-data" onSubmit={(e)=>{e.preventDefault();presentTeam()}} >
             <div className="frm">
                <label>Name<span style={{color:'red'}} >*</span></label>
                <input type="text" name="name" required onChange={handler} />
             </div>
             <div className="frm">
                <label>Email<span style={{color:'red'}} >*</span></label>
                <input type="text" name="email" required onChange={handler} />
             </div>
             <div className="frm">
                <label>Phone No.<span style={{color:'red'}} >*</span></label>
                <input type="text" name="phone" required onChange={handler} />
             </div>
             <div className="frm">
                <label>Post<span style={{color:'red'}} >*</span></label>
                <input type="text" name="post" required onChange={handler} />
             </div>
             <div className="frm">
                <label>Linkdin Id<span style={{color:'red'}} >*</span></label>
                <input type="text" name="linkedIn" required onChange={handler} />
             </div>
             <div className="frm">
                <label>Image<span style={{color:'red'}} >*</span></label>
                <input type="file" id="image" required />
             </div>
             <div style={{display:'flex',justifyContent:'center',marginBottom:'10px'}} >
                 <Button type="submit" style={{marginBottom:'10px'}} variant="contained" color="primary" >Submit</Button>
             </div>
            
             </form>
             {status.status===200?
             <div style={{color:'green',textAlign:'center'}} >
                 {status.msg}
             </div>:status.status===404?
             <div style={{color:'red',textAlign:'center'}} >
                 {status.error}
             </div>:null}
             
        </Paper>
    )
}
