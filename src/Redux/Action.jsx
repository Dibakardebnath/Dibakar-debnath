import axios from "axios"
import { Auth, uploadTrack } from "./Actiontype"

export const authentication=(payload) => {
    return {
        type:Auth,
        payload
    }
}

export const uploadTrackArr=(payload)=>{
    return {
        type:uploadTrack,
        payload
    }
}

export const gettrakarr=()=>async(dispatch)=>{
   await axios.get("http://localhost:8000/track")
    .then(({data})=>{
          dispatch(uploadTrackArr(data))
    })
}

export const deletdata=(id) => (dispatch)=>{
    axios.delete(`http://localhost:8000/track/${id}`)
    dispatch(gettrakarr())
}

export const sortfoo=(val)=>(dispatch)=>{
    axios.get(`http://localhost:8000/track?_sort=date&_order=${val}`).then(({data})=>{
        dispatch(uploadTrackArr(data))
    })
}