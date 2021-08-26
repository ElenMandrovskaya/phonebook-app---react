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
                    activeClassName="activelogo">
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
                    exact
                    to="/contacts"
                    className="navlink"
                    activeClassName="activelink">
                    Contacts</NavLink>
            </NavItem>
        </NavList>
    )
}