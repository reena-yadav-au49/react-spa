import Button from "./Button";
import Toggle from "./Toggle";

const Header = (props) => {
  return (
    <header className="header">
      <h1>SPA</h1>
      <Toggle onClick={props.toggleMode} darkMode={props.darkMode} />
      <Button
        color={props.showNav ? "red" : "green"}
        text={props.showNav ? "close menu" : "open menu"}
        onClick={props.onClick}
      />
    </header>
  );
};

export default Header;




