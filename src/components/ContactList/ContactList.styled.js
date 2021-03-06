import styled from "@emotion/styled";

export const List = styled.ul`
display: flex;
flex-direction: column;
`;

export const Item = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 25px;
font-size: 24px;
width:400px;
`;

export const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
  width: 100px;
  height: 30px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
  background-color: #ff0d82;
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  border: none;
  padding: 5px;
  &:hover {
  background-color: #22c1c3;
}
&:focus {
  background-color: #22c1c3;
}
`;