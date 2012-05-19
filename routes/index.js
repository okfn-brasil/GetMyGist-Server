
/*
 * POST token
 */

exports.token = function(req, res){
  var params = req.query
    , access_token_url = "https://github.com/login/oauth/access_token"
    , request = require('request');


  request.post({url: access_token_url+"?client_id="+params.client_id+"&client_secret="+params.client_secret+"&code="+params.code, body: JSON.stringify(params)}, function (e, r, body) {
      var _ref = body.split("&");

      if(_ref.length == 1){
        var data = {error: _ref[0].split("=")[1]};
      }else{
        var access_token = _ref[0].split("=")[1]
          , token_type = _ref[1].split("=")[1]
          , data = {access_token: access_token, token_type: token_type}
      }
      var redirect_url = params.redirect_url.match(/\?/) ? params.redirect_url+"&" : params.redirect_url+"?";
      res.redirect(redirect_url+"access_token="+ access_token +"&token_type=" +token_type)
    });
};
