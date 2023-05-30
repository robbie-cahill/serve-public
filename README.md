### Serve Public
Serve any folder on your device with a Public URL

#### Installation
Install `serve-public` with NPM.

Run `npm install -g serve-public`

#### Usage
Get a Public URL for any folder on your device with:
`serve-public --path </path/to/your/folder>`

You'll see output like
```
Local server listening on http://localhost:3000 # This is the port the server is listening to on localhost
http://cnrsqd-ip-157-211-241-249.tunnelmole.com is forwarding to localhost:3000 # A public, plain HTTP url for your folder
https://cnrsqd-ip-157-211-241-249.tunnelmole.com is forwarding to localhost:3000 # A public HTTPS url for your folder
```

#### How it works
`serve-public` uses [Tunnelmole](https://github.com/robbie-cahill/tunnelmole-client) under the hood to get the Public URLs. It then starts a simple [Express](https://expressjs.com/) server with a couple of middlewares that serve up static files and folder listings.

When you hit the public URL, the request is forwarded through the tunnelmole servers to your local client, then to the express server serving up your folder.

