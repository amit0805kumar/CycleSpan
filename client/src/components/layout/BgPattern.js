import React, { Fragment } from 'react'
import circle from '../../images/circle.svg'
import helmet from '../../images/helmet.svg'
import googles from '../../images/googles.svg'
import save from '../../images/save.svg'
import sayno from '../../images/sayno.svg'
import zigzag from '../../images/zigzag.svg'


const BgPattern = () => {
    return (
        <div className="background__pattern">
            <img src={circle} alt="" className="circle" />
            <img src={helmet} alt="" className="helmet" />
            <img src={googles} alt="" className="googles" />
            <img src={save} alt="" className="save" />
            <img src={sayno} alt="" className="sayno" />
            <img src={zigzag} alt="" className="zigzag" />
        </div>
    )
}

export default BgPattern
