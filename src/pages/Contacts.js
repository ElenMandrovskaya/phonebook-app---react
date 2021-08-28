import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactList } from "../components/ContactList/ContactList";
import { Filter } from "../components/Filter/Filter";
import { Title } from "../components/Title/Title";

export default function ContactsPage() {
    return (
        <>
            <Title title={"Add contact"} />
            <ContactForm />
            <Title title="Search contact" />
            <Filter />
            <Title title="Contacts"/>
            <ContactList />
        </>
    )
}