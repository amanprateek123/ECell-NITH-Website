import React from 'react'
import Vision from '../../components/Home/Vision/Vision'
import Highlight from '../../components/Home/Highlights/High'
import GIT from '../../components/Home/GetInTouch/GIT'
import Footer from '../Footer/Footer'
import Main from '../../components/Home/Main/Main'
import Authority from '../../components/Home/Authority/Authority'
import Gallery from '../../components/Home/Gallery/Gallery'

export default function Home() {
    return (
        <div>
          <Main/>
          <Vision/>
          <Highlight/>
          <Authority/>
          <Gallery/>
          <GIT/>
          <Footer/>
        </div>
    )
}
