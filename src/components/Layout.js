import { NavLink } from "react-router-dom";

export default function Layout() {

  return (
    <div>
      <NavLink>
        <NavLink to={"/"}>Home</NavLink>
        {/* <NavLink to={"flats"}>Home</NavLink> */}
      </NavLink>
    </div>
  )
}