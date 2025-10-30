const mongoose = require('mongoose');
require('./locations'); // load schema

// Local MongoDB connection string
const dbURI = 'mongodb://127.0.0.1:27017/Loc8r'; // use 127.0.0.1 to avoid DNS issues

// Modern Mongoose connect syntax (no deprecated options)
mongoose.connect(dbURI)
  .then(() => console.log(`✅ Mongoose connected to ${dbURI}`))
  .catch(err => console.error(`❌ Mongoose connection error: ${err}`));

// CONNECTION EVENTS
mongoose.connection.on('disconnected', () => {
  console.log('⚠️ Mongoose disconnected');
});

// GRACEFUL SHUTDOWN FUNCTION
const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log(`🔒 Mongoose disconnected through ${msg}`);
    callback();
  });
};

// For nodemon restarts
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});

// For app termination (Ctrl + C)
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});

// For Heroku app termination
process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});
