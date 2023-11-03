import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { Flex, Box, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectAuthAuthenticated } from 'redux/auth.selectors';

export default function Navigation() {
  const authenticated = useSelector(selectAuthAuthenticated);

  return (
    <Box bg="blue.500" px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box>
          <Link as={RouterLink} to="/" px={2} color="white" fontSize="2xl">
            Home
          </Link>

          <Link
            as={RouterLink}
            to="/contacts"
            px={2}
            color="white"
            fontSize="2xl"
          >
            Contacts
          </Link>
        </Box>
        <Flex>
          {authenticated ? (
            <UserMenu />
          ) : (
            <>
              <Link
                as={RouterLink}
                to="/login"
                px={2}
                color="white"
                fontSize="1xl"
              >
                Log In
              </Link>
              <Link
                as={RouterLink}
                to="/register"
                px={2}
                color="white"
                fontSize="1xl"
              >
                Register
              </Link>
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}
