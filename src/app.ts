import * as http from 'http';
import * as express from 'express';
import config from './config'
import * as DatabaseService from './services/DatabaseService';

import * as TempController from './controllers/TempController'

// import cors from 'cors';
// import morgan from 'morgan';
// import bodyParser from 'body-parser';
// import initializeDb from './db';
// import middleware from './middleware';

import routes from './routes'

const app = express();
app.server = http.createServer(app);

app.use('/', routes)

DatabaseService
  .initialize()
  .then(() => {
    app.server.listen(process.env.PORT || config.server.port);
    console.log(`Server started on port ${app.server.address().port}`);
    TempController.run();
  })

// logger
// app.use(morgan('dev'));

// 3rd party middleware
// app.use(cors({
//   exposedHeaders: config.corsHeaders
// }));

// app.use(bodyParser.json({
//   limit : config.bodyLimit
// }));

// initialize db


// // connect to db
// initializeDb( db => {
//
//   // internal middleware
//   app.use(middleware({ config, db }));
//
//   // api router
//   app.use('/api', api({ config, db }));
//
//   app.server.listen(process.env.PORT || config.port);
//
//   console.log(`Started on port ${app.server.address().port}`);
// });

export default app;