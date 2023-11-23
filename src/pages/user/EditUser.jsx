import React, {useEffect, useState} from "react";
import {editUser, getUser} from "../../services/user.service";
import {useParams} from "react-router-dom";
import {toast} from "react-toastify";
import {Button, Col, Form, FormControl, FormLabel, Row} from "react-bootstrap";
import Layout from "../../components/layout/Layout";

const EditUser = () => {
    const {id} = useParams()
    const [name,setName] = useState('')
    const [prevName,setPrevName] = useState('')
    const [email,setEmail] = useState('')
    const [city,setCity] = useState('')
    const [country,setCountry] = useState('')

    const populateUserFields = async () => {
        try{
            const user = await getUser(id)
            setName(user.name)
            setPrevName(user.name)
            setEmail(user.email)
            setCity(user.city)
            setCountry(user.country)
        } catch (err) {
            console.error(err.message)
            toast.error(`User ${id} couldn't be found.`)
            setInterval(()=>{
                window.location.href = '/'
            }, 3000);

        }

    }

    useEffect(()=>{
        populateUserFields()
    },[id])

    const submitForm = async (e)  => {
        e.preventDefault()

        const payload = {
            name,email,city,country
        }

        try{
            const apiResponse = await editUser(id,payload)

            if(apiResponse?.status){
                // const name = apiResponse?.data.user.name
                // console.log(apiResponse)
                toast.success(`${prevName} has been updated.`)
            }else{
                toast.warn("The user couldn't updated.")
            }
        }catch (err){
            const {data: {errors}} = err.response
            const message = errors.body[0]?.message
            toast.error(message[0].toUpperCase() + message.substring(1))

        }
    }
    return (
        <Layout>
            <Row className="justify-content-center">
                <Col lg={6}>
                    <Form id="editForm" onSubmit={submitForm}>
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
                        <Button variant={"primary"} type="submit">Update</Button>
                    </Form>
                </Col>
            </Row>
        </Layout>
    )
}

export default EditUser