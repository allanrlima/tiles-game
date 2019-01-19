import React from "react";
import { shallow } from "enzyme";

import { TilesWrapper } from ".";

const props = {
  tiles: [
    { color: "red", unique: false },
    { color: "red", unique: false },
    { color: "red", unique: false },
    { color: "red", unique: false }
  ]
};

describe("TilesWrapper", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<TilesWrapper {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
