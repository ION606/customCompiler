import { customFetch } from "./customClasses/async.js";

export const ReservedKeys = ['const', 'let', 'var', 'func', 'ion', 'pinknodders', 'return', 'for', 'in', 'of', 'break', 'print', 'error'];
export const ReservedFunctions = {
    'print': (...inp: any) => console.log(...inp),
    'echo': (...inp: any) => console.log(...inp),
    'error': (...inp: any) => console.error(...inp),
    'fetch': (...inp: any) => new customFetch(inp)
};

export const asyncFuncs = [
   'fetch'
]

export const declairators = ['create', 'make', 'const', 'var', 'let'];
export const pseudoFuncs = ['while', 'for', 'if', 'else', 'break'];
export const trycatchthrowKeys = ['try', 'catch', 'throw'];

// obsolete?
const openingCharacters = ['(', '[', '{'];
const closingCharacters = { '(': ')', '[': ']', '{': '}' };