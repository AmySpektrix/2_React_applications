import React, {useState} from "react";

const Form = () => {
    const [form, setForm] = useState ({username:"", password:"", phonenumber:"", successMessage:""})

    const handleChangeUsername = (event) => {
        const updatedForm = {username:event.target.value, password:form.password, phonenumber:form.phonenumber, successMessage:form.successMessage}
        setForm(updatedForm);
    }; 

    const handleChangePassword = (event) => {
        const updatedForm = {username:form.username, password:event.target.value, phonenumber:form.phonenumber, successMessage:form.successMessage}
        setForm(updatedForm);
    };
    
    const handleChangePhonenumber = (event) => {
        const updatedForm = {username:form.username, password:form.password, phonenumber:event.target.value, successMessage:form.successMessage}
        !isNaN(event.target.value)? setForm(updatedForm): null;
    };           
    
    const handleSubmit = () => {
        if (length(password) > 7) {
            event.preventDefault();
            fetch("http://url.com/endpoint", {
            method: "POST",
            // mode: 'no-cors',
            body: JSON.stringify({ username: form.username, phonenumber: form.phonenumber, password: form.password}),
            });
            form.setSuccessMessage = "Successfully submitted";    
        }
        else {
            form.setSuccessMessage = "Your password is too short"};
    };
    

    return(
        <div className="componentHolder">
        <h2 className="componentTitle">Form component</h2>
            <form onSubmit={handleSubmit}>
            <p>{form.successMessage}</p>
            <label>
                Enter your username:
                <input type="username" name="username" value={form.username}  onChange={handleChangeUsername}/>
            </label><br></br>
            <label>
                Enter your Phonenumber:
                <input name="phonenumber" value={form.phonenumber}  onChange={handleChangePhonenumber}/>
            </label><br></br>
            <label>
                Enter your password:
                <input type="password" name="password" value={form.password} onChange={handleChangePassword}/>
            </label><br></br>
            <label>
                Submit: 
                <input type="submit" name="submit" onClick={handleSubmit}/> 
                </label>
            </form>
        </div>
        );
    };

export default Form;
