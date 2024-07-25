import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
  name: "contacts",
  initialState() {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts) {
      return { items: savedContacts };
    }
    return { items: [] };
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
        localStorage.setItem("contacts", JSON.stringify(state.items));
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            ...contact,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        (contact) => contact.id === action.payload
      );
      state.items.splice(index, 1);
      localStorage.setItem("contacts", JSON.stringify(state.items));
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
