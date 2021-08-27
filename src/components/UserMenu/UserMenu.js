import { useDispatch, useSelector } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operaions';
import { authSelectors } from '../../redux/auth/auth-selectors'
import { UserContainer, UserName, UserEmail, Avatar, LogOutBtn } from "./UserMenu.styled";

export function UserMenu() {
  const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);
    const email = useSelector(authSelectors.getUserEmail);
    return (
        <UserContainer>
            <Avatar />
            <UserName>Welcome, {name}</UserName>
            <UserEmail>{email}</UserEmail>
            <LogOutBtn type="button" onClick={() => dispatch(authOperations.logout())}>Log Out</LogOutBtn>
        </UserContainer>
    )
}