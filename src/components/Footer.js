import { FaHeart } from "react-icons/fa";

const Footer =({darkMode})=>{
   return (
    <footer>
    Made with {""}
    <FaHeart Style={darkMode ? {color :"#E0245E"} : {color :"red"}}/> by Reena
    </footer>
   );
};
export default Footer ;