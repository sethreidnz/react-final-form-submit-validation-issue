import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import { UserFormWithValidation } from "./UserFormWithValidation";

describe("<UserFormWithValidation>", () => {
  test("should call createUser with correct data from form", () => {
    const createUserMock = jest.fn();
    render(<UserFormWithValidation createUser={createUserMock} />);
    userEvent.type(screen.getByLabelText('First Name'), 'John Doe');
    userEvent.click(screen.getByText('Submit'));
    expect(createUserMock).toHaveBeenCalledTimes(1);
    expect(createUserMock).toHaveBeenCalledWith({ firstName: 'John Doe'});
  });
});
