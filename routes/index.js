
/*
 * POST token
 */

exports.token = function(req, res){
  var data = req.query
    , access_token_url = "https://github.com/login/oauth/access_token"
    , request = require('request');


  request.post({url: access_token_url+"?client_id="+data.client_id+"&client_secret="+data.client_secret+"&code="+data.code, body: JSON.stringify(data)}, function (e, r, body) {
      var _ref = body.split("&");

      if(_ref.length == 1){
        var data = {error: _ref[0].split("=")[1]};
      }else{
        var access_token = _ref[0].split("=")[1]
          , token_type = _ref[1].split("=")[1]
          , data = {access_token: access_token, token_type: token_type}
      }

      res.redirect(data.redirect_url+"&access_token="+ access_token +"&token_type=" +token_type);
    });
};
