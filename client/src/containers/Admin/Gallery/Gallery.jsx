import React from 'react'

import { Paper, Button, Select, MenuItem, FormHelperText } from '@material-ui/core'

import {useMutation} from 'react-query'

export default function Gallery() {
    const[file,setFile]= React.useState(null)
    const handler = (e)=>{
        setFile(e.target.value)
    }
 
    
    const postGallery = ()=>{
        console.log('hello')
        var input = document.querySelector('#img');
        var data = new FormData()
        data.append('img',file)
        console.log(data)
        return (
            fetch('/admin/gallery',{
                headers:{
                    'Content-Type': 'application/json'
                },
                method:'POST',
                body: JSON.stringify(data)
            }).then(res=>res.json()).then(res=>
                console.log(res)
            )
        )
        
    }

    const [gallery,meta] = useMutation(postGallery)
    return (
        <Paper>
            <h3 className="p-2" style={{textAlign:'center'}}>Gallery</h3>
            <form style={{textAlign:'center'}} encType="multipart/form-data" onSubmit={(e)=>{e.preventDefault();gallery();}} >
                <label htmlFor="img" className="m-3">Add Image:</label>
                <input type="file" id="img" name="img" onChange={handler} />
                <Button  type="submit" color="primary" variant="contained" >Submit</Button>
            </form>
        </Paper>
    )
}
