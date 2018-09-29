import React from "react";
import { shallow } from "enzyme";
import ProductList from "components/ProductList";

const props = {
  items: [
    {
      id: 1,
      title: "Ferrari 1984",
      price: 3000.99,
      description: "Ferari 1984, Red, 1000hp "
    },
    {
      id: 2,
      title: "Porsche 2015 ",
      price: 6000.99,
      description: "Porsche 2015, Black, 2000hp "
    }
  ]
};

test("renders ProductList without crashing", () => {
  const tree = shallow(<ProductList {...props} />);
  expect(tree).toMatchSnapshot();
});
