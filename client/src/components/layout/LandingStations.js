import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import locationIcon from '../../images/loc.svg'

const LandingStations = ({ stations }) => {
    return (
        <section className="section__stations">
            <div className="heading__shadowed">
                Stations
           </div>
            <div class="search">
                <input type="text" class="bar" placeholder="Search City" />
                <div class="location__icon">
                    <img src={locationIcon} alt="location icon" />
                </div>
            </div>

            <div className="address__container">
                {
                    stations.map(station => {
                        return <React.Fragment>
                            <div className="address">
                                <div className="top">Location Code : {station.code}</div>
                                <div className="bottom">
                                    <p>{station.address}</p>
                                    <p>{station.city} ({station.pin})</p>
                                    <p>{station.state}</p>
                                    <p>{station.country}</p>
                                </div>
                            </div>
                        </React.Fragment>
                    })
                }

            </div>

        </section>
    )
}

LandingStations.propTypes = {
    stations: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    stations: state.station.stations
})
export default connect(mapStateToProps, {})(LandingStations)
