const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getUserEmail = state => state.auth.user.email;

export const authSelectors = {
    getIsLoggedIn,
    getUserName,
    getUserEmail
}