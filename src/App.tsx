import React from "react";
import "./App.css";

import { UserForm } from './UserFormWithoutValidation';
import { createUser } from "./api";

const App: React.FC = () => {
  return <UserForm createUser={createUser}/>;
};

export default App;
