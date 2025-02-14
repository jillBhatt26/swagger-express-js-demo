const cors = require('cors');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const { PORT } = require('./config');
const appRoutes = require('./routes');
const swaggerSpecs = require('./swagger');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', appRoutes);

app.set('trust proxy', 1);

app.use(
    '/',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpecs, {
        customSiteTitle: 'Todos API',
        customfavIcon: undefined
    })
);

app.listen(PORT, () => {
    console.log(`✅✅✅...Server exposed on port: ${PORT}...✅✅✅`);
});
