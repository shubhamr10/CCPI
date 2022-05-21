const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const connectDB = require('./config/db');

const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./helpers/swagger.json');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const centersRouter = require('./routes/studyCenters');
const programmesRouter = require('./routes/programmes');
const rolesRouter = require('./routes/roles');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// connect to database
connectDB();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Swagger Documentation
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/center', centersRouter);
app.use('/programme', programmesRouter);
app.use('/role', rolesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
