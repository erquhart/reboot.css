// @ts-check

// Native
import { readFileSync } from 'fs';
import { resolve } from 'path';

// Packages
import test from 'ava';

let local, original;

test.before(() => {

  // Our copy
  //
  // NOTE: to update the local copy run:
  //
  // $ yarn update
  //
  local = readFileSync(resolve(__dirname, '..', 'dist', 'reboot.min.css')).toString();


  // Original copy
  original = readFileSync(resolve(
    __dirname,
    '..',
    'node_modules',
    'bootstrap',
    'dist',
    'css',
    'bootstrap-reboot.min.css'
  )).toString();
});

test('it is up to date', t => {
  t.is(local, original);
});
