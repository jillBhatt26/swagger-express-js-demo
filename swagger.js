// swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const { HOST, NODE_ENV } = require('./config');

// swagger options
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Swagger Express API',
            version: '1.0.0',
            description: 'A simple Express API with Swagger documentation'
        },
        // contact: {
        //     name: 'John Doe',
        //     url: HOST,
        //     email: 'info@email.com'
        // },
        host: HOST,
        basePath: '/',
        schemes: NODE_ENV === 'development' ? 'http' : 'https',
        servers: [
            {
                url: HOST
            }
        ]
    },
    apis: ['./docs.js'] // Path to your API routes
};

const specs = swaggerJsdoc(options);

module.exports = specs;
