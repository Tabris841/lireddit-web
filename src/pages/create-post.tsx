import React, { useEffect } from 'react';
import { withUrqlClient } from 'next-urql';
import { Box, Button } from '@chakra-ui/core';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';

import { createUrqlClient } from '../utils/createUrqlClient';
import { InputField } from '../components/InputField';
import { useCreatePostMutation } from '../generated/graphql';
import { Layout } from '../components/Layout';
import { useIsAuth } from '../utils/useIsAuth';

const CretePost: React.FC<{}> = ({}) => {
  const [, createPost] = useCreatePostMutation();
  const router = useRouter();

  useIsAuth();

  return (
    <Layout variant={'small'}>
      <Formik
        initialValues={{ title: '', text: '' }}
        onSubmit={async (values) => {
          const { error } = await createPost({ input: values });
          if (!error) {
            router.push('/');
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField label="Title" placeholder="Title" name="title" />
            <Box mt={4}>
              <InputField
                label="Text"
                placeholder="Text"
                name="text"
                textarea
              />
            </Box>
            <Button
              mt={4}
              type="submit"
              isLoading={isSubmitting}
              variantColor="teal"
            >
              Create Post
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(CretePost);
