require('dotenv').config({path: '../.env'})
const express = require("express");
const bodyParser = require("body-parser");
const FormData = require("form-data");
const fetch = require("node-fetch");
const { REACT_APP_GH_ID, REACT_APP_PROXY_URL, REACT_APP_GH_SECRET } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.json({ type: "text/*" }));
app.use(bodyParser.urlencoded({ extended: false }));

// CORS error bypass.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// End-point autenticación.
app.post("/authenticate", (req, res) => {
  const { code } = req.body;

  const data = new FormData();
  data.append("client_id", REACT_APP_GH_ID);
  data.append("client_secret", REACT_APP_GH_SECRET);
  data.append("code", code);
  data.append("redirect_uri", REACT_APP_PROXY_URL);

  if (!process.env.USER_TOKEN) {
    fetch(`https://github.com/login/oauth/access_token`, {
      method: "POST",
      body: data,
    })
      .then((response) => response.text())
      .then((paramsString) => {
        let params = new URLSearchParams(paramsString);
        process.env.USER_TOKEN = params.get("access_token");
      })
      .then(() => {
        return res.status(200).send();
      })
      .catch((error) => {
        return res.status(400).json(error);
      });
  } else {
    res.json({message: 'Already logged-in'})
  }
});

// End-point user.
app.get('/user', (req, res) => {
  fetch(`https://api.github.com/user`, {
        headers: {
          Authorization: `token ${process.env.USER_TOKEN}`,
        },
    })
    .then((response) => response.json())
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
})

// End-point repos.
app.get('/repos', (req, res) => {
  fetch(`https://api.github.com/user/repos`, {
        headers: {
          Authorization: `token ${process.env.USER_TOKEN}`,
        },
    })
    .then((response) => response.json())
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
})

// End-point langs.
app.get('/langs', (req,res) => {
  const { langUrl } = req.query
  fetch(`${langUrl}`, {
        headers: {
          Authorization: `token ${process.env.USER_TOKEN}`,
        },
    })
    .then((response) => response.json())
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
})

// End-point logout.
app.get('/logout', (req, res) => {
  delete process.env.USER_TOKEN
  res.status(200).send('Fuera')
})

const PORT = process.env.SERVER_PORT || 5000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));