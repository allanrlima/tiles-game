import React from "react";
import { shallow } from "enzyme";

import { HallOfFame } from ".";

const props = {
  hideHallOfFame: () => {}
};

describe("HallOfFame", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<HallOfFame {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
