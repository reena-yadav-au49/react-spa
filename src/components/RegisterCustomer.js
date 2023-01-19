import React from "react";
import { useState } from "react";

const RegisterCustomer = ({ addCustomer, darkMode }) => {
    const [name, setName] = useState("");
    const [country, setCountry] = useState("");
    const [important, setImportant] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        //validation
        if (!name) {
            alert("Enter Name");
            return;
        }
        if (!country) {
            alert("Select Country");
            return;
        }
        addCustomer({ name, country, important });


        setName("");
        setCountry("");
        setImportant(false);
        alert(`${name} name has been submitted `);
    };

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>
                    Enter Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)} />

            </div>
            <div className="form-control">
                <label>Select Country</label>
                <select value={country} onChange={(e) => setCountry(e.target.value)}>
                    <option value="--select--">--select--</option>
                    <option value="India">India</option>
                    <option value="usa">usa</option>
                </select>


            </div>
            <div className="form-control form-control-check">
                <label>Set Important</label>
                <input
                    type="checkbox"
                    checked={important}
                    onChange={(e) => setImportant(e.currentTarget.checked)} />
            </div>

            <input
                type="submit"
                className="btn btn-block"
                style={darkMode ? { background: "#794BC4" } : { background: "#000" }} />


        </form>
    );
};
export default RegisterCustomer;