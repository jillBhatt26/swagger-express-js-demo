// swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const { HOST } = require('./config');

// swagger options
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Swagger Express API',
            version: '1.0.0',
            description: 'A simple Express API with Swagger documentation'
        },
        contact: {
            name: 'John Doe',
            url: HOST,
            email: 'info@email.com'
        },
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
