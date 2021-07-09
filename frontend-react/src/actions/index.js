import * as types from "../constants"
export const getItems = () => {
    return{
        type: types.GET_ITEM_REQUEST
    }
}
export const postItem = (payload) => {
    return{
        type: types.POST_ITEM_REQUEST,
        payload
    }
}
export const updateItem = (payload) => {
    return{
        type: types.UPDATE_ITEM_REQUEST,
        payload
    }
}
export const deleteItem = (payload) => {
    return{
        type: types.DELETE_ITEM_REQUEST,
        payload
    }
}
export const uploadFile = (payload) => {
    return{
        type: types.UPLOAD_IMAGE_REQUEST,
        payload
    }
}