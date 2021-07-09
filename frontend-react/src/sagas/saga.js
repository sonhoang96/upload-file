import { takeEvery, put } from "redux-saga/effects";
import * as types from "../constants"
import callApi from '../fetchAPIs/callAPI'
import {uploadImageApi} from "../fetchAPIs/uploadImageApi"
function* getItems() {
    try {
        const res = yield callApi(types.HTTP_READ, "/items");
        yield put({
            type: types.GET_ITEM_SUCCESS,
            payload: res
        })
    } catch (error) {
        yield put({
            type: types.GET_ITEM_FAILURE,
            payload: error
        })
    }
}
function* addItem(action) {
    try {
        yield callApi(types.HTTP_CREATE, "/items", action.payload);
        yield put({
            type: types.POST_ITEM_SUCCESS,
        })
        yield put({
            type: types.GET_ITEM_REQUEST,
        })
    } catch (error) {
        yield put({
            type: types.POST_ITEM_FAILURE,
            payload: error
        })
    }
}
function* updateItem(action) {
    try {
        yield callApi(types.HTTP_UPDATE, `${"/items/" + action.payload.id}`, {name:action.payload.name});
        yield put({
            type: types.UPDATE_ITEM_SUCCESS
        })
        yield put({
            type: types.GET_ITEM_REQUEST
        })
    } catch (error) {
        yield put({
            type: types.UPDATE_ITEM_FAILURE,
            payload: error
        })
    }
}
function* deleteItem(action) {
    try {
        yield callApi(types.HTTP_DELETE, `${"/items/" + action.payload}`);
        yield put({
            type: types.DELETE_ITEM_SUCCESS,
        })
        yield put({
            type: types.GET_ITEM_REQUEST,
        })
    } catch (error) {
        yield put({
            type: types.DELETE_ITEM_FAILURE,
            payload: error
        })
    }
}
function* uploadImage(action) {
    try {
        const res = yield uploadImageApi(action.payload);
        yield put({
            type: types.UPLOAD_IMAGE_SUCCESS,
            payload: res
        })
    } catch (error) {
        yield put({
            type: types.UPLOAD_IMAGE_FAILURE,
            payload: error
        })
    }
}

export const saga = [
    takeEvery(types.GET_ITEM_REQUEST, getItems),
    takeEvery(types.UPDATE_ITEM_REQUEST, updateItem),
    takeEvery(types.DELETE_ITEM_REQUEST, deleteItem),
    takeEvery(types.POST_ITEM_REQUEST, addItem),
    takeEvery(types.UPLOAD_IMAGE_REQUEST, uploadImage)
]