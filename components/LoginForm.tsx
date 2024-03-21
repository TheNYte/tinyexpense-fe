import React, {HTMLAttributes} from 'react';
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
import {Field, FieldAttributes, Form, Formik, FormikProps} from 'formik';
import {
  validateEmail,
  validatePassword,
} from '#root/pages/register/register_helpers';
import {useAuth} from '#root/contexts/AuthContext';

interface OwnProps {}

type Props = OwnProps;

export const LoginForm: React.FC<Props> = (_props) => {
  const {login} = useAuth();

  const handleSubmit = async (formData: {email: string; password: string}) => {
    await login(formData.email, formData.password);
  };

  return (
    <Box m={8} bgColor={'white'} display={'flex'} flexDir={'column'} gap={4}>
      <Formik initialValues={{email: '', password: ''}} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <Field name="email" validate={validateEmail}>
              {({field, form, meta}) => {
                return (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel>Email Address</FormLabel>
                    <Input
                      {...field}
                      placeholder="domipapa@tinyexpense.com"
                      mb={meta.error ? 0 : 6}
                    />
                    {meta.error && (
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    )}
                  </FormControl>
                );
              }}
            </Field>
            <Field name="password" validate={validatePassword}>
              {({field, form, meta}) => (
                <FormControl
                  mt={2}
                  isInvalid={form.errors.password && form.touched.password}
                >
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    {...field}
                    placeholder="********"
                    mb={meta.error ? 0 : 6}
                  />
                  {meta.error && (
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  )}
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
              Login
            </Button>
          </Form>
        )}
      </Formik>
      <Box mt={2} textAlign="center">
        <VikeLink href="/register">
          <Text
            backgroundImage="linear-gradient(to right, #ff5757, #8c52ff)"
            color="transparent"
            style={{WebkitBackgroundClip: 'text'}}
          >
            {"Don't have an account? Register here."}
          </Text>
        </VikeLink>
      </Box>
    </Box>
  );
};
