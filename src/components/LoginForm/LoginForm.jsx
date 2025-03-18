import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { login } from "../../redux/auth/operations";
import s from "./LoginForm.module.css";

export default function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .then(() => navigate("/"));
    actions.resetForm();
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.label}>
            <span>Email</span>
            <Field name="email" />
          </label>
          <label className={s.label}>
            <span>Password</span>
            <Field name="password" type="password" />
          </label>
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </div>
  );
}
