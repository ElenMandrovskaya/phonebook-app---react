import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactList } from "../components/ContactList/ContactList";
import { Filter } from "../components/Filter/Filter";
import { Title } from "../components/Title/Title";
import { ContactsWrap } from "../App/App.styled";
import { ContactsSection } from "../App/App.styled";

export default function ContactsPage() {
    return (
        <ContactsSection>
            <ContactsWrap>
                <Title title={"Add contact"} />
                <ContactForm />
                <Title title="Search contact" />
                <Filter />
            </ContactsWrap>
            <ContactsWrap>
            <Title title="Contacts list"/>
            <ContactList/>
            </ContactsWrap>
        </ContactsSection>
    )
}