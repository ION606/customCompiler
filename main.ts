#!/usr/bin/env node

import { handleInstArgs } from "./handleInstArgs.js";
import { readAndParse } from "./parser.js";
import { bundlePackage, installPackage } from './utils/package_install.js'

function main() {
    if (process.argv.length < 4) throw "INSUFFICIENT ARGUMENTS!";
    const instArgs = process.argv.filter(a => a.startsWith('--'));
    if (instArgs.length) handleInstArgs(instArgs);

    const [, , command, fname] = process.argv;

    if (command === 'run') console.log("ret:", readAndParse(fname));
    else if (command === 'install' || command === 'i') installPackage(process.argv.slice(3));
    else if (command === 'bundle') bundlePackage(process.argv[3], process.argv[4]);
    else throw `UNKNOWN COMMAND "${command}"!`;
}

main();