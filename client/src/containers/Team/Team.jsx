import React from "react";
import "./Team.scss";
import Members from "./Members/Members";
import { useEffect, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { NavLink } from "react-router-dom";
import gif from "../../loading.gif";

export default function Team() {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch("/api/api/team")
      .then((res) => res.json())
      .then((res) => {
        setTeam(res);
      });
  }, []);
  const [tab, setTab] = useState();
  const [array, setArray] = useState([]);
  const handler = (k, y) => {
    setTab(k);
    let arr = team.filter((itm) => itm.year === y);
    setArray(arr);
  };
  useEffect(() => {
    handler(0, "2020");
  }, [team]);

  return (
    <React.Fragment>
      <div className="teams">
        <h1 className="team_head">E-Cell Team</h1>
        <div className="alumni">
          <div className="year">
            <div
              onClick={() => handler(0, "2020")}
              className={tab === 0 ? "tab" : ""}
            >
              Current Year
            </div>
            <div
              onClick={() => handler(1, "2019")}
              className={tab === 1 ? "tab" : ""}
            >
              2019-2020
            </div>
            <div
              onClick={() => handler(2, "2018")}
              className={tab === 2 ? "tab" : ""}
            >
              2018-2019
            </div>
          </div>
          {team.length > 0 ? (
            array.length > 0 ? (
              <div className="list">
                {array.map((item) => (
                  <Members team={item} key={item._id} />
                ))}
              </div>
            ) : (
              <div className="no_info">
                <h1>No information available</h1>
              </div>
            )
          ) : (
            <div className="spin">
              <img src={gif} />
            </div>
          )}
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
  );
}
