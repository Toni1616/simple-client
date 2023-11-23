import React, {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import Layout from "../../components/layout/Layout";
import {getUser} from "../../services/user.service";

const RetrieveUser = () => {
    const {id} = useParams()

    const [user,setUser] = useState({})

    const fetchUser = async () => {
        try{
            const apiResponse = await getUser(id)
            setUser(apiResponse)
        }catch (err){
            setUser(null)
        }

    }

    useEffect(()=>{
       fetchUser()
    },[id])

    return(
        <Layout>
            <Row className="justify-content-center">
                {user ? (
                    <Col lg={4}>
                        <Card>
                            <Card.Body>
                                <h4>{user.name}</h4>
                                <p>{user.email}</p>

                                {user.city && user.country &&(
                                    <p>{user.city} - {user.country}</p>
                                )}
                                <Button
                                    type={"button"}
                                    variant={"primary"}
                                    as={NavLink}
                                    to={`/edit/${user.id}`}
                                >Edit</Button>
                                <Button
                                    type={"button"}
                                    variant={"danger"}
                                    className={"m-1"}
                                    as={NavLink}
                                    to={`/remove/${user.id}`}
                                >Remove</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ): (
                    <div className="text-center fw-bold text-danger">User not found.</div>
                )}
            </Row>
        </Layout>
    )
}

export default RetrieveUser