import React from "react";
import { lighten } from "polished";
import { shallow } from "enzyme";

import Game from ".";

const tilesArray = Array(4).fill({ color: "#bc21ef", unique: false });

describe("Game", () => {
  it("renders correctly", () => {
    shallow(<Game />);
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
  describe("changeColorAndUniqueOfFirstElementInTheArray(tiles)", () => {
    const wrapper = shallow(<Game />);
    const tiles = wrapper
      .instance()
      .changeColorAndUniqueOfFirstElementInTheArray(tilesArray);
    expect(tiles[0].color).toBe(lighten(0.2, "#bc21ef"));
    expect(tiles[0].unique).toBeTruthy();
  });
  describe("getTiles()", () => {
    it("Should return an array of tiles using the current step", () => {
      const wrapper = shallow(<Game />);
      const tiles = wrapper.instance().getTiles();
      expect(tiles).toBeInstanceOf(Array);
      expect(tiles.length).toBe(4);
    });
    it("Should generate a random color in the tiles array", () => {
      const wrapper = shallow(<Game />);
      let tiles = wrapper.instance().getTiles();
      const firstColor = tiles[0].color;
      tiles = wrapper.instance().getTiles();
      const secondColor = tiles[0].color;
      expect(firstColor).not.toBe(secondColor);
    });
  });
  describe("setNextStep(isUnique)", () => {
    const wrapper = shallow(<Game />);
    it("Should increase step if isUnique is true", () => {
      wrapper.instance().setNextStep(true);
      wrapper.state().step = 2;
    });
  });
});
