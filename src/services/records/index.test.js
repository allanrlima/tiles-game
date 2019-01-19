import { getAllRecords, setRecord, getTopTenRecords } from ".";

describe("records", () => {
  it("should get all records", () => {
    expect(getAllRecords()).toEqual([]);
    const records = [
      {
        name: "Batman",
        step: 12
      },
      {
        name: "Wonder Woman",
        step: 18
      }
    ];
    const stringfiedRecords = JSON.stringify(records);
    localStorage.setItem("records", stringfiedRecords);
    expect(getAllRecords()).toEqual(records);
  });
  it("should set a record", () => {
    localStorage.setItem("records", []);
    expect(getAllRecords()).toEqual([]);
    const record = {
      name: "Batman",
      step: 12
    };
    setRecord(record);
    expect(getAllRecords()).toEqual([record]);
  });
  it("should return top ten records sorted", () => {
    localStorage.setItem("records", []);
    expect(getAllRecords()).toEqual([]);
    const records = Array(100).fill({
      name: "Batman",
      step: 12
    });
    const bestRecords = [
      { name: "Wonder Woman", step: 35 },
      { name: "Green Lantern", step: 29 },
      { name: "Flash", step: 15 }
    ];
    const newRecords = [...bestRecords, ...records];
    newRecords.map(record => setRecord(record));
    const topTenRecords = getTopTenRecords();
    expect(topTenRecords.length).toBe(10);
    expect(topTenRecords.slice(0, 3)).toEqual(bestRecords);
  });
});
