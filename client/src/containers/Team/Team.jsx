import React from 'react'
import './Team.scss'
import Members from './Members/Members'
import { useEffect,useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';


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
            <div className="team_head" >
                E-Cell Team
            </div>
            <div className="row container m-auto" style={{marginRight:'0',height:'auto'}}>
                {team.length?
                team.map(item=>(
                <div className="col-4 mb-4">
                   <Members team={item} />
                </div>
                ))
                :<div className="spin">
                <CircularProgress/>
              </div>}

            </div>
        </React.Fragment>
    )
}
