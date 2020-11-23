import React from 'react'
import './Blogs.scss'
import Card from './Card/Card'

export default function Blogs() {
    return (
        <div className="blogs" >
          <p className='head2'>Blogs</p>
          <div className="list_blog" >
               <Card/>
               <Card/>
               <Card/>
               <Card/>
          </div>
        </div>
    )
}
