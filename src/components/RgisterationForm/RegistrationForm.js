import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { addContact } from '../../redux/contacts/contacts-operations';
import { Form, Label, Input, Button } from '../ContactForm/ContactForm.styled';

export function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nameId = uuidv4();
  const emailId = uuidv4();
  const passwordId = uuidv4();
//   const dispatch = useDispatch();
  
  const handleChange = (evt) => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;

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
        if (!name || !email || !password) {
            toast.info('Fill in all the fields')
        return;
      }
    //   dispatch(addContact({name, number}))
      resetForm();
   };

   const resetForm = () => {
       setName("");
       setEmail("");
       setPassword("");
   };
  return (
      <Form onSubmit={handleSubmit}>
        <Label htmlFor={nameId}> Name
          <Input
            id={nameId}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            placeholder="Yuor name"
            required
          />
        </Label>

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
          Register
        </Button>
      </Form>
    );
}