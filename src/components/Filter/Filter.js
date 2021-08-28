import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from "./Filter.styled";
import { getFilter } from '../../redux/contacts/contacts-selectors';
import { filterContacts } from '../../redux/contacts/contact-slice';

export function Filter() {
    const value = useSelector(getFilter);
    const dispatch = useDispatch();
    return (
        <Label>Find contacts by name
            <Input
                type="text"
                value={value}
                onChange={(e) => dispatch(filterContacts(e.currentTarget.value))}
                placeholder="Enter contact name"/>
        </Label>
    )
}

