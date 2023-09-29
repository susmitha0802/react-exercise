import { NavLink } from "react-router-dom";
export const NavBar = () => {
  return (
    <div>
        <NavLink to="/home/:username" style={{margin:10}}>Greetings</NavLink>
        <NavLink to="/login" style={{margin:10}}>Login</NavLink>
        <NavLink to="/counter" style={{margin:10}}>Counter</NavLink>
    </div>
  )
}
