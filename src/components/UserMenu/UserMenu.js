import { useDispatch, useSelector } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operaions';
import { authSelectors } from '../../redux/auth/auth-selectors'
import { UserContainer, InfoWrap, UserName, UserEmail, Avatar, LogOutBtn } from "./UserMenu.styled";
import userAvatar from '../../images/user-avatar.png';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);
    const email = useSelector(authSelectors.getUserEmail);
    return (
        <UserContainer>
            <Avatar src={userAvatar}/>
            <InfoWrap>
                <UserName>Welcome, {name}</UserName>
                <UserEmail>{email}</UserEmail>
            </InfoWrap>
            <LogOutBtn type="button" onClick={() => dispatch(authOperations.logout())}><ExitToAppIcon style={{ fontSize: 40 }}/>Log out</LogOutBtn>
        </UserContainer>
    )
}