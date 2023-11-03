import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectContactsFilter } from 'redux/contacts.selectors';
import { setFilter } from 'redux/contactSlice';

import { FormControl, FormLabel, Input, Box } from '@chakra-ui/react';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  const filterByName = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Box width={{ base: '100%', md: '50%' }} ml={0} mt={10}>
      <FormControl>
        <FormLabel>Find contacts by name</FormLabel>
        <Input
          onChange={filterByName}
          value={filter}
          placeholder="Enter to filter..."
          required
        />
      </FormControl>
    </Box>
  );
}
