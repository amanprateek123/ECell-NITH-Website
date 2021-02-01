import React,{useEffect,useState} from 'react'
import './Blogs.scss'
import Card from './Card/Card'

export default function Blogs() {
    const [blog,setBlog] = useState([])

    useEffect(()=>{
      fetch('/api/blogs').then(res=>res.json()).then(res=>{
        setBlog(res)
      })
    },[])

    return (
        <div className="blogs" >
          <h1 className='head2'>Blogs</h1>
          <div className="list_blog">
               {blog.length>0?
                  blog.map(data=>(
                    <Card data={data} key={data._id} />
                  ))
                :null}
          </div>
        </div>
    )
}
