import { Project, Task } from './logic';

describe('Project constructor', () => {
  const testProject = new Project(
    'TESTNAME',
    'TESTDESC',
    'TESTDATE',
    'TESTPRIO',
  );

  test('Project constructs a new project object', () => {
    expect(testProject instanceof Project).toBeTruthy();
  });

  test('The created project has a title property equal to the first argument of the constructor', () => {
    expect(testProject.title).toBe('TESTNAME');
  });

  test('The created project has a description property equal to the second argument of the constructor', () => {
    expect(testProject.description).toBe('TESTDESC');
  });

  test('The created project has a dueDate property equal to the third argument of the constructor', () => {
    expect(testProject.dueDate).toBe('TESTDATE');
  });

  test('The created project has a tasks property equal to an empty array', () => {
    expect(testProject.tasks).toEqual([]);
  });
});

describe('Task constructor', () => {
  const testTask = new Task('TESTNAME', 'TESTDESC', 'TESTDATE', 'TESTPRIO');

  test('Task constructs a new task object', () => {
    expect(testTask instanceof Task).toBeTruthy();
  });

  test('The created task has a title property equal to the first argument of the constructor', () => {
    expect(testTask.title).toBe('TESTNAME');
  });

  test('The created task has a description property equal to the second argument of the constructor', () => {
    expect(testTask.description).toBe('TESTDESC');
  });

  test('The created project has a dueDate property equal to the third argument of the constructor', () => {
    expect(testTask.dueDate).toBe('TESTDATE');
  });

  test('The created project has a priority property equal to the fourth argument of the constructor', () => {
    expect(testTask.priority).toBe('TESTPRIO');
  });
});
