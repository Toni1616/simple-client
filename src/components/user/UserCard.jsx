import {Button, Card} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import React from "react";

const UserCard = ({user}) => {
    return(
        <Card className="m-1">
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
    )

}

export default UserCard