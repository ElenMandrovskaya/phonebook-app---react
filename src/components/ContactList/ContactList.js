import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { List, Item, Button } from "./ContactList.styled";
import { getAllContacts } from "../../redux/contacts/contacts-selectors";
import * as contactOperations from "../../redux/contacts/contacts-operations";


export function ContactList() {
    const dispatch = useDispatch();
    const contacts = useSelector(getAllContacts);

    useEffect(() => {
    dispatch(contactOperations.getContacts());
    }, [dispatch]);

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

