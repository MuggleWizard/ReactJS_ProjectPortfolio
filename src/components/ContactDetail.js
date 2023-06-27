import React from "react";
import user from "../images/user.jpeg";
// import { Link } from "react-router-dom";

const ContactDetail = (props) => {
    console.log(props);
    return(
        <div className="main">
            <div className="ui card centered">
                <div className= "image">
                    <img src={user} alt="user"/>
                </div>
                <div className="content">
                    <div className="header">Elf Maiden</div>
                    <div className="description">IceforAll@brr.com</div>
                </div>
            </div>
        </div>
    ); 
};

export default ContactDetail;