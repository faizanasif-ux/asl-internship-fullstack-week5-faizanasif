// Centralized error handler - catches errors passed via next(err) from any route
// and also logs them to a file for later debugging (bonus feature)
const logError = require('../utils/logger');

function errorHandler(err, req, res, next) {
  console.error(err.stack);
  logError(err, req);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    error: {
      message: err.message || 'Something went wrong',
      status: statusCode
    }
  });
}

module.exports = errorHandler;
