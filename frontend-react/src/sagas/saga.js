import { takeEvery, put } from "redux-saga/effects";
import * as types from "../constants"
import {uploadImageApi} from "../fetchAPIs/uploadImageApi"
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
    takeEvery(types.UPLOAD_IMAGE_REQUEST, uploadImage)
]