import domModule from './dom';
import { Project } from './logic';

const { populateList } = domModule;
const { deleteProject } = domModule;

describe('Populate List', () => {
  const listDestination = document.createElement('div');
  const listArray = ['a', 'b', 'c'];
  const displayFunction = (string) => {
    const div = document.createElement('div');
    div.textContent = string;
    return div;
  };

  test('Populate list with given arguments', () => {
    populateList(listDestination, listArray, displayFunction);

    expect(listDestination.children.length).toBe(3);
  });
});

describe('Delete Project', () => {
  const testProject1 = new Project(
    'TESTNAME1',
    'TESTDESC1',
    'TESTDATE1',
    'TESTPRIO1',
  );

  const testProject2 = new Project(
    'TESTNAME2',
    'TESTDESC2',
    'TESTDATE2',
    'TESTPRIO2',
  );

  const projectsArray = [testProject1, testProject2];

  beforeEach(() => {
    localStorage.setItem('projects', JSON.stringify(projectsArray));
    localStorage.setItem('selected project', JSON.stringify(testProject1));
  });

  it("Removes a project from the LocalStorage 'projects' array", () => {
    expect((localStorage.getItem('projects'))).toBe(JSON.stringify(projectsArray));
    deleteProject(testProject1);
    expect(JSON.parse(localStorage.getItem('projects')).length).toBe(1);
    expect(localStorage.getItem('projects')).toEqual(JSON.stringify([testProject2]));
  });

  it("Sets the value of localStorage's 'selected project' to an empty array if the deleted project was selected", () => {
    expect(localStorage.getItem('selected project')).toBe(JSON.stringify(testProject1));
    deleteProject(testProject1);
    expect(localStorage.getItem('selected project')).toBe('[]');
  });
});
