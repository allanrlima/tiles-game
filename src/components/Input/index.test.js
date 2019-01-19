import React from "react";
import { shallow } from "enzyme";

import { Input } from ".";

describe("Input", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Input />);
    expect(wrapper).toMatchSnapshot();
  });
});
