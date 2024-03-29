import React from 'react'
import {useMutation} from 'react-query'
import { Paper, Button, Select, MenuItem, FormHelperText } from '@material-ui/core'
import { useState } from 'react'

export default function Partners() {
    let schema = {imageURL:'',link:''}
    const [part,setPart] = useState(schema)
    const handler = (e)=>{
        setPart({...part,[e.target.name]:e.target.value})
    }
    const [status,setStatus] = useState({})

    const postPartner = ()=>{
        return(
            fetch('/admin/partner',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(part),
            }).then(res=>res.json()).then(res=>
                setStatus(res)
            ).catch(err => {
                console.log(err);
            })
        )
   }
   const [partner,meta] = useMutation(postPartner)
    return (
        <Paper>
             <h3 className="p-2" style={{textAlign:'center'}}>Partners</h3>
             <form encType="multipart/form-data" onSubmit={(e)=>{e.preventDefault();partner()}} >
             <div className="frm">
                <label>Image URL<span style={{color:'red'}} >*</span></label>
                <input type="text" name="imageURL" required onChange={handler} />
             </div>
             <div className="frm">
                <label>Partner Link<span style={{color:'red'}} >*</span></label>
                <input type="text" name="link" required onChange={handler} />
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
