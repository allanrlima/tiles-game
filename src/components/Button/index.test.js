import React from "react";
import { shallow } from "enzyme";

import { Button } from ".";

const props = {
  title: "test",
  onClick: () => {}
};

describe("Button", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
