import * as types from "../constants"
const DEFAULT_STATE = {
    listData: [],
    isLoading: false,
    error: false,
    errorMessage: false
}
export default (state = DEFAULT_STATE, action) =>{
    switch(action.type){
        case types.UPLOAD_IMAGE_REQUEST:
            return{
                ...state,
                isLoading: true
            }
        case types.UPLOAD_IMAGE_SUCCESS:
            return{
                ...state,
                listData: action.payload,
                isLoading: false
            }
        case types.UPLOAD_IMAGE_FAILURE:
            return{
                ...state,
                error: true,
                errorMessage: action.payload
            }
        default:
            return state
    }
}