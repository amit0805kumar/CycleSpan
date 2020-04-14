import React from 'react'
// import PropTypes from 'prop-types'

const Availables = ({ availables, addAvailable }) => {
    return (
        <div className="all__availables table__container">
            <div className="heading">
                <div className="text">All Available cycles</div>
                <div className="search"><input type="text" placeholder="Search by ModelNo/LocationCode" />

                </div>
                <div className="btn" id="addAvailable" onClick={()=>addAvailable(3)}>
                    <div className="icon">+</div>
                    <div className="content">Add</div>
                </div>
            </div>
            <div className="table">
                <ul className="row head allAvailables">
                    <li className="num"></li>
                    <li>Model No.</li>
                    <li>Locaton</li>
                    <li>Count</li>
                    <li>Dec</li>
                    <li>Inc</li>
                </ul>
                {
                    availables ? availables.map((available, index) => {
                        if (available.available > 0) return <ul className="row content allAvailables" key={index}>
                            <li className="num">{index + 1}.</li>
                            <li>{available.cycleModel}</li>
                            <li>{available.locationCode}</li>
                            <li>{available.available}</li>
                            <li><span className="dec">-</span></li>
                            <li><span className="inc">+</span></li>
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
