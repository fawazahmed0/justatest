const fs = require('fs');
const path = require('path');
const {
  spawnSync
} = require('child_process');

function runPyScript(pathToScript, args) {
  // Using windows py to run python version 3
  var output = spawnSync('py', ['-3', pathToScript].concat(args))
  // Using python3 binary to run python version 3, if above fails
  if (output.error)
    output = spawnSync('python3', [pathToScript].concat(args))
  // assuming python 3 is named as python in the system
  if (output.error)
    output = spawnSync('python', [pathToScript].concat(args))
  if (output.error)
    console.log("Either the translate script have failed or Python 3 might not be installed in the system")

  return output.stdout.toString();
}

console.log("hello from node")
console.log(runPyScript(path.join(__dirname,'testscript.py')))
