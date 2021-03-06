const Mailchimp = require("mailchimp-api-v3");
const cacheResponse = require("../utils/cacheResponse");
const {
  config: { mcApiKey }
} = require("../config");

class IndexController {
  static index(req, res) {
    cacheResponse(res);
    res.render("index", { methodGet: true, csrfToken: req.csrfToken() });
  }

  static subscribe(req, res) {
    cacheResponse(res);
    const mailchimp = new Mailchimp(mcApiKey);

    const { arc_email, arc_name } = req.body;

    mailchimp
      .request({
        method: "post",
        path: "/lists/{list_id}/members",
        path_params: {
          list_id: "fd69286a97" //"497d3fcd89"
        },
        body: {
          email_address: arc_email,
          status: "subscribed",
          merge_fields: {
            FNAME: arc_name
          }
        }
      })
      .then(function(result) {
        console.log(result);
        res.render("index", {
          methodGet: false,
          csrfToken: req.csrfToken(),
          res: { type: "success", msg: "Gracias por suscribirte" }
        });
      })
      .catch(function(err) {
        console.error(err);
        res.render("index", {
          methodGet: false,
          csrfToken: req.csrfToken(),
          res: { type: "error", msg: err.title }
        });
      });
  }
}

module.exports = IndexController;
