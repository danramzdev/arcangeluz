module.exports = function(req) {
  return !req.accepts("html") || req.xhr;
};
