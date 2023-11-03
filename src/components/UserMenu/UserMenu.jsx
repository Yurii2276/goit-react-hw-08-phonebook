import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail } from 'redux/auth.selectors';
import { logOutThunk } from 'redux/authReducer';
import { Flex, Text, Button } from '@chakra-ui/react';

export default function UserMenu() {
  const userEmail = useSelector(selectUserEmail);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <Flex alignItems={'center'}>
      <Text color="white" pr={4}>
        {userEmail}
      </Text>
      <Button colorScheme="red" onClick={onLogOut}>
        Logout
      </Button>
    </Flex>
  );
}
