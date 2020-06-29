import React from "react";
import { Form, Field } from "react-final-form";

import { User } from "../api";

const initialValues: User = {
  firstName: "",
};

type UserFormWithoutValidationProps = {
  createUser: (user: User) => Promise<User>;
};

export const UserFormWithoutValidation: React.FC<UserFormWithoutValidationProps> = ({ createUser }) => {
  return (
    <Form
      initialValues={initialValues}
      onSubmit={(values) => createUser(values)}
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
