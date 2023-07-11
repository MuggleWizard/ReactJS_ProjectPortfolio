// import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";




class AddContact extends React.Component {
    state = {
        name: "",
        email:"",
    };
  
    add = (e) => {

        e.preventDefault();
        if(this.state.name === "" || this.state.email === "") {
            alert("All the fields are mandatory!");
            return;
        }
        this.setState({name:"", email: ""});
        this.props.addContactHandler(this.state);
        
        console.log(this.state);
        
        // this.props.history.push("/");
      
       
        };

    render(){
        return (
            <div className ="ui main">
                <h1>Add Contact</h1>
                <form className = "ui form" onSubmit={this.add}>
                    <div className = "field">
                        <label>Name</label>
                        <input 
                        type="text" 
                        name = "name" 
                        placeholder= "Name" 
                        value={this.state.name}
                        onChange={ (e) => this.setState({name: e.target.value})}/>
                    </div>
                    <div className = "field">
                        <label>Email</label>
                        <input 
                        type="text" 
                        name = "email" 
                        placeholder= "Email"
                        value={this.state.email}
                        onChange={ (e) => this.setState({email: e.target.value})}/>
                    </div>
                    <Link to="/">
                    <button className ="ui button blue" >Add</button>
                    </Link>
                    

                </form>
            </div>
            
        );
    };
};


export default AddContact;