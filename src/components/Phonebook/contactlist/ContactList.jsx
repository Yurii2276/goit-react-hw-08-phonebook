import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  deliteContacts,
  selectVisibleContacts,
} from '../../../redux/contactSlice';

import { Box, List, ListItem, Text, IconButton, useColorModeValue } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

export default function ContactList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);
  const bg = useColorModeValue('gray.100', 'gray.700');

  const handleDeleteContact = contactId => {
    dispatch(deliteContacts(contactId));
  };

  return (
    <Box bg={bg} p={5} rounded="md" boxShadow="base" mt={10} width={{ base: '100%', md: '70%' }}>
  <List spacing={3}>
    {visibleContacts.map(contact => (
      <ListItem 
        key={contact.id} 
        display="flex" 
        justifyContent="space-between" 
        alignItems="center" 
        p={2} 
        rounded="md" 
        _hover={{ bg: 'gray.200' }}
        width="100%" 
      >
        <Text fontSize="md" isTruncated> 
          {contact.name}: {contact.number}
        </Text>
        <IconButton
          aria-label={`Delete ${contact.name}`}
          icon={<DeleteIcon />}
          onClick={() => handleDeleteContact(contact.id)}
          colorScheme="red"
          size="sm" 
        />
      </ListItem>
    ))}
  </List>
</Box>
   
 
  );
}
