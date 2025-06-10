// src/setupTests.js

// jest-dom añade "matchers" personalizados de Jest para aserciones en nodos DOM.
// Te permite hacer cosas como:
// expect(element).toHaveTextContent(/react/i)
// aprende más: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Polyfill para TextEncoder si no está disponible en el entorno de pruebas de JSDOM.
// Esto es necesario para ciertas librerías como react-router-dom, la cual puede usarlo internamente.
// La API TextEncoder es una API de navegador estándar, pero JSDOM (el entorno de Jest)
// puede no tenerla siempre disponible dependiendo de la versión de Node.js o JSDOM.
if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = require('util').TextEncoder;
}