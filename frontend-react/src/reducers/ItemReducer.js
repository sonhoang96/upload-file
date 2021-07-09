import * as types from "../constants"
const DEFAULT_STATE = {
    listData: [],
    isLoading: false,
    error: false,
    errorMessage: false
}
export default (state = DEFAULT_STATE, action) =>{
    switch(action.type){
        case types.GET_ITEM_REQUEST:
        case types.POST_ITEM_REQUEST:
        case types.DELETE_ITEM_REQUEST:
        case types.UPDATE_ITEM_REQUEST:
            return{
                ...state,
                isLoading: true
            }
        case types.GET_ITEM_SUCCESS:
            return{
                ...state,
                listData: action.payload,
                isLoading: false
            }
        case types.UPDATE_ITEM_SUCCESS:    
        case types.DELETE_ITEM_SUCCESS:    
        case types.UPDATE_ITEM_SUCCESS:
            return{
                ...state,
                isLoading: false
            }
        case types.GET_ITEM_FAILURE:
        case types.UPDATE_ITEM_FAILURE:
        case types.DELETE_ITEM_FAILURE:
        case types.POST_ITEM_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: true,
                errorMessage: action.payload
            }
        default:
            return state
    }
}