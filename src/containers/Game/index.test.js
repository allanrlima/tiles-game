import React from "react";
import { shallow } from "enzyme";

import Game from ".";

describe("Game", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Game />);
    expect(wrapper).toMatchSnapshot();
  });
  describe("getTilesNumberByStep()", () => {
    it("should return the number of tiles using the current step", () => {
      const wrapper = shallow(<Game />);
      const steps = [1, 2, 3, 4, 5, 6];
      const stepsResut = [4, 9, 16, 25, 36, 49];
      steps.forEach((step, index) => {
        wrapper.setState({ step });
        const tilesNumber = wrapper.instance().getTilesNumberByStep();
        expect(tilesNumber).toBe(stepsResut[index]);
      });
    });
  });
  describe("getTiles()", () => {
    it("Should return an array of tiles using the current step", () => {
      const wrapper = shallow(<Game />);
      const tiles = wrapper.instance().getTiles();
      expect(tiles).toEqual([
        { color: "red", unique: false },
        { color: "red", unique: false },
        { color: "red", unique: false },
        { color: "red", unique: false }
      ]);
    });
  });
});
