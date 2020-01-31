import http from 'http';
import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';
import cluster from 'cluster';
import cors from 'cors';
import { setRouter } from '../app/route/'; 
import engines from 'consolidate';
import path from 'path';


const app = express();


// create server
app.server = http.createServer(app);

// logger
app.use(morgan('tiny'));

// parse application/json
app.use(bodyParser.json({
    limit: '2000kb',
}));
app.disable('x-powered-by');

app.use(cors({
 origin: '*', // Be sure to switch to your production domain
 optionsSuccessStatus: 200
}));

// routes
setRouter( app );    

// start server
app.server.listen('8000', () => {
    console.log(`Started server on => http://localhost:${app.server.address().port} for Process Id ${process.pid}`);
});

// in case of an error
app.on( 'error', ( appErr, appCtx ) => {
    console.error( 'app error', appErr.stack );
    console.error( 'on url', appCtx.req.url );
    console.error( 'with headers', appCtx.req.headers );
});

export { app };