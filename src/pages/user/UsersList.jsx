import React, {useEffect,useState} from "react"
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import Layout from "../../components/layout/Layout";
import {getAllUsers} from "../../services/user.service";
import {NavLink} from "react-router-dom";

const UsersList = () => {

    const [users,setUsers] = useState({})

    const fetchUser = async () => {
        const apiResponse = await getAllUsers()
        setUsers(apiResponse.data)
    }

    useEffect(()=>{
        fetchUser()
    },[])

    return (
        <Layout>
            <h3 className="text-center">Users</h3>
            <Row className="d-flex flex-row flex-wrap justify-content-between">
                {Object.values(users).map((user)=>{
                    return (
                        <Container key={user.id}>
                            <Row  className="justify-content-center mb-2">
                                <Col lg={4}>
                                    <Card>
                                        <Card.Body>
                                            <h4>{user.name}</h4>
                                            <p>{user.email}</p>

                                            {user.city && user.country &&(
                                                <p>{user.city} - {user.country}</p>
                                            )}
                                            <div className="flex-column justify-content-end">
                                                <Button
                                                    type={"button"}
                                                    variant={"primary"}
                                                    as={NavLink}
                                                    to={`/${user.id}`}
                                                >More</Button>
                                            </div>

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

