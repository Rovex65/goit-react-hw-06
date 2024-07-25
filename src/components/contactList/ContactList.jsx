import Contact from "../contact/Contact";
import css from "./ContactList.module.css";

function ContactList({ contacts, handleDeleteContact }) {
  return (
    <ul className={css.contactList}>
      {contacts.length === 0 ? (
        <p>No Contacts</p>
      ) : (
        contacts.map(({ name, number, id }) => {
          return (
            <Contact
              name={name}
              number={number}
              key={id}
              id={id}
              handleDeleteContact={handleDeleteContact}
            />
          );
        })
      )}
    </ul>
  );
}

export default ContactList;
