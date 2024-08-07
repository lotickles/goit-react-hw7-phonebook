import { createSelector } from '@reduxjs/toolkit';
// Selector for retrieving contacts from the state
export const selectContacts = state => state.contacts.contacts;

// Selector for retrieving the curreactions'; filter value
export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterredString) => {
    if (!filterredString) {
      return contacts; // if no typed string in searchbox ,saved contacts will show
    }
    const lowerCaseFilterredString = filterredString.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCaseFilterredString)
    ); //if serchbox triggered -typed letter or item will show and if contact is found -will show it
  }
);
