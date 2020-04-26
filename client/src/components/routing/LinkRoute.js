import React from 'react'
import {Link} from 'react-router-dom'

function LinkRoute({to,title}) {
    return (
    <Link to={to} className="link">{title}</Link>
    )
}

export default LinkRoute
