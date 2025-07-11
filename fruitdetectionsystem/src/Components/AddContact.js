import React from "react";

class AddContact extends React.Component {
    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form">
                    <div Name="field">
                        <label>Name:</label>
                        <input type="text" name="Name" placeholder="Name" required />
                    </div>
                    <div className="field">
                        <label>Email:</label>
                        <input type="text" name="Email" placeholder="Email" required />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;