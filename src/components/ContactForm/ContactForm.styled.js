import styled from "@emotion/styled";

export const Form = styled.form`
`;

export const Label = styled.label`
display: flex;
flex-direction: column;
margin: 0 auto;
width: 400px;
margin-bottom: 20px;
`;

export const Input = styled.input`
height: 40px;
border: 1px solid #ff0d82;
border-radius: 4px;
font-size: 16px;
margin-top: 10px;
&:focus {
    outline: none;
    border: 1px solid #22c1c3;
}
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 9px;
  color: #fff;
  text-transform: uppercase;
  background-color: #ff0d82;
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  border: none;
  padding: 5px;
  margin: 0 auto;
  font-weight: 600;
&:hover {
  background-color: #22c1c3;
}
&:focus {
  background-color: #22c1c3;
}
`;