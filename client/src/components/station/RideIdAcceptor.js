import React from 'react'
import { connect } from 'react-redux'


const RideIdAcceptor = () => {
    return (
        <React.Fragment>
            <div className="formContainer">
                <form>
                    <h1>Enter your RideId</h1>
                    <input type="text" className="field" />
                    <input type="submit" value="Submit" className="btn" />
                </form>
            </div>
        </React.Fragment>
    )
}

export default connect(null, {})(RideIdAcceptor)
