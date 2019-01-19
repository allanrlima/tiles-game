import React from "react";
import { shallow } from "enzyme";

import { Container } from ".";

describe("Container", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Container />);
    expect(wrapper).toMatchSnapshot();
  });
});
