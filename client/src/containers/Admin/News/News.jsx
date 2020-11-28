import React from 'react'
import {useMutation} from 'react-query'
import { Paper, Button, } from '@material-ui/core'
import { useState } from 'react'

export default function Partners() {
    let schema = {headline:'',link:'',img:''}
    const [news,setNews] = useState(schema)
    const handler = (e)=>{
        setNews({...news,[e.target.name]:e.target.value})
    }
    const [status,setStatus] = useState({})
    console.log(news)

    const postNews = ()=>{
        return(
            fetch('/admin/news',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(news),
            }).then(res=>res.json()).then(res=>
                setStatus(res)
            ).catch(err => {
                console.log(err);
            })
        )
   }
   const [headlines,meta] = useMutation(postNews)
    return (
        <Paper>
             <h3 className="p-2" style={{textAlign:'center'}}>NEWS</h3>
             <form encType="multipart/form-data" onSubmit={(e)=>{e.preventDefault();headlines()}} >
             <div className="frm">
                <label>Headline<span style={{color:'red'}} >*</span></label>
                <input type="text" name="headline" required onChange={handler} />
             </div>
             <div className="frm">
                <label>Headline Link<span style={{color:'red'}} >*</span></label>
                <input type="text" name="link" required onChange={handler} />
             </div>
             <div className="frm">
                <label>Poster Image <span style={{color:'red'}} >*</span></label>
                <input type="text" name="img" onChange={handler} />
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
