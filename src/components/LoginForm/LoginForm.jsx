import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import s from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validSchema = Yup.object().shape({
    email: Yup.string()
      .required('The field cannot be empty')
      .max(64, 'Maximum 64 characters')
      .email(),
    password: Yup.string()
      .required('The field cannot be empty')
      .min(8, 'Minimum 8 characters')
      .max(64, 'Maximum 64 characters'),
  });

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .then(() => navigate('/statistics', { replace: true }))
      .catch(error => toast.error(error.message || 'Invalid data'));
    // actions.resetForm();
  };

  return (
    <div>
      <div className={s.formWrapper}>
        <img
          className={s.logo}
          src="../../../public/logo.svg"
          width={182}
          height={94}
          alt="Logo"
        />
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validSchema}
        >
          <Form noValidate className={s.form}>
            <div className={s.inputsWrap}>
              <Field name="email">
                {({ field, meta }) => (
                  <div
                    className={`${s.inputIconWrap} ${
                      meta.touched && meta.error ? s.errorWrap : ''
                    }`}
                  >
                    <svg
                      className={`${s.icon} ${
                        meta.touched && meta.error ? s.iconError : ''
                      }`}
                      width={24}
                      height={24}
                    >
                      <use href="/icons.svg#mail"></use>
                    </svg>

                    <input
                      {...field}
                      type="email"
                      placeholder="E-mail"
                      className={`${s.input} ${
                        meta.touched && meta.error ? s.inputError : ''
                      }`}
                    />

                    {meta.touched && meta.error && (
                      <p className={s.errorMes}>{meta.error}</p>
                    )}
                  </div>
                )}
              </Field>

              <Field name="password">
                {({ field, meta }) => (
                  <div
                    className={`${s.inputIconWrap} ${
                      meta.touched && meta.error ? s.errorWrap : ''
                    }`}
                  >
                    <svg
                      className={`${s.icon} ${
                        meta.touched && meta.error ? s.iconError : ''
                      }`}
                      width={24}
                      height={24}
                    >
                      <use href="/icons.svg#lock"></use>
                    </svg>

                    <input
                      {...field}
                      type="password"
                      placeholder="Password"
                      className={`${s.input} ${
                        meta.touched && meta.error ? s.inputError : ''
                      }`}
                    />

                    {meta.touched && meta.error && (
                      <p className={s.errorMes}>{meta.error}</p>
                    )}
                  </div>
                )}
              </Field>
            </div>

            <div className={s.btnWrap}>
              <button className={s.btnLogin} type="submit">
                Log in
              </button>
              <button
                className={s.btnRegistr}
                type="button"
                onClick={() => navigate('/register')}
              >
                Register
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
