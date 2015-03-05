pBackground
===============

Run a Node.js script as a daemon/service in the background

Getting Started
---------------
1. Install pBackground via NPM.
  
  `npm install pbackground`
  
  Optionally: rename `pbackground` to `pBackground`: npm is unable to
  handle the complexity of uppercase characters in a module name. Node.js on
  Windows does not have this problem, so renaming the folder is not required
  for you to use the module.
  
2. Run your script through pBackground.
  
  `node pBackground your-script arguments...`

Notes
-----
### Stopping the script

There is currently no way to stop the script, other than to forcefully
terminate the corresponding node.exe process.

--------------------------------------------------------------------------------

### License
This code is licensed under [CC0 v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/).
