import domModule from "./dom";
import { Project } from "./logic";

const populateList = domModule.populateList;
const deleteProject = domModule.deleteProject;

describe("Populate List", () => {
  const listDestination = document.createElement("div");
  const listArray = ["a", "b", "c"];
  const displayFunction = (string) => {
    const div = document.createElement("div");
    div.textContent = string;
    return div;
  };

  test("Populate list with given arguments", () => {
    populateList(listDestination, listArray, displayFunction);

    expect(listDestination.children.length).toBe(3);
  });
});

describe("Delete Project", () => {
  const testProject1 = new Project(
    "TESTNAME1",
    "TESTDESC1",
    "TESTDATE1",
    "TESTPRIO1"
  );

  const testProject2 = new Project(
    "TESTNAME2",
    "TESTDESC2",
    "TESTDATE2",
    "TESTPRIO2"
  );

  const projectsArray = [testProject1, testProject2];

  localStorage.setItem('projects', JSON.stringify(projectsArray));
  localStorage.setItem('selected project', JSON.stringify(testProject1));


  test("Project has being deleted", () => {
    expect(JSON.parse(localStorage.getItem('projects'))).toBe(projectsArray);
    deleteProject(testProject1);

    expect(JSON.parse(localStorage.getItem("projects"))).toEqual([testProject2]);
    
  });
});
