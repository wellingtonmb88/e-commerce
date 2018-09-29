import React from "react";
import { shallow } from "enzyme";
import If from "components/If";

  test("renders If without crashing", () => {
    const tree = shallow(<If />);
    expect(tree).toMatchSnapshot();
  });

  test("testing others conditions", () => {
    const tree = shallow(
      <If test={true}>
        <span>Test</span>
      </If>
    );
    expect(tree).toMatchSnapshot();
  });
