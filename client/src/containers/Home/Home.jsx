import React from 'react'
import Vision from '../../components/Home/Vision/Vision'
import Highlight from '../../components/Home/Highlights/High'
import GIT from '../../components/Home/GetInTouch/GIT'
import Footer from '../Footer/Footer'
import Main from '../../components/Home/Main/Main'
import Authority from '../../components/Home/Authority/Authority'
import Gallery from '../../components/Home/Gallery/Gallery'
import './Home.scss'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import News from '../../components/Home/News/News'
import { useEffect } from 'react'
import gif from '../../ecell.gif'
import Accompolishments from '../../components/Home/Accomplishment/Accomplishments'

export default function Home(props) {
  const [cls,setCls] = React.useState('none')
  const listenScrollEvent = e => {
    if (window.scrollY > 250) {
      setCls("nav_btn")
    } else {
        setCls("none")
    }
  }
  React.useEffect(()=>{
    window.addEventListener('scroll',listenScrollEvent)
  },[])
  function hello() {
    window.scroll({
      top: 0,
      left: 0, 
      behavior: 'smooth',
    });
  }
    return (
        <React.Fragment>
          {props.show?<div className="gif" ><img src={gif} /></div>:
          <div>
          <div className={cls} onClick={hello} > <ArrowUpwardIcon style={{color:'black'}}  /> </div>
          <Main/>
          <Vision/>
          <News/>
          <Highlight/> 
          {/*<Accompolishments/>*/}
          <Authority/>
          <Gallery/>
          <GIT/>
          <Footer/>
        </div>}
        </React.Fragment>
    )
}
