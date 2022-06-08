const express = require('express');
const path = require('path');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('express')();
const http = require('http').createServer(app);

dotenv.config();
// const db = require("./src/config/db");
const FrontendRouter = require('./routes/frontend/index');
const BackendRouter = require('./routes/backend/index');

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

app.use(BackendRouter);
app.use('/', FrontendRouter);
app.use(express.static(path.join(__dirname, 'public')));

// database connection
mongoose
  // .connect(process.env.MONGO_URI, {
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('database connection successful!'))
  .catch((err) => console.log(err));

/* db.raw("select 1+1 as result").catch((err) => {
  console.log(err);
  process.exit(1);
}); */

http.listen(process.env.PORT, () => {
  console.log(`app listening to port ${process.env.PORT}`);
});
