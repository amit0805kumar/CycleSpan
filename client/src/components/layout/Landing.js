import React, { Fragment, useEffect } from 'react'
import yellowBikepng from '../../images/yellowBike.png'
import cycleSpanLogo from '../../images/cycleSpanLogo.svg'
import one from '../../images/one.svg'
import two from '../../images/two.svg'
import three from '../../images/three.svg'
import wheel from '../../images/wheel.svg'

import { Link } from 'react-router-dom'

import BgPattern from './BgPattern'
import LandingCycles from "./LandingCycles"
import LandingStations from "./LandingStations"
import Footer from "./Footer"
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCycles } from "../../actions/cycles"
import { getAllStations } from '../../actions/station'

const Landing = ({ getCycles, getAllStations }) => {
    useEffect(() => {
        getCycles()
        getAllStations()
    }, [getCycles, getAllStations]);

    return <Fragment>
        <BgPattern />
        <header className="header" >

            <div className="sidebar">
                <div className="logo">
                    <img src={cycleSpanLogo} alt="" />
                </div>
                <div className="social">
                    <div className="links">
                        <Link to="/" className="link"></Link>
                        <Link to="/" className="link"></Link>
                        <Link to="/" className="link"></Link>
                    </div>
                </div>
            </div>
            <div className="header-bg"></div>
            <div className="main">
                <div className="content">
                    <h1 className="test">CYCLE<span>SPAN</span></h1>
                    <div className="sub">Ride In Style</div>
                    <Link to="/dashboard">
<div className="text" >Book a ride</div>
                        <img src={wheel} alt="Wheel" />
                    </Link>
                </div>
                <div className="image">
                    <img src={yellowBikepng} alt=""></img>
                    <div className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, et nihil.
                    Repellendus, laborum modi.</div>
                </div>
            </div>
        </header>

        <section className="section__steps">
            <div className="heading__book">How to book ?</div>
            <div className="steps">
                <div className="step step__left">
                    <img src={one} alt="" className="count" />
                    <div className="content">
                        <div className="text">
                            Get an OTP from your account
                    </div>
                        <p>SVG</p>

                    </div>
                    <hr className="dashed" />
                </div>
                <div className="step step__right">
                    <img src={two} alt="" className="count" />
                    <div className="content">
                        <div className="text">
                            Enter that OTP on the screen of
                                      any bicycle stant at your nearest
                                      station
                    </div>
                        <p>SVG</p>

                    </div>
                    <hr className="dashed-opp" />
                </div>
                <div className="step step__left">
                    <img src={three} alt="" className="count" />
                    <div className="content">
                        <div className="text">
                            A rideId will given to you.
                            Save that id and submit it at the
                            end of your ride on the station
                    </div>
                        <p>SVG</p>

                    </div>
                    <hr className="dashed" />
                </div>
                <div className="step step__right step__final">
                    <div className="content">
                        <div className="text">
                            Enjoy your ride
                    </div>
                        <p>SVG</p>

                    </div>
                </div>
            </div>
        </section>
        <LandingCycles />
        <LandingStations />
        <Footer />
    </Fragment >


}

Landing.propTypes = {
    getCycles: PropTypes.func.isRequired,
    getAllStations: PropTypes.func.isRequired
}

export default connect(null, { getCycles, getAllStations })(Landing)
