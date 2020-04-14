import React from 'react'
import PropTypes from 'prop-types'
import AddCycle from './AddCycle'

function FormManager({close}) {

    const setForm = ()=>{
        return <AddCycle close={close}/>
    }


    return (
        <React.Fragment>
            <div className="modal__forms" id='modelBg' onClick={(e)=>{
                if(e.target.id === 'modelBg'){
                    close()
                }
            }}>
                {setForm()}
            </div>
        </React.Fragment>
    )
}

FormManager.propTypes = {

}

export default FormManager

