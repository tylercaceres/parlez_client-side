import React from "react";
import "./LoginPage.scss";
import { Formik } from "formik";
import { NavLink } from "react-router-dom";

import * as Yup from "yup";
import Button from "@material-ui/core/Button";

const ValidatedLoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
    })}

    //This would be the manual way of setting up validation checks for email and password.
    /*validate={values => {
      let errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (!EmailValidator.validate(values.email)) {
        errors.email = "Invalid email address";
      }

      const passwordRegex = /(?=.*[0-9])/;
      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 8) {
        errors.password = "Password must be 8 characters long.";
      } else if (!passwordRegex.test(values.password)) {
        errors.password = "Invalida password. Must contain one number";
      }

      return errors;
    }}*/
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;

      return (
        <div className="container">
          <form onSubmit={handleSubmit} className="form-container">
            <div className="title">Parlez</div>
            <div className="inputWithIcon">
              <input
                name="email"
                type="text"
                placeholder="Email..."
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email && "error"}
              />
              <i className="iconWithEmail" />
            </div>
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}

            <div className="inputWithIcon">
              <input
                name="password"
                type="password"
                placeholder="Password..."
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password && "error"}
              />
              <i className="iconWithPassword" />
            </div>
            {errors.password && touched.password && (
              <div className="input-feedback">{errors.password}</div>
            )}
            <div className="btn-container">
              <Button type="submit" disabled={isSubmitting}>
                Login
              </Button>
              <NavLink to="/signup" className="link">
                <Button>Sign up</Button>
              </NavLink>
            </div>
          </form>
        </div>
      );
    }}
  </Formik>
);

export default ValidatedLoginForm;
