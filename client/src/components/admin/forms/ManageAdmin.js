import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {manageAdmin} from '../../../actions/admin'
function ManageAdmin({close, users, admins, manageAdmin}) {
    const [formData, setFormData] = useState({
        id:"",
        action:""
    })
    const {id,action} = formData
    const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    const onSubmit = async e => {
        e.preventDefault();
        manageAdmin(id,action)
        close()
    };
    return (
        <React.Fragment>
             <div className="form__container">
        <div
          className="close noselect"
          id="close"
          onClick={() => {
            close();
          }}
        >
          +
        </div>
        <div className="all_admins">
            <h1>All Admin List</h1>
            <hr/>
            <ul>
                {admins.map(admin=>{
                    return <li key={admin._id}>{admin.name}</li>
                })}
            </ul>
        </div>
        <form onSubmit={e=>onSubmit(e)}>
            <h1>Manage Admin</h1>
            <select name="id" value={id} onChange={e=>onChange(e)} required>
                <option value="null">--Select User--</option>
                {
                    users.map(user=>{
                        return <option value={user._id} key={user._id}>{user.name}</option>
                    })
                }
            </select>
            <div className="radio" required>
                    <h3>Action</h3>
                    <div className="radio__btns">
                        <div className="form__group">

                            <input type="radio" name="action" value="allow" id="male" 
                            onChange ={e=>{onChange(e)}} 
                            checked={action === 'allow'} />
                            <label htmlFor="male">Allow</label>

                        </div>
                        <div className="form__group"><input type="radio" name="action" value="remove" id="fem" onChange ={e=>{onChange(e)}} 
                        checked={action === 'remove'}/>
                            <label htmlFor="fem">Remove</label></div>
                    </div>
                </div>
            <button type="Submit">Update Admin</button>
        </form>
        </div>
        </React.Fragment>
    )
}

ManageAdmin.propTypes = {
    admins: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
    admins: state.admin.admins,
    users: state.admin.users
})

export default connect(mapStateToProps, {manageAdmin})(ManageAdmin)

