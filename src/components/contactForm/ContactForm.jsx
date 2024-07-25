import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(30, "Too Long!").required(),
  number: Yup.string().min(3, "Too Short!").max(30, "Too Long!").required(),
});

const initialValues = {
  name: "",
  number: "",
};

function ContactForm({ handleAddContact }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    handleAddContact(nanoid(), values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <ErrorMessage className={css.error} name="name" component="span" />
        <Field type="text" name="name" id={nameFieldId}></Field>

        <label htmlFor={numberFieldId}>Number</label>
        <ErrorMessage className={css.error} name="number" component="span" />
        <Field type="text" name="number" id={numberFieldId}></Field>

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
