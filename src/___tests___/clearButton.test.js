import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

describe('clearButton', () => {
  let window, document, clearButton;

  beforeAll(() => {
    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');
    const dom = new JSDOM(html);
    window = dom.window;
    document = window.document;
    clearButton = document.getElementById('clear-completed');
    // Aquí podrías agregar otros elementos DOM que necesites para la prueba
  });

  test('hace lo esperado cuando se hace clic', () => {
    // Simula el comportamiento del clic en el botón
    clearButton.click();

    // Realiza las aserciones necesarias para verificar el comportamiento
    // después de hacer clic en el botón
  });
});
