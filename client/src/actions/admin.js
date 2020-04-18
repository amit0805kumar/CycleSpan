import {
  GET_OTPS,
  ALLOTP_ERROR,
  GET_ALLACTIVES,
  ALLACTIVES_ERROR,
  GET_ALLSTATIONS,
  ALLSTATION_ERROR,
  GET__ALLCYCLES,
  ALLCYCLE_ERROR,
  GET__ALLAVAILABLES,
  ALLAVAIL_ERROR,
  GET_ALLRECORD,
  ALLRECORD_ERROR,
  ADD_CYCLES,
  DELETE_CYCLES,
  ADD_STATION,
  REMOVE_STATION,
  UPDATE_AVAILABlE,
  ADMIN_UPDATED,
  GET_USERS,
  GET_USERS_ERROR,
  GET_ADMINS,
  GET_ADMINS_ERROR
} from "./types";
import axios from "axios";
import { setAlert } from "./alert";

export const getAllRecords = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/rides/records");
    dispatch({
      type: GET_ALLRECORD,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ALLRECORD_ERROR,
    });
  }
};

export const getAllCycles = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/cycles");
    dispatch({
      type: GET__ALLCYCLES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ALLCYCLE_ERROR,
    });
  }
};

export const getAllStations = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/stations");
    dispatch({
      type: GET_ALLSTATIONS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ALLSTATION_ERROR,
    });
  }
};

export const getAllAvailables = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/rides/");
    dispatch({
      type: GET__ALLAVAILABLES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ALLAVAIL_ERROR,
    });
  }
};

export const getAllOtps = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/active/otps");
    dispatch({
      type: GET_OTPS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ALLOTP_ERROR,
    });
  }
};

export const getAllActiveRides = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/activeRide/");
    dispatch({
      type: GET_ALLACTIVES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ALLACTIVES_ERROR,
    });
  }
};

//Add cycles
export const addCycles = (payload) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    await axios.post("/api/cycles", payload, config);
    dispatch({
      type: ADD_CYCLES,
    });
    dispatch(getAllCycles());
    dispatch(setAlert("Cycle added successfully!", "success"));
  } catch (error) {
    dispatch(setAlert("Somethong went wrong", "danger"));
  }
};

//Deleting cycle

export const deleteCycle = (model) => async (dispatch) => {
  try {
    await axios.delete(`/api/cycles/${model}`);
    dispatch({
      type: DELETE_CYCLES,
    });
    dispatch(getAllCycles());
    dispatch(setAlert("Cycle deleted successfully!", "danger"));
  } catch (error) {
    dispatch(setAlert("Somethong went wrong", "danger"));
  }
};

//Add stations

export const addStation = (payload) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    await axios.post("/api/stations", payload, config);
    dispatch({
      type: ADD_STATION,
    });
    dispatch(getAllStations());
    dispatch(setAlert("Station successfully added", "success"));
  } catch (error) {
    dispatch(setAlert("Something went wrong!", "danger"));
  }
};

//Deleting cycle

export const deleteStation = (code) => async (dispatch) => {
  try {
    await axios.delete(`/api/stations/${code}`);
    dispatch({
      type: REMOVE_STATION,
    });
    dispatch(getAllStations());
    dispatch(setAlert("Station deleted successfully!", "danger"));
  } catch (error) {
    dispatch(setAlert("Somethong went wrong", "danger"));
  }
};

export const updateAvailable = (payload) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    await axios.put("/api/rides/update", payload, config);
    dispatch({
      type: UPDATE_AVAILABlE,
    });
    dispatch(getAllAvailables());
    dispatch(setAlert("Ride updated", "success"));
  } catch (error) {
    dispatch(setAlert("Somethong went wrong", "danger"));
  }
};
export const addAvailable = (payload) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    await axios.post("/api/rides/add", payload, config);
    dispatch({
      type: UPDATE_AVAILABlE,
    });
    dispatch(getAllAvailables());
    dispatch(setAlert("Ride Added", "success"));
  } catch (error) {
    dispatch(setAlert("Somethong went wrong", "danger"));
  }
};

export const manageAdmin = (id, act) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    if (act === "allow") {
      await axios.post(`/api/profile/allowAdmin/${id}`);
      dispatch({
        type: ADMIN_UPDATED,
      });
    } else if (act === "remove") {
      await axios.delete(`/api/profile/removeAdmin/${id}`);
      dispatch({
        type: ADMIN_UPDATED,
      });
    }
    dispatch(getAdmins())
    dispatch(setAlert("Admin updated!", "success"));
  } catch (error) {
    // var errors = error.response.data.errors
    // // if (errors) {
    // //     errors.forEach(error => dispatch(setAlert(error.message, 'danger')))
    // // }
    // console.log(errors)
    dispatch(setAlert('Something went wrong!', "danger"));
  }
};

export const getUsers = () => async dispatch =>{
  try {
      const res = await axios.get('/api/auth/users')
      dispatch({
        type: GET_USERS,
        payload: res.data
      })
  } catch (error) {
    dispatch({
      type: GET_USERS_ERROR
    })
  }
}
export const getAdmins = () => async dispatch =>{
  try {
      const res = await axios.get('/api/auth/admins')
      dispatch({
        type: GET_ADMINS,
        payload: res.data
      })
  } catch (error) {
    dispatch({
      type: GET_ADMINS_ERROR
    })
  }
}