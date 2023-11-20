import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {Card, Col, Container, Row} from "react-bootstrap";
import Layout from "../layout/Layout";
import {getUser} from "../../services/user.service";

const RetrieveUser = () => {
    const {id} = useParams()

    const [user,setUser] = useState({})

    const fetchUser = async () => {
        try{
            const userRes = await getUser(id)
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