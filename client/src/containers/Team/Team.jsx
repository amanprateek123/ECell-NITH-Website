import React from 'react'
import './Team.scss'
import Members from './Members/Members'
import { useEffect,useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import {NavLink} from 'react-router-dom'


export default function Team() {
    const [team,setTeam] = useState([])
    useEffect(()=>{
        fetch('/team').then(res=>res.json()).then(res=>{
            setTeam(res)
          })
    },[])
    console.log(team)
    return (
        <React.Fragment>
        {team.length  ?  <div>
            <div className="team_head" >
                E-Cell Team
            </div>
            <div className="m-2" style={{height:'2em'}} >
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

            </div>
            </div>:<div className="spin">
                <CircularProgress/>
              </div>}
        </React.Fragment>
    )
}
