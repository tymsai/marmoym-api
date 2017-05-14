import * as http from 'http';
import * as express from 'express';
import config from './config'
import Models from './models';

// import cors from 'cors';
// import morgan from 'morgan';
// import bodyParser from 'body-parser';
// import initializeDb from './db';
// import middleware from './middleware';

import routes from './routes'

const app = express();

app.use('/api', routes);

Models
  .__init()
  .then(() => {
    app.server = http.createServer(app);
    app.server.listen(process.env.PORT || config.server.port);
    console.log(`Server started on port ${app.server.address().port}`);
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


export default app;