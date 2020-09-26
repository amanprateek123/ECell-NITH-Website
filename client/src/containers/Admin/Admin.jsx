import React from 'react'
import { useState } from 'react';
import {
    Card, CardContent, Avatar,
    List, ListItem, ListSubheader, ListItemIcon, ListItemText, Divider,

}
    from '@material-ui/core'

import CategoryIcon from '@material-ui/icons/Category';
import FileIcon from '@material-ui/icons/FileCopy';
import Gallery from './Gallery/Gallery'
import Team from './Team/Team'
import Initiatives from './Initiative/Initiative'

import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

export default function Admin(props) {

    const [tab, setTab] = useState('gallery');


    return (
        <div className="container-fluid page admin" style={{backgroundColor:'#f3f3f3'}} >
        <div className="container main-container pt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="side-nav">
                        <div className="mb-4">
                            <Card>
                                <CardContent>
                                    <div className="row align-items-center">
                                        <div className="col-4">
                                            <Avatar className="dp"  />
                                        </div>
                                        <div className="col">
                                            <div><i>Hello,</i></div>
                                            <h5>Admin</h5>
                                        </div>
                                    </div>

                                </CardContent>
                            </Card>
                        </div>

                        <div className="mb-3">
                            <Card>
                                <CardContent>

                                    <List component="nav" aria-label="main"
                                        subheader={
                                            <ListSubheader component="div" id="nested-list-subheader">
                                                Add to Database:
                                        </ListSubheader>
                                        }
                                    >
                                        <ListItem button selected={tab == 'gallery'} onClick={() => setTab('gallery')}>
                                            <ListItemIcon>
                                                <FileIcon />
                                            </ListItemIcon>
                                            <ListItemText id="tab" primary="Gallery" />
                                        </ListItem>

                                        <ListItem button selected={tab == 'teams'} onClick={() => setTab('teams')}>
                                            <ListItemIcon>
                                                <FileIcon />
                                            </ListItemIcon>
                                            <ListItemText id="tab" primary="Team" />
                                        </ListItem>
                                        <ListItem button selected={tab == 'init'} onClick={() => setTab('init')}>
                                            <ListItemIcon>
                                                <FileIcon />
                                            </ListItemIcon>
                                            <ListItemText id="tab" primary="Initiatives" />
                                        </ListItem>

                                    </List>

                                    <List component="nav" aria-label="main"
                                        subheader={
                                            <ListSubheader component="div" id="nested-list-subheader">
                                                Edit
                                        </ListSubheader>
                                        }
                                    >
                                        <ListItem button selected={tab == 'editGallery'} onClick={() => setTab('editGallery')}>
                                            <ListItemIcon>
                                                <CategoryIcon />
                                            </ListItemIcon>
                                            <ListItemText id="tab" primary="Edit Gallery" />
                                        </ListItem>
                                        <ListItem button selected={tab == 'editTeam'} onClick={() => setTab('editTeam')}>
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
                        {tab == 'teams' ?
                            <Team/>
                            : tab == 'gallery' ?
                               <Gallery/>:
                               tab==='init'?
                               <Initiatives/> : null}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
