import React from 'react'
import './Section.css'

function Section({Icon, title, selected, color}) {
    return (
        <div className={`section ${selected && "section--selected"}` } style={{ borderBottom: `3px solid ${color}`, color: `${selected && color}`}}>
            <Icon />
            <h4>{title}</h4>

        </div>
    )
}

export default Section
