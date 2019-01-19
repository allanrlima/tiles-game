import React from "react";
import { shallow } from "enzyme";

import { GameOver } from ".";

const props = {
  onSubmit: () => {},
  onChangeName: () => {}
};

describe("GameOver", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<GameOver {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
