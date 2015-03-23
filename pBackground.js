var mForeverMonitor = require('forever-monitor');
// If the main process spawns a child and exists, the child cannot write
// anything to stdio or it will terminate. forever-monitor can surpress stdio
// but does not to be actively running in the parent process to do so.
// Since the main process must exit for the child to run in the background,
// a third intermediate process is needed to surpress the output. So, the
// main process spawns the intermediate process and exits, the intermediate
// process spawns the target process and surpresses its output. The target can
// write to stdio without terminating - the output will simply be ignored.

sThisScriptPath = process.argv[1];
asArguments = process.argv.slice(2);
if (asArguments.length == 0) {
  console.log("Usage: node pBackground.js script-to-run-in-background.js [arguments]");
} else if (asArguments[0] == "--child") {
  var oChild = mForeverMonitor.start(asArguments[1], {
    "args": asArguments.splice(2),
    "silent": "true"
  });
} else {
  bForever = asArguments[0] == "--forever";
  if (bForever) asArguments = asArguments.shift();
  var oChild = mForeverMonitor.start(sThisScriptPath, {
    "args": ["--child"].concat(asArguments),
    "max": bForever ? undefined : 1
  });
  console.log("Started process 0x" + oChild.child.pid.toString(16) + "/" + oChild.child.pid);
  process.exit();
}
