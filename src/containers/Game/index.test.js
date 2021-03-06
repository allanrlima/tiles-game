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
    it("should change color and unique params of first element in the arrray", () => {
      const wrapper = shallow(<Game />);
      const tiles = wrapper
        .instance()
        .changeColorAndUniqueOfFirstElementInTheArray(tilesArray);
      expect(tiles[0].color).toBe(lighten(0.2, "#bc21ef"));
      expect(tiles[0].unique).toBeTruthy();
    });
  });
  describe("getTiles()", () => {
    const wrapper = shallow(<Game />);
    it("Should return an array of tiles using the current step", () => {
      const tiles = wrapper.instance().getTiles();
      expect(tiles).toBeInstanceOf(Array);
      expect(tiles.length).toBe(4);
    });
    it("Should generate a random color in the tiles array", () => {
      let tiles = wrapper.instance().getTiles();
      const firstColor = tiles[0].color;
      tiles = wrapper.instance().getTiles();
      const secondColor = tiles[0].color;
      expect(firstColor).not.toBe(secondColor);
    });
  });
  describe("handleTileClick(isUnique)", () => {
    const wrapper = shallow(<Game />);
    it("Should increase step if isUnique is true", () => {
      wrapper.instance().handleTileClick(true);
      expect(wrapper.state().step).toBe(2);
    });
    it("Should not increase step and show game over screen if isUnique is true", () => {
      wrapper.instance().handleTileClick(false);
      expect(wrapper.state().isGameOver).toBe(true);
    });
  });
  describe("onChangeName(event)", () => {
    it("shold change name in the input", () => {
      const wrapper = shallow(<Game />);
      const name = "test test";
      const event = {
        target: {
          value: name
        }
      };
      wrapper.instance().onChangeName(event);
      expect(wrapper.state().name).toBe(name);
    });
  });
  describe("onSubmitRecord(event)", () => {
    it("shold change to correct states when name is submit", () => {
      const wrapper = shallow(<Game />);
      const event = {
        preventDefault: () => {}
      };
      wrapper.instance().onSubmitRecord(event);
      expect(wrapper.state().isGameOver).toBeFalsy();
      expect(wrapper.state().step).toBe(1);
      expect(wrapper.state().name).toBe("");
    });
  });
  describe("showHallOfFame", () => {
    it("should show hall of fame screen", () => {
      const wrapper = shallow(<Game />);
      wrapper.setState({ showHallOfFame: false });
      wrapper.instance().showHallOfFame();
      expect(wrapper.state().showHallOfFame).toBeTruthy();
    });
  });
  describe("hideHallOfFame", () => {
    it("should hide hall of fame screen", () => {
      const wrapper = shallow(<Game />);
      wrapper.setState({ showHallOfFame: true });
      wrapper.instance().hideHallOfFame();
      expect(wrapper.state().showHallOfFame).toBeFalsy();
    });
  });
});
