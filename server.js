const https = require('https');
const fs = require('fs');
const express = require('express');
const path = require('path');

const app = express();

const port = 443;

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  console.log(new Date());
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    Pragma: 'no-cache',
    Date: Date.now(),
  });
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const options = {
  key: fs.readFileSync('./cert/config-dir/live/my-view.app/privkey.pem'), //(개인키 지정)
  cert: fs.readFileSync('./cert/config-dir/live/my-view.app/cert.pem'), //(서버인증서 지정)
  // ca: fs.readFileSync('./cert/config-dir/live/my-view.app/fullchain.pem'), // (루트체인 지정)
  // minVersion: 'TLSv1.2', //(서버 환경에 따라 선택적 적용)
};

https.createServer(options, app).listen(port, () => {
  console.log(`app listening at ${port}`);
});
