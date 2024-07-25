import { useSelector } from "react-redux";
import Contact from "../contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

function ContactList() {
  const contacts = useSelector(selectContacts);
  const searchValue = useSelector(selectNameFilter);

  const filteredContacts =
    contacts &&
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <ul className={css.contactList}>
      {filteredContacts.length === 0 ? (
        <p>No Contacts</p>
      ) : (
        filteredContacts.map(({ name, number, id }) => {
          return <Contact name={name} number={number} key={id} id={id} />;
        })
      )}
    </ul>
  );
}

export default ContactList;
