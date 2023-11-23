import axios from "axios";
import {useParams} from "react-router-dom";

const baseApiUrl = "http://localhost:4000"

export const createUser = async (payload) => {
    const getCreateUserEndpoint = `${baseApiUrl}/v1/user`
    const apiResponse = await axios.post(getCreateUserEndpoint,payload)
    return apiResponse
}

export const editUser = async (id,payload) => {
    const getEditUserEndpoint = `${baseApiUrl}/v1/user/${id}`
    const apiResponse = await axios.put(getEditUserEndpoint,payload)
    return apiResponse
}

export const getAllUsers = async () => {
    const getAllUsersEndpoint = `${baseApiUrl}/v1/user/all`
    const apiResponse = await axios.get(getAllUsersEndpoint)
    return apiResponse
}

export const getUser = async (id) => {
    const getUserEndpoint = `${baseApiUrl}/v1/user/${id}`
    const {data:{user:apiResponse}} = await axios.get(getUserEndpoint)
    return apiResponse
}

export const removeUser = async (id) => {
    const removeUserEndpoint = `${baseApiUrl}/v1/user/${id}`
    const {data:apiResponse} = await axios.delete(removeUserEndpoint)
    return apiResponse
}
