import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from "react";
import db from "../firebase"
import {CardData} from "../Interfaces/CardData";
import AnnouncementCard from "../components/announcementCard";
import './home.css'

import Button from "react-bootstrap/Button";

function Home() {
    const [announcements, setAnnouncements] = useState([] as Array<CardData>);

    useEffect(() => {
        db.collection("Announcements").onSnapshot((snapshot => {
                setAnnouncements(
                    snapshot.docs
                        .filter(doc => doc.id !== "Hello World" && doc.id !== "Counter")
                        .map(doc => {
                            return ({id: doc.id, data: {...doc.data()}} as CardData)
                        })
                )
            }
        ))
    }, [])

    return (
        <div className="Home">


            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3" id="announcement-cards" >
                        {announcements.map(
                            ({id, data})=>{
                                return <AnnouncementCard key={id} id={id} data={data}></AnnouncementCard>
                            }
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
