import React from "react";
import user from "../images/user.png";
// import { Link } from "react-router-dom";


const ContactCard = (props) => {
    
   const {id, name, email} = props.contact;
    return(
        <div className ="item">
            <img className="ui avatar image" src={user} alt="user"/>
            <div className = "content">
                <div className ="header">{name}</div>
                <div>{email}</div>
              
            </div>
            <i
            className = "trash alternate outline icon" 
            style={{color:"red", marginTop:"7px"}}
            onClick= {() => props.clickHandler(id)}>
            </i>
        </div>
    ); 
};

export default ContactCard;

/* Have to adjust the LINK so that the site works correctly.  The tutorial has an older method verse using the current react-router-dom in my package */