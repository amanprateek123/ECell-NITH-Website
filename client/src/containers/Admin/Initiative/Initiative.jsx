import React from 'react'
import {useMutation} from 'react-query'
import { Paper, Button, Select, MenuItem, FormHelperText } from '@material-ui/core'
import { useState } from 'react'
import '../Team/Team.scss';

export default function Team() {
    let schema = {name:'',sub:'',sponsor:'',date:'',description:''}
    const [init,setInit] = useState(schema)
    const handler = (e)=>{
        setInit({...init,[e.target.name]:e.target.value})
    }
    const [status,setStatus] = useState({})

   const postEvent = ()=>{
        const pic = document.getElementById('image').files
        var data = new FormData()
        data.append('eventImg',pic[0])
        data.append('event',JSON.stringify(init))
        return(
            fetch('/admin/initiative',{
                method:'POST',
                body: data
            }).then(res=>res.json()).then(res=>
                setStatus(res)
            ).catch(err => {
                console.log(err);
            })
        )
   }

   const [presentEvent,meta] = useMutation(postEvent)

    return (
        <Paper>
             <h3 className="p-2" style={{textAlign:'center'}}>Initiatives</h3>
             <form encType="multipart/form-data" onSubmit={(e)=>{e.preventDefault();presentEvent()}} >
             <div className="frm">
                <label>Event Name<span style={{color:'red'}} >*</span></label>
                <input type="text" name="name" required onChange={handler} />
             </div>
             <div className="frm">
                <label>Sub-title<span style={{color:'red'}} >*</span></label>
                <input type="text" name="sub" required onChange={handler} />
             </div>
             <div className="frm">
                <label>Sponsors<span style={{color:'red'}} >*</span></label>
                <input type="text" name="sponsor" required onChange={handler} />
             </div>
             <div className="frm">
                <label>Date<span style={{color:'red'}} >*</span></label>
                <input type="text" name="date" required onChange={handler} />
             </div>
             <div className="frm">
                <label>Description<span style={{color:'red'}} >*</span></label>
                <input type="text" name="description" required onChange={handler} />
             </div>
             <div className="frm">
                <label> Event Image<span style={{color:'red'}} >*</span></label>
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
