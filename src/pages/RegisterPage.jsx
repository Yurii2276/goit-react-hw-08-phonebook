import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/authReducer';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Box,
} from '@chakra-ui/react';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    console.log(data);
    dispatch(registerThunk(data));
    reset();
  };

  return (
    <Box width={{ base: '100%', md: '50%' }} ml={0} mt={10}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.email}>
          <FormLabel htmlFor="email">Email:</FormLabel>
          <Input
            id="email"
            type="email"
            {...register('email', { required: 'This field is required' })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor="name">Name:</FormLabel>
          <Input
            id="name"
            type="text"
            {...register('name', { required: 'This field is required' })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.password}>
          <FormLabel htmlFor="password">Password:</FormLabel>
          <Input
            id="password"
            type="password"
            {...register('password', {
              required: 'This field is required',
              minLength: {
                value: 7,
                message: 'Password must have at least 7 characters',
              },
            })}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>

        <Button mt={4} colorScheme="blue" type="submit">
          Sign Up
        </Button>
      </form>
    </Box>

    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <label>
    //     <span>Email:</span>
    //     <input {...register('email', { required: true })} type="email" />
    //     {errors.email && <span>This field is required</span>}
    //   </label>
    //   <label>
    //     <span>Name:</span>
    //     <input {...register('name', { required: true })} type="text" />
    //     {errors.name && <span>This field is required</span>}
    //   </label>
    //   <label>
    //     <span>Password:</span>
    //     <input
    //       {...register('password', { required: true, minLength: 7 })}
    //       type="password"
    //     />
    //     {errors.password && <span>This field is required</span>}
    //   </label>

    //   <button type="submit">Sign Up</button>
    // </form>
  );
};

export default RegisterPage;
