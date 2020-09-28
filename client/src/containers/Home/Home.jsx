import React from 'react'
import Navbar from '../Navbar/Nav'
import Vision from './Vision/Vision'
import Highlight from './Highlights/High'

export default function Home() {
    return (
        <div>
          <Navbar/>
          <Vision/>
          <Highlight/>
        </div>
    )
}
