/**
 * ...
 * 
 * @author Enginehenryed
 * @author Gimochi
 */

import * as http from 'http';
import * as express from 'express';
import config from './config'
import models from './models';
import ModelService from './services/ModelService';

// import cors from 'cors';
// import morgan from 'morgan';
// import bodyParser from 'body-parser';
// import initializeDb from './db';
// import middleware from './middleware';

import routes from './routes'

// Express Application
const app: express.Application = express();

// port
const port: number = process.env.PORT || config.server.port;

/**
 * All the routes start in the file "routes.js"
 */
app.use("/", routes);

// logger
// app.use(morgan('dev'));

// 3rd party middleware
// app.use(cors({
//   exposedHeaders: config.corsHeaders
// }));

// app.use(bodyParser.json({
//   limit : config.bodyLimit
// }));

/**
 * ...
 */
ModelService
  .init()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    })
  })

export default app;