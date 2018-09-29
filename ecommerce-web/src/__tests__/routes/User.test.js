import React from "react";
import User from "../../routes/User";
import { shallow } from "enzyme";

test("renders User without crashing", () => {
  shallow(<User />);
});
