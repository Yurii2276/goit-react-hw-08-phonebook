import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addContacts } from '../../../redux/contactSlice';
import { selectContacts } from 'redux/contacts.selectors';

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
} from '@chakra-ui/react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter name and telephone number!');
      return;
    }
    const newContact = {
      createdAt: new Date().toISOString(),
      name: name,
      number: number,
    };

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts!`);

      return;
    }
    dispatch(addContacts(newContact));
    setName('');
    setNumber('');
  };

  return (
    <Box width={{ base: '100%', md: '50%' }} ml={0} mt={10}>
      <VStack as="form" onSubmit={handleSubmit} spacing={4}>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            value={name}
            onChange={handleInputChange}
            name="name"
            type="text"
          />
        </FormControl>

        <FormControl id="number" isRequired>
          <FormLabel>Number</FormLabel>
          <Input
            value={number}
            onChange={handleInputChange}
            name="number"
            type="text"
          />
        </FormControl>

        <Button colorScheme="blue" type="submit">
          Add contact
        </Button>
      </VStack>
    </Box>

  );
}
