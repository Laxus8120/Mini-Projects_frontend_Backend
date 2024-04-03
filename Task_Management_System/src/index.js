import express from 'express';
import {connect} from './config/database.js'
import passport from 'passport';
import apiRoutes from './routes/index.js';
import bodyParser from 'body-parser';
import {passportAuth} from './config/jwt_middleware.js';
import {PORT} from './config/serverConfig.js'
//corn job 
import {taskCron} from './utils/priorityCron.js'

// trilio
import {call} from './utils/twilioCron.js'

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(passport.initialize());
passportAuth(passport);

app.use('/api', apiRoutes)

taskCron.start();
call();
app.listen(PORT,async()=>{
    console.log(`Server started`);
    await connect(); 
    console.log('mongo server connected On PORT 3000');
})
