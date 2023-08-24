// eslint-disable-next-line no-unused-vars
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};

global.localStorage = localStorageMock;

import { saveTasks, addTask, deleteTask, editTask } from '../taskFunctions.js';

describe('taskFunctions', () => {
  describe('addTask', () => {
    test('agrega una tarea a la lista', () => {
      const tasks = [];
      const newTasks = addTask(tasks, 'Nueva tarea');
      expect(newTasks).toHaveLength(1);
      expect(newTasks[0]).toMatchObject({ description: 'Nueva tarea', completed: false, index: 1 });
    });
  });
  describe('deleteTask', () => {
    test('elimina una tarea de la lista', () => {
      const tasks = [{ description: 'Tarea 1', completed: false, index: 1 }];
      const newTasks = deleteTask(tasks, 0);
      expect(newTasks).toHaveLength(0);
    });
  });

});