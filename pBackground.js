asArguments = process.argv.slice(2);
if (asArguments.length == 0) {
  console.log("Usage: node pBackground.js script-to-run-in-background.js [arguments]");
} else {
  bForever = asArguments[0] == "--forever";
  if (bForever) asArguments = asArguments.splice(1);
  var mForeverMonitor = require('forever-monitor');
  var oChild = mForeverMonitor.start(
    asArguments[0], {
      "args": asArguments.splice(1),
      "max": bForever ? undefined : 1
    }
  );
  console.log("Started process 0x" + oChild.child.pid.toString(16) + "/" + oChild.child.pid);
}
process.exit();