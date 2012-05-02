Server to get the github access token

Basically, send the User to:

    http://getmygist.herokuapp.com/token?client_id=APP_CLIENT_ID&client_secret=APP_CLIENT_SECRET&code=CODE&redirect_url=YOUR_CALLBACK_URL

For the CODE is a temporary parameter to get it send the user to:

     * https://github.com/login/oauth/authorize?client_id=APP_CLIENT_ID&scope=SCOPE

NO DATA IS STORED
