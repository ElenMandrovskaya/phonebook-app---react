import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Label, Input, Button } from '../ContactForm/ContactForm.styled';
import * as authOperations from '../../redux/auth/auth-operaions';
import DoneIcon from '@material-ui/icons/Done';

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailId = uuidv4();
  const passwordId = uuidv4();
  const dispatch = useDispatch();
  
  const handleChange = (evt) => {
    const { name, value } = evt.currentTarget;
    switch (name) {

      case "email":
        setEmail(value);
            break;
        
      case "password":
        setPassword(value);
        break;

      default:
        return;
    }
    };
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (!email || !password) {
            toast.info('Fill in all the fields')
        return;
      }
      dispatch(authOperations.login({ email, password }));
      resetForm();
   };

   const resetForm = () => {
       setEmail("");
       setPassword("");
   };
  return (
      <Form onSubmit={handleSubmit}>

        <Label htmlFor={emailId}> Email
          <Input
            id={emailId}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
            title="Email может состоять из букв и цифр и представлен в формате example@gmail.com"
            placeholder="example@gmail.com"
            required
          />
          </Label>

          <Label htmlFor={passwordId}> Password
            <Input
                id={passwordId}
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
                required
            />
        </Label>

        <Button type="submit">
          Log in <DoneIcon style={{ fontSize: 20, marginLeft: 7 }}/>
        </Button>
      </Form>
    );
}