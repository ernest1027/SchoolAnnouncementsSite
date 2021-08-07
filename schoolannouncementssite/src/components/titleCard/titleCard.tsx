import React from 'react';
import { TitleCardData } from '../../Interfaces/TitleCardData';
import {RouteComponentProps, withRouter, Link} from 'react-router-dom';
import './titleCard.css';
import {Button} from 'react-bootstrap'
function TitleCard(props: TitleCardData & RouteComponentProps) {

    const insertButtons = () =>{
        let buttons: Record<string, any>= {
            editButton: <Link to={'/edit'} className="btn btn-primary" id="editAnnouncement">Edit This Announcement</Link>,
            addAnnouncementButton:  <button className="btn btn-primary" id="addAnnouncement">Add Announcements</button>,
            goBackButton: <Link to={'/'} className="btn btn-primary" id="editAnnouncement">Go back</Link>,
        };
        let ret: Element[] = [];
        Object.keys(buttons).forEach(
            (key) => {if(props[key as unknown as keyof TitleCardData]){ret.push(buttons[key])}}
        )
        return ret;
    }

    return (
        <div className="jumbotron text-center">
            <h1>{props.title}</h1>
            {
                insertButtons()
            }
        </div>
    );
}

export default withRouter(TitleCard);