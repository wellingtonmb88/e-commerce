import React from "react";
import Home from "../../routes/Home";
import { shallow } from "enzyme";

test("renders Home without crashing", () => {
  shallow(<Home />);
});
