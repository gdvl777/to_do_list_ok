import { updateTaskStatus } from '../statusUpdates.js';
import { saveTasks } from '../taskFunctions.js';

jest.mock('../taskFunctions', () => ({
  saveTasks: jest.fn(),
}));

describe('updateTaskStatus', () => {
  afterEach(() => {
    saveTasks.mockClear();
  });

  test('It updates the status and order of the task into the list', () => {
    const tasks = [
      { description: 'Tarea 1', completed: false },
      { description: 'Tarea 2', completed: true },
    ];

    updateTaskStatus(tasks, 0, true);

    expect(tasks[0].completed).toBe(true);
    expect(saveTasks).toHaveBeenCalledWith(tasks);
  });
});
