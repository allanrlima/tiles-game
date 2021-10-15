import { getAllRecords, setRecord, getTopTenRecords } from "."

import * as index from "./index"
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

// @ponicode
describe("index.getAllRecords", () => {
    test("0", () => {
        let callFunction = () => {
            index.getAllRecords()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.setRecord", () => {
    test("0", () => {
        let callFunction = () => {
            index.setRecord("01:04:03")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.setRecord("2017-09-29T23:01:00.000Z")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.setRecord("2017-09-29T19:01:00.000")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.setRecord("Mon Aug 03 12:45:00")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.setRecord(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.getTopTenRecords", () => {
    test("0", () => {
        let callFunction = () => {
            index.getTopTenRecords()
        }
    
        expect(callFunction).not.toThrow()
    })
})
