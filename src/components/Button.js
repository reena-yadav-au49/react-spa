const Button = (props)=>{
    return (
        <button 
        onClick ={props.onClick}
        style={{background :props.color}}
        className="btn">
        {props.text}
        </button>
    );
};
export default Button ;