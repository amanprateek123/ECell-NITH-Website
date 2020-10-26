import React from 'react'
import './Events.scss'

export default function Events(props) {
    return (
        <div className="events" >
            {props.match.params.id}
        </div>
    )
}
