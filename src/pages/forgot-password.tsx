import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { Box, Button } from '@chakra-ui/core';
import { withUrqlClient } from 'next-urql';

import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';
import { createUrqlClient } from '../utils/createUrqlClient';
import { useForgotPasswordMutation } from '../generated/graphql';

const ForgotPassword: React.FC<{}> = ({}) => {
  const [complete, setComplete] = useState(false);
  const [, forgotPassword] = useForgotPasswordMutation();

  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ email: '' }}
        onSubmit={async (values) => {
          await forgotPassword(values);
          setComplete(true);
        }}
      >
        {({ isSubmitting }) =>
          complete ? (
            <Box>
              {' '}
              if an account with that email exists, we sent you and email{' '}
            </Box>
          ) : (
            <Form>
              <InputField
                label="Email"
                placeholder="Email"
                name="email"
                type="email"
              />
              <Button
                mt={4}
                type="submit"
                isLoading={isSubmitting}
                variantColor="teal"
              >
                Forgot Password
              </Button>
            </Form>
          )
        }
      </Formik>
    </Wrapper>
  );
};

export default withUrqlClient(createUrqlClient)(ForgotPassword);
