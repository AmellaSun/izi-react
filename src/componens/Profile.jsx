import React from "react";
import "./Profile.css"

const Profile = () => {
    return (
        <div className="MainContent">
            <img src=" " alt="" />
            <div className="MainContent__profile">
                <div className="MainContent__avatar">
                    <img
                        src="https://sun9-53.userapi.com/s/v1/ig2/TF8oVAUTj6RqXEw7CQXcm8oSDyOpfe3JbNkiByApy8xBD3iKQRRkM2EK5Tw5xnw7KqfUGP6xJeqeodTmJTiKCSz9.jpg?size=200x200&quality=95&crop=989,21,876,876&ava=1"
                        alt=""
                    />
                </div>
                <div className="MainContent__specs">
                    <h2>Darya A.</h2>
                    <p>Date of Birth: 13fr </p>
                    <p>City: Saint-Petersburg</p>
                    <p>Education: SPbU </p>
                </div>
            </div>
        </div>
    );
};
export default Profile;
