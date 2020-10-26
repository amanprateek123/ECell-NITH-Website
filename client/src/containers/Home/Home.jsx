import React from 'react'
import Navbar from '../Navbar/Nav'
import Vision from './Vision/Vision'
import Highlight from './Highlights/High'
import GIT from './GetInTouch/GIT'
import Footer from '../Footer/Footer'
import Main from './Main/Main'

export default function Home() {
    return (
        <div>
          <Main/>
          <Vision/>
          <Highlight/>
          <GIT/>
          <Footer/>
        </div>
    )
}
