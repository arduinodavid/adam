// does handling and logging of errors

//require('express-async-errors'); // monkey patches routers at runtime
const winston = require('winston');
//require('winston-mongodb');

module.exports = function() {
    //const logger = winston.createLogger({
    //   level:'info',
    //    format: winston.format.json(),
    //    defaultMeta: { service: 'user-service' },
    //    transports: [
            //
            // - Write to all logs with level `info` and below to `combined.log` 
            // - Write all logs error (and below) to `error.log`.
            //
    //        new winston.transports.File({ filename: 'logfile.log', level: 'error' }),
    //        new winston.transports.File({ filename: 'allLogs.log' }),
    //        new winston.transports.Console({ format: winston.format.combine(winston.format.timestamp(), winston.format.json()), colorize:true, prettyPrint:true })
    //    ]

    //})

    // the below deal with errors which occur outside the context of express
     winston.exceptions.handle(new winston.transports.File({ filename: 'unhandledExceptions.log', format: winston.format.combine(winston.format.timestamp(), winston.format.json())}));

     process.on('unhandledRejection', (ex) => {
        throw ex;
    });

    winston.add(new winston.transports.Console({ 
        format: winston.format.combine(winston.format.timestamp(), winston.format.json()), 
        colorize:true, 
        prettyPrint:true }));
    // winston.add(new winston.transports.File({ 
    //     filename: 'logfile.log', 
    //     format: winston.format.combine(winston.format.timestamp(), 
    //     winston.format.json())}));
    // winston.add(new winston.transports.MongoDB({ 
    //     db: 'mongodb://localhost/vidly', 
    //     useUnifiedTopology: true, 
    //     level: 'info'
    // })
    //);
};