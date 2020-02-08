import React from 'react'
// import PropTypes from 'prop-types'

const Availables = ({ availables }) => {
    return (
        <div class="all__availables table__container">
            <div class="heading">
                <div class="text">All Available cycles</div>
                <div class="search"><input type="text" placeholder="Search by ModelNo/LocationCode" />

                </div>
                <div class="btn" id="addAvailable">
                    <div class="icon">+</div>
                    <div class="content">Add</div>
                </div>
            </div>
            <div class="table">
                <ul class="row head allAvailables">
                    <li class="num"></li>
                    <li>Model No.</li>
                    <li>Locaton</li>
                    <li>Count</li>
                    <li>Dec</li>
                    <li>Inc</li>
                </ul>
                {
                    availables ? availables.map((available, index) => {
                        if (available.available > 0) return <ul class="row content allAvailables">
                            <li class="num">{index + 1}.</li>
                            <li>{available.cycleModel}</li>
                            <li>{available.locationCode}</li>
                            <li>{available.available}</li>
                            <li><span class="dec">-</span></li>
                            <li><span class="inc">+</span></li>
                        </ul>
                    }) : <React.Fragment></React.Fragment>
                }
            </div>
        </div>
    )
}

// Availables.propTypes = {

// }

export default Availables
