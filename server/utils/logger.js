const fs = require('fs');
const path = require('path');

function logError(err, req) {
  const logMessage = `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} - ${err.message}\n`;
  fs.appendFile(path.join(__dirname, 'error.log'), logMessage, (fsErr) => {
    if (fsErr) console.log('Failed to write error log:', fsErr);
  });
}

module.exports = logError;
