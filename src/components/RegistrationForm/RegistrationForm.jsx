import css from "./RegistrationForm.module.css";

import * as Yup from "yup";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/authOperations";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthBar from "react-password-strength-bar-with-style-item";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "The name is too short!")
      .max(50, "The name is too long!")
      .required("Required!"),
    email: Yup.string().email("Invalid email").required("Required!"),
    password: Yup.string().min(7, "Too short!").required("Required!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required!"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values))
      .unwrap()
      .then((response) => {
        toast.success(`Welcome, ${response.user.name}`);
        resetForm();
        navigate("/");
      })
      .catch(() => {
        toast.error("This email is already in use.");
      });
  };

  return (
    <div className={css.container}>
      <div className={css.containerForm}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <Form className={css.form}>
              <div className={css.containerTitle}>
                <svg
                  className={css.iconTitle}
                  width="54"
                  height="54"
                  fill="#081222"
                >
                  <use href="/icons.svg#wallet"></use>
                </svg>
                <h2 className={css.titleRegistration}>Spendy</h2>
              </div>

              <div className={css.registrationValue}>
                <div className={css.label}>
                  <svg className={css.icon} width="24" height="24">
                    <use href="/icons.svg#user"></use>
                  </svg>
                  <Field
                    type="text"
                    name="name"
                    className={css.input}
                    placeholder="Name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className={css.error}
                  />
                </div>

                <div className={css.label}>
                  <svg className={css.icon} width="24" height="24">
                    <use href="/icons.svg#mail"></use>
                  </svg>
                  <Field
                    type="email"
                    name="email"
                    className={css.input}
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={css.error}
                  />
                </div>

                <div className={css.label}>
                  <svg className={css.icon} width="24" height="24">
                    <use href="/icons.svg#lock"></use>
                  </svg>
                  <Field
                    type="password"
                    name="password"
                    className={css.input}
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className={css.error}
                  />
                </div>

                <div>
                  <div className={css.label}>
                    <svg className={css.icon} width="24" height="24">
                      <use href="/icons.svg#lock"></use>
                    </svg>
                    <Field
                      type="password"
                      name="confirmPassword"
                      className={css.input}
                      placeholder="Confirm Password"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className={css.error}
                    />
                  </div>
                  {values.confirmPassword && (
                    <PasswordStrengthBar
                      password={values.confirmPassword}
                      minStrength={2}
                      style={{ width: "100%", marginTop: "5px" }}
                    />
                  )}
                </div>
              </div>

              <div className={css.containerButton}>
                <button type="submit" className={css.button}>
                  Register
                </button>
                <Link to="/login" className={css.linkButton}>
                  Log in
                </Link>
              </div>
            </Form>
          )}
        </Formik>
        <img
          className={css.image}
          src="/src/assets/images/good-2x.png"
          alt="Wallet icon"
        />
      </div>
    </div>
  );
};

export default RegistrationForm;
