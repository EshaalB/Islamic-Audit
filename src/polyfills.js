// src/polyfills.js
import crypto from 'crypto-browserify';

// Check if crypto.getRandomValues is missing and polyfill it
if (typeof globalThis.crypto === 'undefined' || !globalThis.crypto.getRandomValues) {
  globalThis.crypto = {
    getRandomValues: (array) => {
      // crypto.randomBytes returns a Buffer, so copy it into the passed array
      const randomBytes = crypto.randomBytes(array.length);
      for (let i = 0; i < array.length; i++) {
        array[i] = randomBytes[i];
      }
      return array;
    }
  };
}
