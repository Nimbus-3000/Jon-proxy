const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const httpProxy = require("http-proxy");
const { createProxyMiddleware } = require('http-proxy-middleware');
const port = 9000;

const proxy = httpProxy.createProxyServer({});

app.use(cors({
  origin: true,
  credentials: true,
}));


app.use('/api/songs/', createProxyMiddleware({ target: 'http://54.241.202.220'}));
app.use('/api/comments/songId', createProxyMiddleware({ target: 'http://54.241.202.220'}));
app.use('/songs', createProxyMiddleware({ target: 'http://3.21.230.11:3000'}));
app.use('/api/songId', createProxyMiddleware({ target: 'http://54.151.19.84:4001'}));



app.listen(port, () => console.log(`CAN YOU HEAR ME @ ${port}`));