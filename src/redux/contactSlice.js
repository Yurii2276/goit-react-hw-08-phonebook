import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { createSelector } from 'reselect';
import { selectContacts, selectContactsFilter } from './contacts.selectors';
import { requestAddContact, requestAllContacts, requestDeleteContact } from './services/phonebookApi';

export const fetchContacts = createAsyncThunk(
  'contacns/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await requestAllContacts();

      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacns/addContact',
  async (contact, thunkAPI) => {
    try {
      const contacts = await requestAddContact(contact);

      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deliteContacts = createAsyncThunk(
  'contacns/deliteContact',
  async (contactId, thunkAPI) => {
    try {
      const contacts = await requestDeleteContact(contactId);

      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
        state.filter = action.payload;
    } 
   },

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })

      .addCase(addContacts.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items.unshift(action.payload);
      })
      .addCase(addContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      
      .addCase(deliteContacts.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(deliteContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deliteContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      }),
});

export const selectVisibleContacts = createSelector(
  [selectContacts, selectContactsFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const { setFilter } = contactSlice.actions;

export default contactSlice.reducer;
