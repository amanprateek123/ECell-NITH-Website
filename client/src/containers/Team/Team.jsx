import React from 'react'
import './Team.scss'
import Members from './Members/Members'
import { useEffect,useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import {NavLink} from 'react-router-dom'


export default function Team() {
    const [team,setTeam] = useState([])
    const [tab,setTab] = useState(0)


    useEffect(()=>{
        fetch('/team').then(res=>res.json()).then(res=>{
            setTeam(res)
          })
    },[])
    console.log(team)
    return (
        <React.Fragment>
        <div className="teams" >
            <div className="team_head" >
                E-Cell Team
            </div>
            <div className="alumni" >
               <div className="year" >
                   <div onClick={()=>setTab(0)} className={tab===0?"tab":""} >
                      Current Year
                   </div>
                   <div onClick={()=>setTab(1)} className={tab===1?"tab":""} >
                      1999-2000
                   </div>
                   <div onClick={()=>setTab(2)} className={tab===2?"tab":""} >
                      1999-2000
                   </div>
                   <div onClick={()=>setTab(3)} className={tab===3?"tab":""} >
                      1999-2000
                   </div>
                   <div onClick={()=>setTab(4)} className={tab===4?"tab":""} >
                      1999-2000
                   </div>
                   <div onClick={()=>setTab(5)} className={tab===5?"tab":""} >
                      1999-2000
                   </div>
               </div>
              {team.length>0? <div className="list">
                   
               </div>:<div className="spin">
               <CircularProgress/>
             </div>}
                
            </div>
            {/*<div className="m-2" style={{height:'2em'}} >
                <NavLink to='/alumni' style={{float:'right',margin:'0 1em',color:'skyblue',fontWeight:'bold',textDecoration:'none'}} >View Alumni Team</NavLink>
            </div>
            <div className="row container m-auto" style={{marginRight:'0',height:'auto'}}>
                {
                team.map(item=>(
                <div className="col-md-4 mb-4">
                   <Members team={item} />
                </div>
                ))
                }

            </div>*/}
            </div>
        </React.Fragment>
    )
}
