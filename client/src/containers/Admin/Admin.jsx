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
import Authority from './Authority/Authority';
import Partners from './Partners/Partners';
import Blogs from './Blogs/Blogs';

export default function Admin(props) {

    const [tab, setTab] = useState('auth');


    return (
        <div className="container-fluid page admin pt-3" style={{backgroundColor:'#f3f3f3'}} >
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
                                        <ListItem button selected={tab == 'blogs'} onClick={() => setTab('blogs')}>
                                            <ListItemIcon>
                                                <FileIcon />
                                            </ListItemIcon>
                                            <ListItemText id="tab" primary="Blogs" />
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
                                        <ListItem button selected={tab == 'auth'} onClick={() => setTab('auth')}>
                                        <ListItemIcon>
                                            <FileIcon />
                                        </ListItemIcon>
                                        <ListItemText id="tab" primary="Authority" />
                                    </ListItem>
                                    <ListItem button selected={tab == 'partner'} onClick={() => setTab('partner')}>
                                        <ListItemIcon>
                                            <FileIcon />
                                        </ListItemIcon>
                                            <ListItemText id="tab" primary="Partners"/>
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
                               <Initiatives/> :
                               tab==='auth'?
                               <Authority/>:
                               tab==='partner'?<Partners/>:
                               tab==='blogs'?<Blogs/>: null}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
