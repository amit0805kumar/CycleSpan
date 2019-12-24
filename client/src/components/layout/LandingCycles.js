import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import yellowBike from '../../images/yellowBike.png'

const LandingCycles = ({ cycles: { cycles } }) => {
    return (
        <React.Fragment>

            <section className="section__cycles">
                <div className="heading__shadowed">
                    Cycles
                </div>

                <div className="cycle__slider">
                    <section className="slider">
                        {
                            cycles.map((cycle, index) => {
                                return <div className="card" key={index}>
                                    <div className="image">
                                        <img src={yellowBike} alt="" />
                                    </div>
                                    <div className="content">

                                        <h1>{cycle.model}</h1>
                                        <p>{cycle.details}</p>
                                        <div className="features">
                                            <div className="feature">
                                                <div className="name">Company</div>
                                                <div className="value">{cycle.company}</div>
                                            </div>
                                            <div className="feature">
                                                <div className="name">Model</div>
                                                <div className="value">{cycle.model}</div>
                                            </div>
                                            <div className="feature">
                                                <div className="name">Gender</div>
                                                <div className="value">{cycle.gender}</div>
                                            </div>
                                            <div className="feature">
                                                <div className="name">Gears</div>
                                                <div className="value">{cycle.gears}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            })
                        }

                    </section>

                </div>
            </section>
        </React.Fragment>
    )
}

LandingCycles.propTypes = {
    cycles: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    cycles: state.cycles
})
export default connect(mapStateToProps, {})(LandingCycles)
