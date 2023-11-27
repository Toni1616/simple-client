import React, {useEffect,useState} from "react"
import axios from "axios";
import {Button, Card, Col, Container, Row, Spinner} from "react-bootstrap";
import Layout from "../../components/layout/Layout";
import {getAllUsers} from "../../services/user.service";
import {NavLink} from "react-router-dom";
import {toast} from "react-toastify";
import {List} from "react-content-loader"
import UserCard from "../../components/user/UserCard";

const UsersList = () => {

    const [users,setUsers] = useState({})
    const [errMsg,setErrMsg] = useState(null)
    const [isLoading,setIsLoading] = useState(false)

    const fetchUser = async () => {
        try {
            setIsLoading(true)
            const apiResponse = await getAllUsers()
            setUsers(apiResponse.data)
        } catch (e) {
            const retrieveErrMsg = () => {
                const apiErrorMessage = e?.response?.data?.message
                return apiErrorMessage ?? 'Error while connecting to the server.'
            }
            setErrMsg(retrieveErrMsg())
            // toast.warn(message)
            console.log(e.response)
        }finally {
            setIsLoading(false)

        }

    }

    useEffect(()=>{
        fetchUser()
    },[])

    return (
        <Layout>
            <Row className="d-flex flex-row flex-wrap justify-content-between">
            {isLoading ? (<div className="text-center"><List/></div>) : errMsg ? (
                    <h5 className="text-center text-danger fw-bold">{errMsg}</h5>
                ): (
                <>
                    <h3 className="text-center">Users</h3>
                    <Row  className="justify-content-center mb-2">
                    {Object.values(users).map((user)=>{
                        return (
                            <Col lg={4} key={user.id} className="p-1">
                                <UserCard user={user}/>
                            </Col>
                        )
                    })}
                    </Row>
                </>
                )}
            </Row>
        </Layout>
    )

}

export default UsersList

