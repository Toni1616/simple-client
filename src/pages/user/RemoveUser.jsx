import Layout from "../../components/layout/Layout";
import {Button, Col, Row} from "react-bootstrap";
import {removeUser} from "../../services/user.service";
import {toast} from "react-toastify";
import {NavLink, useParams} from "react-router-dom";

const RemoveUser = () => {
    const DELAY_BEFORE_REDIRECTION = 1000
    const {id} = useParams()

    const submitForm = async () => {
        try{
            const apiResponse = await removeUser(id)
            console.log(apiResponse)
            if(apiResponse?.status){
                toast.success(`User deleted.`)
            }
            else{
                toast.warn(`User not deleted.`)
            }

            setTimeout(()=>{
                window.location.href = '/'
            }, DELAY_BEFORE_REDIRECTION)
        }catch (e) {
            toast.error(`User cannot remove.`)
            console.log(e.message)
        }

    }

    return (
        <Layout>
            <Row className="justify-content-center">
                <Col lg={5}>
                    <h3>Are you sure to remove this user?</h3>
                    <div className="align-items-center">
                        <Button variant={"danger"} onClick={submitForm} className={"m-1"}>Remove User</Button>
                        <Button variant={"primary"} as={NavLink} to={`/${id}`} className={"m-1"}>Back</Button>
                    </div>
                </Col>
            </Row>
        </Layout>
    )

}

export default RemoveUser