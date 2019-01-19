import React from "react";
import { shallow } from "enzyme";

import { Tile } from ".";

describe("Tile", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Tile />);
    expect(wrapper).toMatchSnapshot();
  });
});
