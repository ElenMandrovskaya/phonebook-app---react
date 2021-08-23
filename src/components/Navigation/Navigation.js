import { NavList, NavItem } from "./Navigation.styled";
import { NavLink } from "react-router-dom";

export function Navigation() {
    return (
        <NavList>
            <NavItem>
                <NavLink
                    exact
                    to="/"
                    className="navlink"
                    activeClassName="activelink">
                    Logo</NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    exact
                    to="/"
                    className="navlink"
                    activeClassName="activelink">
                    Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    to="/"
                    className="navlink"
                    activeClassName="activelink">
                    Registration</NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    to="/"
                    className="navlink"
                    activeClassName="activelink">
                    Log in</NavLink>
            </NavItem>
        </NavList>
    )
}