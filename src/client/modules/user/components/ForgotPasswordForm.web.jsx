import React from 'react';
import PropTypes from 'prop-types';

import { withFormik } from 'formik';
import Yup from 'yup';

import { Form, Button, Alert, RenderField } from '../../common/components/web';
import Field from './FieldAdapter';

const ForgotPasswordForm = ({ values, handleSubmit, status, isSubmitting, errors }) => {
  return (
    <Form name="forgotPassword" onSubmit={handleSubmit}>
      {status && status.sent && <Alert color="success">Reset password instructions have been emailed to you.</Alert>}
      <Field name="email" component={RenderField} type="email" label="Email" value={values.email} />
      <div className="text-center">
        {errors.form && <Alert color="error">{errors.form}</Alert>}
        <Button color="primary" type="submit" disabled={isSubmitting}>
          Send Reset Instructions
        </Button>
      </div>
    </Form>
  );
};

ForgotPasswordForm.propTypes = {
  handleSubmit: PropTypes.func,
  sent: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  errors: PropTypes.object,
  values: PropTypes.object,
  status: PropTypes.object
};

const transformApiErrors = apiErrors => {
  const errors = {};
  errors['form'] = 'Reset password failed!';
  apiErrors.map(error => {
    if (error.field && error.message) {
      errors[error.field] = error.message;
    }
  });
  return errors;
};

const ForgotPasswordFormWithFormik = withFormik({
  mapPropsToValues() {
    return {
      email: ''
    };
  },
  async handleSubmit(values, { setStatus, resetForm, setErrors, setSubmitting, props: { onSubmit } }) {
    const result = await onSubmit(values);

    if (result === true) {
      resetForm();
      setStatus({ sent: true });
    } else if (result && result.errors) {
      setErrors(transformApiErrors(result.errors));
    }

    setSubmitting(false);
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!')
  })
})(ForgotPasswordForm);

ForgotPasswordFormWithFormik.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default ForgotPasswordFormWithFormik;
