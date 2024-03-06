import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import {VikeLink} from '#root/renderer/VikeLink';
import {useMutation} from '@tanstack/react-query';
import {Field, Form, Formik} from 'formik';
import {
  validateEmail,
  validateName,
  validatePassword,
} from '#root/pages/register/register_helpers';
import {useAuth} from '#root/contexts/AuthContext';

interface LoginFormProps {}

export const LoginForm: React.FC<LoginFormProps> = (props) => {
  // const mutation = useMutation({
  //   mutationFn: (formData: any) => {
  //     const userLoginData = `${formData.email}:${formData.password}`;
  //     return fetch(`http://localhost:8080/account/login`, {
  //       headers: {
  //         Authorization: `Basic ${btoa(userLoginData)}`,
  //       },
  //       method: 'GET',
  //     });
  //   },
  // });

  const {login} = useAuth();

  const handleSubmit = async (formData: {email: string; password: string}) => {
    await login(formData.email, formData.password);
  };

  return (
    <Box>
      <Formik initialValues={{email: '', password: ''}} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <Field name="email" validate={validateEmail}>
              {({field, form}) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel>Email Address</FormLabel>
                  <Input {...field} placeholder="john.doe@example.com" />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password" validate={validatePassword}>
              {({field, form}) => (
                <FormControl
                  isInvalid={form.errors.password && form.touched.password}
                >
                  <FormLabel>Password</FormLabel>
                  <Input type="password" {...field} placeholder="********" />
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button mt={4} colorScheme="teal" type="submit" width="full">
              Login
            </Button>
          </Form>
        )}
      </Formik>
      <Box mt={2} textAlign="center">
        <VikeLink href="/register">
          <Text color="teal.500">
            {"Don't have an account? Register here."}
          </Text>
        </VikeLink>
      </Box>
    </Box>
  );
};
