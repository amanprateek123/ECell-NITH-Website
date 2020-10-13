import React from 'react'
import Navbar from '../Navbar/Nav'
import Vision from './Vision/Vision'
import Highlight from './Highlights/High'
import GIT from './GetInTouch/GIT'
import Footer from '../Footer/Footer'

export default function Home() {
    return (
        <div>
          <Navbar/>
          <Vision/>
          <Highlight/>
          <GIT/>
          <Footer/>
        </div>
    )
}
