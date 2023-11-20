import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {Card, Col, Container, Row} from "react-bootstrap";
import Layout from "./Layout";

const RetrieveUser = () => {
    const {id} = useParams()
    const getUserEndpoint = `http://localhost:4000/v1/user/${id}`;

    const [user,setUser] = useState({})

    const fetchUser = async () => {
        try{
            const {data:{user:userRes}} = await axios.get(`${getUserEndpoint}`)
            setUser(userRes)
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