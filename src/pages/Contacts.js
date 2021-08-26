import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactList } from "../components/ContactList/ContactList";
import { Filter } from "../components/Filter/Filter";
import { UserMenu } from "../components/UserMenu/UserMenu";
import { Title } from "../components/Title/Title";

export function ContactsPage() {
    return (
        <>
            <Title title={"Add contact"} />
            <ContactForm />
            <Title title="Search contact" />
            <Filter />
            <Title title="Yuor profile"/>
            <UserMenu />
            <Title title="Contacts"/>
            <ContactList />
        </>
    )
}