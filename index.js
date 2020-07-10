"use strict";
exports.__esModule = true;

function macStringify (array) {
  return array.map(i => ((i >>> 0)).toString(16).slice(-2).padStart(2, '0')).join(':');
}

module.exports = macStringify.default = macStringify;
