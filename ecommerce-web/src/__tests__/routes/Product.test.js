import React from "react";
import Product from "../../routes/Product";
import { shallow } from "enzyme";

test("renders Product without crashing", () => {
  shallow(<Product />);
});
