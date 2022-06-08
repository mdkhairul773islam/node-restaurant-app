const express = require('express');
const path = require('path');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const dotenv = require('dotenv');

const app = require('express')();
const http = require('http').createServer(app);
const mongoose = require('mongoose');

dotenv.config();
const FrontendRouter = require('./src/routes/frontend/index');
const BackendRouter = require('./src/routes/backend/index');

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
  .connect(process.env.MONGO_URI, {
    dbName: 'restaurantdb',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('database connection successful!'))
  .catch((err) => console.log(err));

http.listen(process.env.PORT, () => {
  console.log(`app listening to port ${process.env.PORT}`);
});
