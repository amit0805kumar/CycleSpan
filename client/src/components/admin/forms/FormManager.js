import React from 'react'
import PropTypes from 'prop-types'
import AddCycle from './AddCycle'
import AddStation from './AddStation'
import AddAvailable from './AddAvailable'

function FormManager({close, code}) {

    const setForm = ()=>{
        switch(code){
            case 1: return <AddCycle close={close}/>
                    break
            case 2: return <AddStation close={close}/>
                    break
            case 3: return <AddAvailable close={close}/>
                    break
            default: return <AddCycle close={close}/>
        }
        
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

