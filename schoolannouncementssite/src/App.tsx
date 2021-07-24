import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from "react";
import db from "./firebase"
import {CardData} from "./Interfaces/CardData";
import AnnouncmentCard from "./components/announcmentCard";

function App() {
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
        <div className="App">
            {announcements.map(
                ({id, data})=>{
                return <AnnouncmentCard id={id} data={data}></AnnouncmentCard>
            }
            )}
        </div>
    );
}

export default App;
