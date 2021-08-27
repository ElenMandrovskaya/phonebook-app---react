
import { NavList, NavItem } from "../Navigation/Navigation.styled";
import { NavLink } from "react-router-dom";

export function AuthNav() {
    return (
        <NavList>
            <NavItem>
                <NavLink
                    to="/register"
                    className="navlink"
                    activeClassName="activelink">
                    Registration</NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    to="/login"
                    className="navlink"
                    activeClassName="activelink">
                    Log in</NavLink>
            </NavItem>
        </NavList>
    )
}