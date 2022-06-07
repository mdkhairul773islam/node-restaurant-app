const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const app = require('express')();
const http = require('http').createServer(app);
const path = require('path');
// const db = require("./src/config/db");
const Router = require('./routes/index');
const FrontendRouter = require('./routes/frontend/index');

app.use(cors({ origin: '*' }));

app.use(
  fileUpload({
    createParentPath: true,
  }),
);
app.set('view engine', 'ejs');
// set static folder
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb', strict: false }));

app.use(Router);
app.use('/', FrontendRouter);

app.use(express.static(path.join(__dirname, 'public')));

/* db.raw("select 1+1 as result").catch((err) => {
  console.log(err);
  process.exit(1);
}); */

const port = process.env.PORT || 9000;
http.listen(port, () => console.log(`Server Is Running On ${port}`));
