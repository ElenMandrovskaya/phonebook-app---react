import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth/auth-selectors";
import { NavList, NavItem } from "./Navigation.styled";
import { NavLink } from "react-router-dom";

export function Navigation() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
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
            {isLoggedIn ? <NavItem>
                <NavLink
                    exact
                    to="/contacts"
                    className="navlink"
                    activeClassName="activelink">
                    Contacts</NavLink>
            </NavItem> : ''}
        </NavList>
    )
}