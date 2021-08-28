import styled from "@emotion/styled";

export const UserContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 350px;
font-size: 16px;
font-weight: 700;
`;
export const InfoWrap = styled.div`
`;
export const UserName = styled.p`
`;
export const UserEmail = styled.p`
`;

export const Avatar = styled.img`
width: 35px;
height: 35px;
border-radius: 50%;
background-color: white;
`;

export const LogOutBtn = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
background-color: transparent;
height: 40px;
border: none;
font-weight: 600;
cursor: pointer;
`;