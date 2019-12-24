import React from 'react'

const Loader = () => {
    return (
        <React.Fragment>
            <div className="loader__container">
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        </React.Fragment>
    )
}

export default Loader
