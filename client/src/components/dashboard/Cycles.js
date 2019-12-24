import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import circle from '../../images/circle.svg'
import yellowBike from '../../images/yellowBike.png'
import locSvg from '../../images/loc.svg'
import { connect } from "react-redux";
import { getCycles } from '../../actions/cycles'
const Cycles = ({ getCycles, cycles: { cycles } }) => {

    useEffect(() => {
        getCycles()
    }, [getCycles]);

    return (
        <React.Fragment>
            <div className="available">
                <div className="heading">Available cycles</div>

                <div className="search">
                    <input type="text" placeholder="Search location" />
                    <div className="icon">
                        <img src={locSvg} alt="" />
                    </div>
                </div>

                <div className="cycles">
                    {
                        cycles.map((cycle, index) => {
                            return <div className="cycle" key={index}>
                                <div className="img"><img src={yellowBike} alt="" /></div>
                                <div className="cycle__content">
                                    <h1 className="headign">{cycle.company}| {cycle.model}</h1>
                                    <div className="desc">
                                        <div className="text">Gears - {cycle.gears}</div>
                                        <div className="text">Color - {cycle.colour}</div>
                                    </div>
                                    <div className="price">
                                        <div className="back">
                                            <img src={circle} alt="" className="circle" />
                                            <img src={circle} alt="" className="circle" />
                                            <img src={circle} alt="" className="circle" />
                                            <img src={circle} alt="" className="circle" />
                                        </div>
                                        Rs. 15/Hr
                                </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>

        </React.Fragment>
    )
}

Cycles.propTypes = {
    getCycles: PropTypes.func.isRequired,
    cycles: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    cycles: state.cycles
})

export default connect(mapStateToProps, { getCycles })(Cycles)
