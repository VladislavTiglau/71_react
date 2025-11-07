import "./styles.css";

function Button({type, name, onClick }){
  return (
    <button className="button" type={type} onClick={onClick}>
        {name}
    </button>    
  );  
}

export default Button;