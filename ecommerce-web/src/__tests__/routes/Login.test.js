import React from "react";
import Login from "../../routes/Login";
import { shallow } from "enzyme";

test("renders Login without crashing", () => {
  shallow(<Login />);
});
