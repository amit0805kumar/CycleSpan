import React, { Fragment, useRef } from 'react'
import yellowBikepng from '../../images/yellowBike.png'
import cycleSpanLogo from '../../images/cycleSpanLogo.svg'
import one from '../../images/one.svg'
import two from '../../images/two.svg'
import three from '../../images/three.svg'
// import dotBorder from '../../images/dotBorder.svg'
import $ from 'jquery'
import { findDOMNode } from 'react-dom'



const Landing = () => {
    let slider = React.createRef();

    const handleToggle = () => {
        $(slider).hide()
        console.log(slider)
    }
    return <Fragment>
        <header className="header" >

            <div className="sidebar" ref={slider}>
                <div className="logo">
                    <img src={cycleSpanLogo} alt="" />
                </div>
                <div className="social">
                    <div className="links">
                        <a href="#" className="link"></a>
                        <a href="#" className="link"></a>
                        <a href="#" className="link"></a>
                    </div>
                </div>
            </div>
            <div className="header-bg"></div>
            <div className="main">
                <div className="content">
                    <h1 className="test" onClick={handleToggle}>CYCLE<span>SPAN</span></h1>
                    <div className="sub">Ride In Style</div>
                    <a href="./dashboard.html">
                        <div className="text" >Book a ride</div>
                    </a>
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
    </Fragment >


}

export default Landing
