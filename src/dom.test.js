import domModule from "./dom";

const populateList = domModule.populateList;

describe("Populate List", () => {
  const listDestination = document.createElement("div");
  const listArray = ['a', 'b', 'c'];
  const displayFunction = (string) => {
    const div = document.createElement("div");
    div.textContent = string;
    return div;
  };

  test("populate list with given arguments", () => {

    populateList(listDestination, listArray, displayFunction);

    expect(listDestination.children.length).toBe(3);
  });
});
