const boom = require("@hapi/boom");
const {
  config: { dev }
} = require("../../config");
const isRequestAjaxOrApi = require("../isRequestAjaxOrApi");

function withErrorStack(err, stack) {
  if (dev) return { ...err, stack };
}

function logErrors(err, req, res, next) {
  console.error(err);
  next(err);
}

function wrapErrors(err, req, res, next) {
  if (!err.isBoom) next(boom.badImplementation(err));
  next(err);
}

function clientErrorHandler(err, req, res, next) {
  const {
    output: { statusCode, payload }
  } = err;

  if (isRequestAjaxOrApi(req) || req.headersSent) {
    res.status(statusCode).json(withErrorStack(payload, err.stack));
  } else next(err);
}

function errorHandler(err, req, res, next) {
  const {
    output: { statusCode, payload }
  } = err;

  res.status(statusCode);
  res.render("error", withErrorStack(payload, err.stack));
}

module.exports = { logErrors, wrapErrors, clientErrorHandler, errorHandler };
