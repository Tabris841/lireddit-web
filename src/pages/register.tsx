import React from 'react';
import { Form, Formik } from 'formik';
import { Box, Button } from '@chakra-ui/core';

import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ userName: '', password: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              label="Username"
              placeholder="Username"
              name="userName"
            />
            <Box mt={4}>
              <InputField
                label="Password"
                placeholder="Password"
                name="password"
                type="password"
              />
            </Box>
            <Button
              mt={4}
              type="submit"
              isLoading={isSubmitting}
              variantColor="teal"
            >
              register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
