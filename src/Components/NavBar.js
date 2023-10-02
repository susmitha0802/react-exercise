import { NavLink } from "react-router-dom";
export const NavBar = () => {
  return (
    <div>
        <NavLink to="/home/:username" className="style-margin">Greetings</NavLink>
        <NavLink to="/login" className="style-margin">Login</NavLink>
        <NavLink to="/counter" className="style-margin">Counter</NavLink>
        <NavLink to="/joke" className="style-margin">Joke</NavLink>
        <NavLink to="/postCall" className="style-margin">PostCall</NavLink>
    </div>
  )
}
