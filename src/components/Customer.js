
import { FaTimes } from "react-icons/fa";

const Customer = ({ customer, onToggle, onDelete, darkMode }) => {
    return (
        <div
        
        className={`${darkMode ? "task-dark" : "task-light"} ${
          customer.important ? "reminder" : ""
        }`}
            onDoubleClick={() => onToggle(customer.id)} >
            <h3>
                Customer Name :{customer.name}
                <FaTimes style={FaStyle} onClick={() => onDelete(customer.id)} />
            </h3>
            <p>
                Customer Id :{customer.id} <br />
                Country: {customer.country}<br/>
            </p>
        </div>
    );
};

const FaStyle={
    color :"red",
    cursor :"pointer"
};

export default Customer ;
