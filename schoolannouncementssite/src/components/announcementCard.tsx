import * as React from 'react';
import "./card.css";
import db from "../firebase";
import Button from 'react-bootstrap/Button';
import {CardData} from "../Interfaces/CardData";
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';


function AnnouncementCard(props:CardData&RouteComponentProps) {

    const editCard = () =>{
        window.location.href=`/edit.html?name=${props.id}`
    }

    const deleteCard = () => {
        db.collection("Announcements").doc(props.id).delete()
            .then(() => {
                console.log("Document successfully deleted!");
            })
            .catch((error) => {
                console.error("Error removing document: ", error);
            });
        alert("Announcemment Deleted");
    }

    return (
        <div className="card">
            <img src={`${props.data.imgURL}`} alt="Image"></img>
            <div className="container">
                <a href="/view.html?name=${doc.id}">
                    <h4>{`${props.data.title}`}</h4>
                </a>
                <Link to={`/edit.html?name=${props.id}`} className={`pull-right btn btn-success editButton`}>Edit</Link>
                <Button className={`pull-right btn btn-danger deleteButton`} onClick={deleteCard}>Delete</Button>
                <p>{`${props.data.corp}`}</p>
            </div>
        </div>
    );
}

export default withRouter(AnnouncementCard);
