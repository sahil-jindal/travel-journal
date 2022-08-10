import "./navbar.css";
import planet from "../../images/Planet.svg"

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={planet} alt="planet" className="planet--size" />
      <span className="text">my travel journal</span>
    </div>
  )
}
