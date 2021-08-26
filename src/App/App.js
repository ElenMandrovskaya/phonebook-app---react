import { ToastContainer } from 'react-toastify';
import { Main, Section } from './App.styled';
import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactList } from "../components/ContactList/ContactList";
import { Filter } from "../components/Filter/Filter";
import { Title } from "../components/Title/Title";
import { AppBar } from '../components/AppBar/AppBar';
import { RegistrationForm } from '../components/RgisterationForm/RegistrationForm';
import { UserMenu } from '../components/UserMenu/UserMenu';
import { LoginForm } from '../components/LoginFrom/LoginForm';

export default function App() {

  return (
    <>
      <AppBar />
      <Main>
        <Section>
          <Title title={"Add contact"} />
          <ContactForm/>
        </Section>
        <Section>
          <Title title="Search contact" />
          <Filter />
        </Section>
        <Section>
          <Title title="Contacts"/>
          <ContactList />
        </Section>
        <Section>
          <RegistrationForm />
        </Section>
        <UserMenu />
        <LoginForm />
      </Main>
      <ToastContainer />
      </>
  )
}



