import "./Button.css";

export function Button({ text, color, onClick }) {
    return (
        <button className="nav-button" style={{ backgroundColor: color }} onClick={onClick}>{text}</button>
    )
  
}