import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "../contactForm/ContactForm";
import SearchBox from "../searchBox/SearchBox";
import ContactList from "../contactList/ContactList";

function App() {
  const [contacts, setContact] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts) {
      return savedContacts;
    }
    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  const handleAddContact = (id, values) => {
    setContact([...contacts, { id, ...values }]);
  };

  const handleDeleteContact = (deleteId) => {
    setContact(contacts.filter((contact) => contact.id !== deleteId));
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [searchValue, setSearchValue] = useState("");

  const handleChangeSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredContacts =
    contacts &&
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleAddContact={handleAddContact} />
        <SearchBox
          searchValue={searchValue}
          handleChangeSearch={handleChangeSearch}
        />
        <ContactList
          contacts={filteredContacts}
          handleDeleteContact={handleDeleteContact}
        />
      </div>
    </>
  );
}

export default App;
