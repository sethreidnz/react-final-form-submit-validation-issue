import React from "react";
import { Form, Field } from "react-final-form";

import { User } from "../api";

const initialValues: User = {
  firstName: "",
};

const validation = (values: User) => {
  const errors = {
    firstName: "",
  };
  if (values.firstName) {
    errors.firstName = "must enter name";
  }
  return errors;
};

type UserFormWithValidationProps = {
  createUser: (user: User) => Promise<User>;
};

export const UserFormWithValidation: React.FC<UserFormWithValidationProps> = ({ createUser }) => {
  return (
    <Form
      initialValues={initialValues}
      onSubmit={(values) => createUser(values)}
      validate={validation}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field
              id="firstName"
              name="firstName"
              component="input"
              placeholder="First Name"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </Form>
  );
};
