import React from 'react'
import {useMutation} from 'react-query'
import { Paper, Button, Select, MenuItem, FormHelperText } from '@material-ui/core'
import { useState } from 'react'

export default function Authority() {
    let schema = {title:'',sub:'',imageLink:'',description:''}
    const [blog,setblog] = useState(schema)
    const handler = (e)=>{
        setblog({...blog,[e.target.name]:e.target.value})
    }
    const [status,setStatus] = useState({})
    console.log(blog)

    const postBlogs = ()=>{
        return(
            fetch('/admin/blogs',{
                method:'POST',
                body: JSON.stringify(blog),
                headers: {
                    'Content-Type': 'application/json'
                  },
            }).then(res=>res.json()).then(res=>
                setStatus(res)
            ).catch(err => {
                console.log(err);
            })
        )
   }
    const [blogs,meta] = useMutation(postBlogs)

    return (
        <Paper>
             <h3 className="p-2" style={{textAlign:'center'}}>Blogs</h3>
             <form onSubmit={(e)=>{e.preventDefault();blogs()}} >
             <div className="frm">
                <label>Title<span style={{color:'red'}} >*</span></label>
                <input type="text" name="title" required onChange={handler} />
             </div>
             <div className="frm">
                <label>Sub-title<span style={{color:'red'}} >*</span></label>
                <input type="text" name="sub" required onChange={handler} />
             </div>
             <div className="frm">
                <label>Image Link<span style={{color:'red'}} >*</span></label>
                <input type="text" name="imageLink" required onChange={handler} />
             </div>
             <div className="frm">
                <label>Description<span style={{color:'red'}} >*</span></label>
                <input type="text" name="description" required onChange={handler} />
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
