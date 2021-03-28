# Chat App

This is a simple implementation of a very basic chat app using React, NodeJs and SocketIO.

For now the functionality is really basic, but features will be added in the near future.

## Features

-   [x] Send and receive messages
-   [x] Select a username for the session
-   [ ] Improve UI
-   [ ] Add profile pictures
-   [ ] Add private messages
-   [ ] Add user authentication / Anonymous chatting
-   [ ] Add rooms / create rooms

## Test it yourself!

Clonse the repository

`git clone https://github.com/daniel-ulises/chat-app.git`

Go into both folders **_client_** and **_server_** and install the dependencies

`npm install` or `yarn`

Once the dependencies are installed, edit _app.js_ and _ChatRoom.jsx_ files, in the **_server_** and **_client_** folders respectively, to connect them using localhost.

```javascript
// ChatRoom.jsx
const socket = io(process.env.REACT_APP_ORIGIN_SERVER);

// app.js
origin: process.env.ORIGIN_CLIENT;
```

After editing these two lines, you can proceed to run the server and the client and have fun with this very simple chat app.

> **_/client_**
>
> `npm start` or `yarn start`
>
> **_/server_**  
> `node app.js` or `nodemon app.js`

Instead of `BrowserRouter`, I had to use `HashRouter` instead so it works with Github pages, this will cause a small issue when starting developemnt. When you start development, the browser will open at `http://localhost:3000/#/`, in order to view the main page you will have to add `welcome` to the end of the URL, making it look like this `http://localhost:3000/#/welcome`. I will try to find a solution to this so starting development will not open a blank page.

## Live demo

You can also see a live demo [here](https://daniel-ulises.github.io/chat-app/#/welcome)
