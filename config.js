require('dotenv/config');

const NODE_ENV = process.env.NODE_ENV ?? 'development';
const HOST = process.env.RENDER_EXTERNAL_HOSTNAME ?? 'http://localhost:5000';
const PORT = process.env.PORT ?? 5000;

module.exports = {
    NODE_ENV,
    HOST,
    PORT
};
