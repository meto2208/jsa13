const express = require('express');
const handlers = require('./handlers/storage');
const jwt = require('express-jwt');
const fileUpload = require('express-fileupload');
const config = require('./pkg/config');

const cfgSecurity = config.get('security')
const cfgApp = config.get('app');

const app = express();
app.use(jwt({
    secret: cfgSecurity.secret,
    algorithms: cfgSecurity.algorithms
}));
app.use(fileUpload());

app.post('/storage', handlers.upload);
app.get('/storage/:filename', handlers.download);
app.get('/storage', handlers.getFileList);
app.delete('/storage/:filename', handlers.removeFile);

app.listen(cfgApp.port, err => {
    if (err) return console.log(err);
    console.log(`Server started successfully on port ${cfgApp.port}`);
});