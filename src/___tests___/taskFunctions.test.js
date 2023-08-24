// eslint-disable-next-line no-unused-vars
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};

global.localStorage = localStorageMock;

import { addTask, deleteTask } from '../taskFunctions.js';

describe('taskFunctions', () => {
  describe('addTask', () => {
    test('It adds a new task into the list', () => {
      const tasks = [];
      const newTasks = addTask(tasks, 'New task');
      expect(newTasks).toHaveLength(1);
      expect(newTasks[0]).toMatchObject({ description: 'New task', completed: false, index: 1 });
    });
  });
  describe('deleteTask', () => {
    test('It removes a new task into the list', () => {
      const tasks = [{ description: 'Task 1', completed: false, index: 1 }];
      const newTasks = deleteTask(tasks, 0);
      expect(newTasks).toHaveLength(0);
    });
  });

});