import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import { UserFormWithoutValidation } from "./UserFormWithoutValidation";

describe("<UserFormWithoutValidation>", () => {
  test("should call createUser with correct data from form", () => {
    const createUserMock = jest.fn();
    render(<UserFormWithoutValidation createUser={createUserMock} />);
    userEvent.type(screen.getByLabelText('First Name'), 'John Doe');
    userEvent.click(screen.getByText('Submit'));
    expect(createUserMock).toHaveBeenCalledTimes(1);
    expect(createUserMock).toHaveBeenCalledWith({ firstName: 'John Doe'});
  });
});
