// import { render } from "@testing-library/react";
import React from "react";
// import {Route} from "react-router-dom";
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
    
        // const navigate = useNavigate();
        // navigate("/");
        
      
    
        console.log(this.state);
        // <Navigate to="/" replace={true}/> Figuring out where to put this line so that after you add contact it redirects you to home page.
        // this.props.history.push("/");
        // this.props.addContactHandler(this.state).push("/");
    //    <Route path="/" element={<AddContact animate={true}/>} />
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
                    <Link to="/" state={{from: this.state}}>
                         <button className ="ui button blue" >Add</button>
                    </Link>
                    
                </form>
            </div>
        );
    };
};




export default AddContact;