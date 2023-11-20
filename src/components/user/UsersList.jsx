import React, {useEffect,useState} from "react"
import axios from "axios";
import {Card, Col, Container, Row} from "react-bootstrap";
import Layout from "../layout/Layout";
import {getAllUsers} from "../../services/user.service";

const UsersList = () => {

    const [users,setUsers] = useState({})

    const fetchUser = async () => {
        const res = await getAllUsers()
        setUsers(res.data)
    }

    useEffect(()=>{
        fetchUser()
    },[])

    return (
        <Layout>
            <h3 className="text-center">Users</h3>
            <Row className="d-flex flex-row flex-wrap justify-content-between">
                {Object.values(users).map((user,index)=>{
                    return (
                        <Container key={index}>
                            <Row  className="justify-content-center mb-2">
                                <Col lg={4}>
                                    <Card>
                                        <Card.Body>
                                            <h4>{user.name}</h4>
                                            <p>{user.email}</p>

                                            {user.city && user.country &&(
                                                <p>{user.city} - {user.country}</p>
                                            )}
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    )
                })}
            </Row>
        </Layout>
    )

}

export default UsersList

