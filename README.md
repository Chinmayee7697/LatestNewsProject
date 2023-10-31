# LatestNewsProject

Basic news website build with Node.js, Express & EJS – WP Rest API

Website is live on [https://news-website-l09b.onrender.com/](https://news-website-l09b.onrender.com/)


[![npm](https://img.shields.io/npm/v/newsapi.svg)](https://www.npmjs.com/package/newsapi)
[![npm](https://img.shields.io/npm/dt/newsapi.svg)](https://www.npmjs.com/package/newsapi)
[![Build Status](https://travis-ci.org/bzarras/newsapi.svg?branch=master)](https://travis-ci.org/bzarras/newsapi)

The data for the articles will come from a no-auth newsapi.

API_URL= [https://raddy.dev/wp-json/wp/v2/posts/](https://raddy.dev/wp-json/wp/v2/posts/)

Go through the [documentation](https://raddy.dev/blog/build-news-website-with-node-js-express-ejs-wp-rest-api/) to see the detailed version of how to use this API.

## Add to your project

initialise the project
```shell
  $ npm init
```

install all the dependencies
```shell
  $ npm i express axios body-parser ejs
```

install the nodemon 
```shell
  $ npm i --save-dev nodemon
```

start our local server
```shell
  $ nodemon index.js
```

## Endpoints
Important API urls are

[https://raddy.dev/wp-json/wp/v2/posts/](https://raddy.dev/wp-json/wp/v2/posts/)

[https://raddy.dev/wp-json/wp/v2/posts?search=photoshop](https://raddy.dev/wp-json/wp/v2/posts?search=photoshop)

[https://raddy.dev/wp-json/wp/v2/posts/5372](https://raddy.dev/wp-json/wp/v2/posts/5372)

[https://raddy.dev/wp-json/wp/v2/posts?_embed](https://raddy.dev/wp-json/wp/v2/posts?_embed)


_embeded gives you more data to work with.




