import React from "react";

const Profile = (props) => {
    return (
    <div className="componentHolder">
        <h2 className="componentTitle">Profile component</h2>
        <h1 data-testid="name">{props.name}</h1>
        <p data-testid="job">{props.job}</p>
        <p data-testid="birthdate">{props.birthdate}</p>
    </div>
        );
};

export default Profile;