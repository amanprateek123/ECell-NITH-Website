import React from 'react'
import {useMutation} from 'react-query'
import { Paper, Button, Select, MenuItem, FormHelperText } from '@material-ui/core'
import { useState } from 'react'

export default function Authority() {
    let schema = {name:'',designation:'',description:''}
    const [auth,setAuth] = useState(schema)
    const handler = (e)=>{
        setAuth({...auth,[e.target.name]:e.target.value})
    }
    const [status,setStatus] = useState({})

    const postAuth = ()=>{
        const pic = document.getElementById('image').files
        var data = new FormData()
        data.append('auth',pic[0])
        data.append('auth',JSON.stringify(auth))
        return(
            fetch('/admin/auth',{
                method:'POST',
                body: data,
            }).then(res=>res.json()).then(res=>
                setStatus(res)
            ).catch(err => {
                console.log(err);
            })
        )
   }
    const [authority,meta] = useMutation(postAuth)

    return (
        <Paper>
             <h3 className="p-2" style={{textAlign:'center'}}>Authority</h3>
             <form encType="multipart/form-data" onSubmit={(e)=>{e.preventDefault();authority()}} >
             <div className="frm">
                <label>Name<span style={{color:'red'}} >*</span></label>
                <input type="text" name="name" required onChange={handler} />
             </div>
             <div className="frm">
                <label>Designation<span style={{color:'red'}} >*</span></label>
                <input type="text" name="designation" required onChange={handler} />
             </div>
             <div className="frm">
                <label>Description<span style={{color:'red'}} >*</span></label>
                <input type="text" name="description" required onChange={handler} />
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
