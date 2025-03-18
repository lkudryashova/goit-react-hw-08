import s from "./RegistrationForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
YupPassword(Yup);

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const registrationFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email().required("Required"),
  password: Yup.string().password().required("Required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (credentials, options) => {
    dispatch(register(credentials));
    options.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registrationFormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <label className={s.label}>
          <span className={s.inputLabel}>Name</span>
          <Field className={s.inputItem} type="text" name="name" />
          <ErrorMessage className={s.error} name="name" component="span" />
        </label>
        <label className={s.label}>
          <span className={s.inputLabel}>Email</span>
          <Field
            className={s.inputItem}
            type="text"
            name="email"
            autoComplete="new-email"
          />
          <ErrorMessage className={s.error} name="email" component="span" />
        </label>
        <label className={s.label}>
          <span className={s.inputLabel}>Password</span>
          <Field
            className={s.inputItem}
            type="password"
            name="password"
            autoComplete="new-password"
          />
          <ErrorMessage className={s.error} name="password" component="span" />
        </label>
        <button className={s.submitBtn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};
export default RegistrationForm;
