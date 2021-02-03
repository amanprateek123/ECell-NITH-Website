import React, { useEffect } from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListSubheader,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";

import CategoryIcon from "@material-ui/icons/Category";
import FileIcon from "@material-ui/icons/FileCopy";
import Gallery from "./Gallery/Gallery";
import Team from "./Team/Team";
import Initiatives from "./Initiative/Initiative";
import Eg from "./Event-Gallery/Eg";

import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import Authority from "./Authority/Authority";
import Partners from "./Partners/Partners";
import Blogs from "./Blogs/Blogs";
import News from "./News/News";

export default function Admin(props) {
  const [tab, setTab] = useState("init");
  const [page, setPage] = useState(1);
  const [value, setValue] = useState("");
  const handle = (e) => {
    setValue(e.target.value);
  };
  const condition = () => {
    if (value === "Scam@2021") {
      setPage(2);
    } else {
      setPage(3);
    }
  };

  return (
    <div
      className="container-fluid page admin pt-3"
      style={{ backgroundColor: "#f3f3f3" }}
    >
      {page === 1 ? (
        <div
          style={{
            display: "flex",
            height: "30em",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              condition();
            }}
          >
            <h6> Enter Password: </h6>
            <input
              type="password"
              style={{ width: "15em" }}
              onChange={handle}
              placeholder="Enter Password"
            />
          </form>
        </div>
      ) : page === 2 ? (
        <div className="container main-container pt-5">
          <div className="row">
            <div className="col-md-4">
              <div className="side-nav">
                <div className="mb-4">
                  <Card>
                    <CardContent>
                      <div className="row align-items-center">
                        <div className="col-4">
                          <Avatar className="dp" />
                        </div>
                        <div className="col">
                          <div>
                            <i>Hello,</i>
                          </div>
                          <h5>Admin</h5>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mb-3">
                  <Card>
                    <CardContent>
                      <List
                        component="nav"
                        aria-label="main"
                        subheader={
                          <ListSubheader
                            component="div"
                            id="nested-list-subheader"
                          >
                            Add to Database:
                          </ListSubheader>
                        }
                      >
                        <ListItem
                          button
                          selected={tab == "gallery"}
                          onClick={() => setTab("gallery")}
                        >
                          <ListItemIcon>
                            <FileIcon />
                          </ListItemIcon>
                          <ListItemText id="tab" primary="Gallery" />
                        </ListItem>
                        <ListItem
                          button
                          selected={tab == "blogs"}
                          onClick={() => setTab("blogs")}
                        >
                          <ListItemIcon>
                            <FileIcon />
                          </ListItemIcon>
                          <ListItemText id="tab" primary="Blogs" />
                        </ListItem>
                        <ListItem
                          button
                          selected={tab == "teams"}
                          onClick={() => setTab("teams")}
                        >
                          <ListItemIcon>
                            <FileIcon />
                          </ListItemIcon>
                          <ListItemText id="tab" primary="Team" />
                        </ListItem>
                        <ListItem
                          button
                          selected={tab == "init"}
                          onClick={() => setTab("init")}
                        >
                          <ListItemIcon>
                            <FileIcon />
                          </ListItemIcon>
                          <ListItemText id="tab" primary="Initiatives" />
                        </ListItem>
                        <ListItem
                          button
                          selected={tab == "auth"}
                          onClick={() => setTab("auth")}
                        >
                          <ListItemIcon>
                            <FileIcon />
                          </ListItemIcon>
                          <ListItemText id="tab" primary="Authority" />
                        </ListItem>
                        <ListItem
                          button
                          selected={tab == "partner"}
                          onClick={() => setTab("partner")}
                        >
                          <ListItemIcon>
                            <FileIcon />
                          </ListItemIcon>
                          <ListItemText id="tab" primary="Partners" />
                        </ListItem>
                        <ListItem
                          button
                          selected={tab == "news"}
                          onClick={() => setTab("news")}
                        >
                          <ListItemIcon>
                            <FileIcon />
                          </ListItemIcon>
                          <ListItemText id="tab" primary="News" />
                        </ListItem>
                        <ListItem
                          button
                          selected={tab == "eg"}
                          onClick={() => setTab("eg")}
                        >
                          <ListItemIcon>
                            <FileIcon />
                          </ListItemIcon>
                          <ListItemText id="tab" primary="Event Gallery" />
                        </ListItem>
                      </List>

                      <List
                        component="nav"
                        aria-label="main"
                        subheader={
                          <ListSubheader
                            component="div"
                            id="nested-list-subheader"
                          >
                            Edit
                          </ListSubheader>
                        }
                      >
                        <ListItem
                          button
                          selected={tab == "editGallery"}
                          onClick={() => setTab("editGallery")}
                        >
                          <ListItemIcon>
                            <CategoryIcon />
                          </ListItemIcon>
                          <ListItemText id="tab" primary="Edit Gallery" />
                        </ListItem>
                        <ListItem
                          button
                          selected={tab == "editTeam"}
                          onClick={() => setTab("editTeam")}
                        >
                          <ListItemIcon>
                            <CategoryIcon />
                          </ListItemIcon>
                          <ListItemText id="tab" primary="Edit Team" />
                        </ListItem>
                      </List>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="content">
                {tab == "teams" ? (
                  <Team />
                ) : tab == "gallery" ? (
                  <Gallery />
                ) : tab === "init" ? (
                  <Initiatives />
                ) : tab === "auth" ? (
                  <Authority />
                ) : tab === "partner" ? (
                  <Partners />
                ) : tab === "blogs" ? (
                  <Blogs />
                ) : tab === "news" ? (
                  <News />
                ) : tab === "eg" ? (
                  <Eg />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            color: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "30em",
          }}
        >
          <p>
            {" "}
            Sorry, Wrong Password{" "}
            <span
              style={{ color: "skyblue", cursor: "pointer" }}
              onClick={() => setPage(1)}
            >
              Try Again
            </span>{" "}
          </p>
        </div>
      )}
    </div>
  );
}
