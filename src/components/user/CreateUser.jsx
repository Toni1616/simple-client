import React, {useState} from "react";
import {Button, Col, Container, Form, FormControl, FormLabel, Row} from "react-bootstrap";
import axios from "axios";
import {toast} from "react-toastify";
import Layout from "../layout/Layout";
import {createUserService} from "../../services/user.service";

const CreateUser = () => {


    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [city,setCity] = useState("")
    const [country,setCountry] = useState("")

    const createUser = async (e) => {
        e.preventDefault()

        const payload = {
            name,email,city,country
        }

        try {
            const res = await createUserService(payload)
            const userId = res.data.user.id

            if (res.data?.status){
                toast.success(`User ${userId} is created!`)

                setName("")
                setEmail("")
                setCity("")
                setCountry("")

            }else{
                toast.warn('An error has occur.')
            }
        }catch (err){
            const {data:{errors}} = err.response
            const message = errors.body[0]?.message
            toast.error(message[0].toUpperCase() + message.substring(1))
            console.log(err)
        }

    }

    return (
        <Layout>
            <Row className="justify-content-center">
                <Col lg={6}>
                    <Form id="createForm" onSubmit={createUser}>
                        <Form.Group className="mb-5">
                            <FormLabel>Name</FormLabel>
                            <FormControl
                                type="text"
                                value={name}
                                placeholder="Name"
                                onChange={e=>setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-5">
                            <FormLabel>Email</FormLabel>
                            <FormControl
                                type="email"
                                value={email}
                                placeholder="Email"
                                onChange={e=>setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-5">
                            <FormLabel>City</FormLabel>
                            <FormControl
                                type="text"
                                value={city}
                                placeholder="City"
                                onChange={e=>setCity(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-5">
                            <FormLabel>Country</FormLabel>
                            <FormControl
                                type="text"
                                value={country}
                                placeholder="Country"
                                onChange={e=>setCountry(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant={"primary"} type="submit">Add User</Button>
                    </Form>
                </Col>
            </Row>
        </Layout>
    )
}

export default CreateUser