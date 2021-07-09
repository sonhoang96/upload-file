import * as types from "../constants"
export const uploadImageApi = (data) => {
    const url = types.DOMAIN + "/upload";
    console.log(data.get('myFile'))
    // console.log(form, data)
    return new Promise((resolve,reject) => {
        fetch(url, {
            method: types.HTTP_CREATE,
            // headers: {'Content-Type' : 'multipart/form-data'},
            body: data
        })
        .then((response) => response.json())
        .then((res) => resolve(res))
        .catch((error) => reject(error))
    })
}