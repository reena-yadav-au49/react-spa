import {FaMoon ,FaRegMoon} from "react-icons/fa";
const Toggle =({ onClick ,darkMode})=>{
    return <div onClick={onClick}>{darkMode ?<FaMoon/>:<FaRegMoon />}</div>;
};
export default Toggle ;