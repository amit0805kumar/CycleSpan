import React from 'react'
// import PropTypes from 'prop-types'

const Cycles = ({ cycles }) => {
    return (
        <div class="all__cycles table__container">
            <div class="heading">
                <div class="text">All cycles</div>
                <div class="btn" id="addCycles">
                    <div class="icon">+</div>
                    <div class="content">Add</div>
                </div>
            </div>
            <div class="table">
                <ul class="row head allCycles">
                    <li class="num"></li>
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
                        return <ul class="row content allCycles" key={index}>
                            <li class="num">{index + 1}.</li>
                            <li>{cycle.model}</li>
                            <li>{cycle.company}</li>
                            <li class="cycleDetails">{cycle.details}</li>
                            <li>{cycle.colour}</li>
                            <li>{cycle.gender}</li>
                            <li>{cycle.gears}</li>
                            <li>15/hr</li>
                            <li>Img...</li>
                            <li><span class="del">Delete</span></li>
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
