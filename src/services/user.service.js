import axios from "axios";
import {useParams} from "react-router-dom";

const baseApiUrl = "http://localhost:4000"


const getCreateUserEndpoint = `${baseApiUrl}/v1/user`
const getAllUsersEndpoint = `${baseApiUrl}/v1/user/all`
const getUserEndpoint = `${baseApiUrl}/v1/user`



export const createUserService = async (payload) => {
    const res = await axios.post(`${getCreateUserEndpoint}`,payload)
    return res
}

export const getAllUsers = async () => {
    const res = await axios.get(`${getAllUsersEndpoint}`)
    return res
}

export const getUser = async (id) => {
    const {data:{user:userRes}} = await axios.get(`${getUserEndpoint}/${id}`)
    return userRes
}
