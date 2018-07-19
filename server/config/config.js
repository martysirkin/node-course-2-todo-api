var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://marty:00Zind00@ds231951.mlab.com:31951/zindel'; 
} else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://marty:00Zind00@ds143511.mlab.com:43511/zindeltest';
}