import { join } from 'path';

const EMPTY_PATH = require.resolve(join('..', 'src', 'empty'));

export default function (opts) {
  opts = opts || {};
  return {resolveId(importee) {
    if (importee && importee.slice(-1) === '/') {
      importee === importee.slice(0, -1);
    }
    if (opts[importee] === "empty") {
      return EMPTY_PATH;
    }
  }};
}
