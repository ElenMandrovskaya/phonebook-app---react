import { Header } from "./AppBar.styled";
import { Navigation } from "../Navigation/Navigation";
import { AuthNav } from "../AuthNav/AuthNav";
import { UserMenu } from "../UserMenu/UserMenu";

export function AppBar() {
    return (
    <Header>
        <Navigation />
        <AuthNav />
        <UserMenu />
    </Header>
  )
}