import React from 'react'
import instaSvg from '../../images/003-instagram.svg'
import fbSvg from '../../images/002-facebook.svg'
import youtubeSvg from '../../images/001-youtube.svg'

const ProfileForm = () => {
    return (
        <React.Fragment>
            <div className="profileForm">
                <div className="header">
                    Let's set your profile
                </div>
                <div className="form">
                    <form>
                        <div class="form__field">
                            <h3>Personal Info</h3>
                            <div class="row">
                                <div class="col">
                                    <label for="dob" class="dobLabel">Dob: </label>
                                    <input type="date" id="dob" />
                                </div>
                                <div class="col">
                                    <input type="number" placeholder="Phone number" required />
                                </div>
                            </div>
                        </div>
                        <div class="form__field">
                            <span>Sex: </span>
                            <div class="radioBtns">
                                <div class="radio">
                                    <input type="radio" name="gender" id="male" />
                                    <label for="male">Male</label>
                                </div>
                                <div class="radio">
                                    <input type="radio" name="gender" id="female" />
                                    <label for="female">Female</label>
                                </div>
                                <div class="radio">
                                    <input type="radio" name="gender" id="other" />
                                    <label for="other">Other</label>
                                </div>
                            </div>
                        </div>
                        <hr />

                        <div class="form__field">
                            <h3>Address:</h3>
                            <input type="text" placeholder="Locality" /> <br />
                            <input type="number" placeholder="PIN" />
                            <div class="row">
                                <div class="col">
                                    <input type="text" placeholder="State" />
                                </div>
                                <div class="col">
                                    <input type="text" placeholder="Country" />
                                </div>
                            </div>
                        </div>

                        <div class="form__field">
                            <h3>Social Links</h3>
                            <div class="social__links">
                                <div class="social">
                                    <div class="icon">
                                        <img src={instaSvg} alt="" />
                                    </div>
                                    <input type="text" placeholder="Instagram" />
                                </div>
                                <div class="social">
                                    <div class="icon"><img src={fbSvg} alt="" /></div>
                                    <input type="text" placeholder="Facebook" />
                                </div>
                                <div class="social">
                                    <div class="icon"><img src={youtubeSvg} alt="" /></div>
                                    <input type="text" placeholder="Youtube" />
                                </div>
                            </div>
                        </div>

                        <div class="form__field">
                            <h3>Document</h3>
                            <p>Enter the number of any one ID.</p>
                            <div class="docs">
                                <input type="number" placeholder="Aadhar" />
                                <input type="number" placeholder="PAN" />
                            </div>
                        </div>

                        <button class="btn" type="submit"><span>Submit</span></button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProfileForm
