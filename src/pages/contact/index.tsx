import React from 'react';
import { Formik, Form, useField, FieldHookConfig } from 'formik';
import {
  Box,
  Button,
  Container,
  LinearProgress,
  TextField,
} from '@mui/material';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Adınız gereklidir')
    .test('len', 'Adınız 20 karakterden fazla', (val) => val.length <= 20),
  email: Yup.string()
    .email('Geçerli bir e-posta girin')
    .required('E-posta gereklidir'),
  message: Yup.string()
    .required('Mesajınız gereklidir')
    .test('len', 'Mesajınız 256 karakterden fazla', (val) => val.length <= 256),
});

type MyTextFieldProps = {
  label: string;
  type: string;
} & FieldHookConfig<string>;

const MyTextField: React.FC<MyTextFieldProps> = ({ label, type, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      fullWidth
      label={label}
      type={type}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

const MyForm: React.FC = () => (
  <Container maxWidth={'sm'}>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Box mb={2}>
            <MyTextField name="name" type="text" label="Adınız" />
          </Box>
          <Box mb={2}>
            <MyTextField name="email" type="email" label="E-posta" />
          </Box>
          <Box mb={2}>
            <MyTextField
              name="message"
              type="text"
              label="Mesajınız"
              multiple
              rows={4}
            />
          </Box>
          <Box mb={2}>{isSubmitting && <LinearProgress />}</Box>
          <Box mb={2}>
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Gönder
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  </Container>
);

export default MyForm;
