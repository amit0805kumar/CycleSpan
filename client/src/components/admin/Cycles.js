import React from 'react'
// import PropTypes from 'prop-types'

const Cycles = ({ cycles }) => {
    return (
        <div className="all__cycles table__container">
            <div className="heading">
                <div className="text">All cycles</div>
                <div className="btn" id="addCycles">
                    <div className="icon">+</div>
                    <div className="content">Add</div>
                </div>
            </div>
            <div className="table">
                <ul className="row head allCycles">
                    <li className="num"></li>
                    <li>Model</li>
                    <li>Company</li>
                    <li>Details</li>
                    <li>Colour</li>
                    <li>Gender</li>
                    <li>Gears</li>
                    <li>Rate</li>
                    <li>Image</li>
                    <li>Delete</li>
                </ul>
                {
                    cycles ? cycles.map((cycle, index) => {
                        return <ul className="row content allCycles" key={index}>
                            <li className="num">{index + 1}.</li>
                            <li>{cycle.model}</li>
                            <li>{cycle.company}</li>
                            <li className="cycleDetails">{cycle.details}</li>
                            <li>{cycle.colour}</li>
                            <li>{cycle.gender}</li>
                            <li>{cycle.gears}</li>
                            <li>15/hr</li>
                            <li>Img...</li>
                            <li><span className="del">Delete</span></li>
                        </ul>
                    }) : <React.Fragment></React.Fragment>

                }

            </div>
        </div>
    )
}

// Cycles.propTypes = {

// }

export default Cycles
