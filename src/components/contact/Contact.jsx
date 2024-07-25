import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

function Contact({ id, name, number, handleDeleteContact }) {
  return (
    <li className={css.contact}>
      <ul>
        <li>
          <FaUser size={16} /> <p>{name}</p>
        </li>
        <li>
          <FaPhoneAlt size={16} /> <p>{number}</p>
        </li>
      </ul>
      <button
        type="button"
        onClick={() => {
          handleDeleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
