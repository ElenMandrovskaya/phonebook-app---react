import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { List, Item, Button } from "./ContactList.styled";
import * as contactOperations from "../../redux/contacts/contacts-operations";
import { getFilteredContacts } from "../../redux/contacts/contacts-selectors";


export function ContactList() {
    const dispatch = useDispatch();
    const contacts = useSelector(getFilteredContacts);

    useEffect(() => dispatch(contactOperations.fetchContacts()), [dispatch]);

    return (
        <List>
            
            {contacts.map(({ id, name, number }) => (
                <Item key={id}>
                    {name}: {number}
                    <Button onClick={() => dispatch(contactOperations.removeContact(id))}>
                        Delete
                    </Button>
                </Item>
            ))}
        </List>
    )
}

