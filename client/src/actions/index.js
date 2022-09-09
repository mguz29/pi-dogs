import axios from 'axios'
import Swal from 'sweetalert2'

export function GetDogs() {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/dogs",{
        })
            return dispatch({
            type:    'GET_DOGS',
            payload: json.data
        })
    }
}

export function GetTemp() {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/temperament")
            return dispatch({
            type:    'GET_TEMP',
            payload: json.data
        })
    }
}


export function OrderByName(payload) {
    return {
        type:'ORDER_BY_nombre',
        payload
    }
}

export function OrderByWeith(payload) {
    return {
        type:'ORDER_BY_PESO',
        payload
    }
}


export function filterDogsByName(payload) {
    return {
        type:'FILTER_BY_PESO',
        payload
    }
}


export function filterByTemp(payload) {

    return {
        type:'FILTER_TEMP',
        payload
    }
}

export function GetNameDogs(payload) {
    return async function (dispatch) {
    try {
        var json = await axios.get(`http://localhost:3001/dogss?name=${payload}`)
            return dispatch({
            type:    'GET_NAME_DOGS',
            payload: json.data
        })
    
    } catch (error) {
        console.log(error.response)
        if (error.response) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Dogs Not Found, Try Again!',
              })
        }
        
    }
   }
}


export function GetDogsId(id) {
    return async function (dispatch) {
    try {
        var json = await axios.get(`http://localhost:3001/dogs/${id}`)
            return dispatch({
            type:    'GET_ID',
            payload: json.data
        })
    
    } catch (error) {
        console.log(error.response)
        if (error.response) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Dogs Not Found, Try Again!',
              })
        }
        
    }
   }
}

export function SetDogDetail() {
    return {
        type: 'SET_ID',
        payload: []
    }

}

export function setPage(num) {
    return async function (dispatch) {
      try {
        return dispatch({ type: 'SET_PAGE', payload: num });
      } catch (error) {
        console.log(error);
      }
    };
  }