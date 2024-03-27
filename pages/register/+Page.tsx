import React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  Text,
  Flex,
  Image,
} from '@chakra-ui/react';
import {useMutation} from '@tanstack/react-query';
import {Field, Form, Formik} from 'formik';
import {
  validatePassword,
  validateEmail,
  validateName,
} from '#root/pages/register/register_helpers';
import {VikeLink} from '#root/renderer/VikeLink';
import {redirect} from '#root/contexts/AuthContext';
import {ApiConfig} from '#root/common/api_config';

export default function Page() {
  const mutation = useMutation({
    mutationFn: (formData: any) => {
      return fetch(ApiConfig.register, {
        body: JSON.stringify(formData),
        method: 'POST',
      });
    },
    onSuccess: async () => {
      await redirect('/');
    },
  });

  return (
    <>
      <Box w="293px" m={8} h={'120px'} borderRadius={'lg'} overflow={'hidden'}>
        <Flex h="100%" alignItems="center" justifyContent="center">
          <Image src={'/logo.png'} />
        </Flex>
      </Box>
      <Box
        p={8}
        mx="auto"
        w="293px"
        bg="white"
        rounded="lg"
        shadow="md"
        overflow="hidden"
      >
        <Formik
          initialValues={{email: '', name: '', password: ''}}
          onSubmit={(values, actions) => {
            mutation.mutate(values, {
              onSuccess: (data) => {
                // Handle success, if needed
                console.log('Data from server:', data);
              },
              onError: (error) => {
                // Handle error, if needed
                console.error('Error from server:', error);
              },
            });
          }}
        >
          {() => (
            <Form>
              <Field name="email" validate={validateEmail}>
                {({field, form, meta}) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel>Email Address</FormLabel>
                    <Input
                      {...field}
                      placeholder="john.doe@example.com"
                      mb={meta.error ? 0 : 6}
                    />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="name" validate={validateName}>
                {({field, form, meta}) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel>Username</FormLabel>
                    <Input
                      {...field}
                      placeholder="TvojTatkoRecords"
                      mb={meta.error ? 0 : 6}
                    />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="password" validate={validatePassword}>
                {({field, form, meta}) => (
                  <FormControl
                    isInvalid={form.errors.password && form.touched.password}
                  >
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      {...field}
                      placeholder="********"
                      mb={meta.error ? 0 : 6}
                    />
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                mt={4}
                background={'linear-gradient(to right, #ff5757, #8c52ff)'}
                color="white"
                _hover={{
                  background: 'linear-gradient(to right, #8c52ff, #ff5757)',
                  color: 'white',
                }}
                type="submit"
                width="full"
              >
                Register
              </Button>
            </Form>
          )}
        </Formik>
        <Box mt={2} textAlign="center">
          <VikeLink href="/">
            <Text
              backgroundImage="linear-gradient(to right, #ff5757, #8c52ff)"
              color="transparent"
              style={{WebkitBackgroundClip: 'text'}}
            >
              Already registered? Log in here.
            </Text>
          </VikeLink>
        </Box>
      </Box>
    </>
  );
}
