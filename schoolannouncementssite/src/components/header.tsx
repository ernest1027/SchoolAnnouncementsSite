import React from 'react';

function Header(props) {
    return (
        <div className="jumbotron text-center ">
            <h1>Announcements Interface</h1>
            <button className="btn btn-primary" id="addAnnouncement">Add Announcements</button>
        </div>
    );
}

export default Header;