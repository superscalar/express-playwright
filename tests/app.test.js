const { test, expect } = require('@playwright/test');
const { createServer } = require('http');
const app = require('../app.js');

let server, url;

// Configura el servidor Express antes de las pruebas
test.beforeAll(async () => {
  server = createServer(app).listen(3000);
  url = 'http://localhost:3000';
});

// Cierra el servidor después de las pruebas
test.afterAll(async () => {
  server.close();
});

test('La página principal debería mostrar "Hola Mundo"', async ({ page }) => {
  await page.goto(url);
  const content = await page.textContent('body');
  expect(content).toContain('Hola Mundo');
});

